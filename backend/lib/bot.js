'use strict';
const { Telegraf } = require('telegraf');
const { pool } = require('../db');
const {
  getorderItems,
  getInvoice,
  sendAlertOrderSuccess,
} = require('../utils/helpers');
const { appEmitter } = require('../utils/EventEmitter');

module.exports = (config, adminId, console) => {
  const bot = new Telegraf(config.token);
  const getOrderIdfromCTX = (ctx) => {
    const orderPayload = JSON.parse(ctx);
    return orderPayload.order_id;
  };

  const isAdmin = (userId) => userId === adminId;
  const forwardToAdmin = (ctx) => {
    if (isAdmin(ctx.message.from.id)) {
      ctx.reply('Для ответа пользователю используйте функцию Ответить/Reply.');
    } else {
      ctx.forwardMessage(adminId, ctx.from.id, ctx.message.id);
    }
  };
  appEmitter.on('newBotOrderEvent', async (data) => {
    try {
      const { userId, orderProducts, orderId } = JSON.parse(data);

      await bot.telegram.sendInvoice(
        userId,
        getInvoice(userId, orderProducts, orderId, config.providerToken),
      );
    } catch (error) {
      console.log(error);
    }
  });
  appEmitter.on('orderSuccessPay', async (data) => {
    try {
      const {
        orderId,
        orderItems,
        phone,
        name,
        lastName,
        city,
        address,
        resource,
      } = JSON.parse(data);

      const HTML = sendAlertOrderSuccess(
        orderId,
        orderItems,
        phone,
        name,
        lastName,
        city,
        address,
        resource,
      );

      return await bot.sendMessage(adminId, HTML, {
        parse_mode: 'html',
      });
    } catch (error) {
      console.log(error);
    }
  });
  appEmitter.on('siteNewOrderEvent', async (data) => {
    try {
      const { yookassaResponse, customer } = JSON.parse(data);

      const { id, description, status } = yookassaResponse;
      const { first_name, last_name, phone } = customer;

      const HTML = `
<b>Новый заказ # </b>
<pre>${id}</pre>\n
<b>Статус:</b>
<pre>${status}</pre>\n
<b>Товары:</b>
<pre>${description}</pre>\n
<b>Покупатель:</b>
<pre>${first_name}</pre>
<pre>${last_name}</pre>
<pre>тел. ${phone}</pre>\n
      `;

      return await bot.telegram.sendMessage(adminId, HTML, {
        parse_mode: 'html',
      });
    } catch (error) {
      console.log(error);
    }
  });

  bot.on('text', (ctx) => {
    if (
      ctx.message.reply_to_message &&
      ctx.message.reply_to_message.forward_from &&
      isAdmin(ctx.message.from.id)
    ) {
      ctx.telegram.sendMessage(
        ctx.message.reply_to_message.forward_from.id,
        ctx.message.text,
      );
    } else {
      forwardToAdmin(ctx);
    }
  });
  bot.on('voice', (ctx) => {
    if (
      ctx.message.reply_to_message &&
      ctx.message.reply_to_message.forward_from &&
      isAdmin(ctx.message.from.id)
    ) {
      ctx.telegram.sendVoice(
        ctx.message.reply_to_message.forward_from.id,
        ctx.message.voice.file_id,
        {
          caption: ctx.message.caption,
        },
      );
    } else {
      forwardToAdmin(ctx);
    }
  });
  bot.on('audio', (ctx) => {
    if (
      ctx.message.reply_to_message &&
      ctx.message.reply_to_message.forward_from &&
      isAdmin(ctx.message.from.id)
    ) {
      ctx.telegram.sendAudio(
        ctx.message.reply_to_message.forward_from.id,
        ctx.message.audio.file_id,
        {
          caption: ctx.message.caption,
        },
      );
    } else {
      forwardToAdmin(ctx);
    }
  });
  bot.on('document', (ctx) => {
    if (
      ctx.message.reply_to_message &&
      ctx.message.reply_to_message.forward_from &&
      isAdmin(ctx.message.from.id)
    ) {
      ctx.telegram.sendDocument(
        ctx.message.reply_to_message.forward_from.id,
        ctx.message.document.file_id,
        {
          caption: ctx.message.caption,
        },
      );
    } else {
      forwardToAdmin(ctx);
    }
  });

  bot.on('pre_checkout_query', async (ctx) => {
    await ctx.answerPreCheckoutQuery(true);
    const orderId = getOrderIdfromCTX(
      ctx.update.pre_checkout_query.invoice_payload,
    );
    const { order_items: orderItems } = await pool
      .query(`SELECT *  FROM orders WHERE id = ${orderId};`)
      .then((res) => res.rows[0]);
    const {
      post_code: zip,
      city,
      street_line1,
      street_line2,
    } = ctx.update.pre_checkout_query.order_info.shipping_address;
    const currency = ctx.update.pre_checkout_query.currency;
    const amount = ctx.update.pre_checkout_query.total_amount;
    await pool.query(
      `UPDATE orders SET order_items=$1, shipping_address=$2,
       currency=$3, amount=$4, order_status=$5
       WHERE id=$6 RETURNING order_items;`,
      [
        JSON.stringify(orderItems),
        JSON.stringify({
          zip,
          city,
          address: [street_line1, street_line2].join(' '),
        }),
        currency,
        Number(amount),
        'pending',
        orderId,
      ],
    );
  });

  bot.on('successful_payment', async (ctx) => {
    const orderId = getOrderIdfromCTX(
      ctx.update.message.successful_payment.invoice_payload,
    );
    const updatedOrder = await pool
      .query(`UPDATE orders SET order_status=$1 WHERE id=$2 RETURNING *;`, [
        'succeeded',
        orderId,
      ])
      .then((res) => res.rows[0]);
    const customer = await pool
      .query(`SELECT * FROM customers WHERE id = $1`, [
        updatedOrder.customer_id,
      ])
      .then((res) => res.rows[0]);
    const HTML = sendAlertOrderSuccess(
      orderId,
      getorderItems(updatedOrder.order_items),
      customer.phone,
      customer.first_name,
      customer.last_name,
      updatedOrder.shipping_address.city,
      updatedOrder.shipping_address.address,
      'Телеграм Бот',
    );
    return await bot.sendMessage(adminId, HTML, {
      parse_mode: 'html',
    });
  });
  console.log('Bot is running');
  // process.once('SIGINT', () => bot.stop('SIGINT'));
  // process.once('SIGTERM', () => bot.stop('SIGTERM'));
};
