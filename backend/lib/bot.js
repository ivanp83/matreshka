'use strict';
const { Telegraf } = require('telegraf');
const { pool } = require('../db');
const { getorderItems, sendAlertOrderSuccess } = require('../utils/helpers');
const { appEmitter } = require('../utils/EventEmitter');

const getInvoice = (id, products, orderId, token) => {
  const invoice = {
    chat_id: id,
    provider_token: token,
    start_parameter: 'get_access',
    title: 'Оплата в магазине Matrёshka flowers!',
    description: products.map((prod) => prod.name),
    currency: 'RUB',
    prices: products.map((prod) => ({
      label: prod.name,
      amount: prod.price * prod.quantity * 100,
    })),
    need_shipping_address: true,
    need_phone_number: true,
    need_email: true,
    need_name: true,
    payload: {
      unique_id: `${id}_${Number(new Date())}`,
      order_id: orderId,
    },
  };
  return invoice;
};

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
  appEmitter.on('newOrderEvent', (data) => {
    const { userId, productsReq, orderId } = JSON.parse(data);

    bot.telegram.sendInvoice(
      userId,
      getInvoice(userId, productsReq, orderId, config.providerToken),
    );
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
    await sendAlertOrderSuccess(
      orderId,
      getorderItems(updatedOrder.order_items),
      customer.phone,
      customer.first_name,
      customer.last_name,
      updatedOrder.shipping_address.city,
      updatedOrder.shipping_address.address,
      { bot: bot.telegram, id: adminId, resource: 'Телеграм Бот' },
    );
  });
  console.log('Bot is running');
  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));
};
