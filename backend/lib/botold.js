'use strict';
//const { Telegraf } = require('telegraf');
// const path = require('node:path');
// require('dotenv').config({ path: path.join(__dirname, '../.env') });
// const { pool } = require('../db');

// const { getorderItems, sendAlertOrderSuccess } = require('../utils/helpers');
// const config = require('../config.js');
// const bot = new Telegraf([config.bot.token]);
// const getOrderIdfromCTX = (ctx) => {
//   const orderPayload = JSON.parse(ctx);
//   return orderPayload.order_id;
// };
const isAdmin = (userId) => userId === process.env.ADMIN_ID;
const forwardToAdmin = (ctx) => {
  if (isAdmin(ctx.message.from.id)) {
    ctx.reply('Для ответа пользователю используйте функцию Ответить/Reply.');
  } else {
    ctx.forwardMessage(process.env.ADMIN_ID, ctx.from.id, ctx.message.id);
  }
};

const { Telegraf } = require('telegraf');
const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { pool } = require('../db');
const { getorderItems, sendAlertOrderSuccess } = require('../utils/helpers');

class Bot {
  constructor(config, logger) {
    this.config = config;
    this.console = logger;
    this.bot = new Telegraf(config.token);
    this.init();
    this.botOnText();
    this.botOnVoice();
    this.botOnAudio();
    this.botOnDocument();
    this.botOnPreCheckout();
    this.botOnSuccessPayment();
  }

  static getInstance(config, logger) {
    if (!this.bot) {
      this.bot = new Bot(config, logger);
    }
    return this.bot;
  }
  async init() {
    try {
      this.console.log('Bot is launched');
      await this.bot.launch();
    } catch (error) {
      this.console.log(error);
    }
  }
  botOnText() {
    this.bot.on('text', (ctx) => {
      try {
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
          this.forwardToAdmin(ctx);
        }
      } catch (error) {
        this.console.log(error);
      }
    });
  }
  botOnVoice() {
    this.bot.on('voice', (ctx) => {
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
        this.forwardToAdmin(ctx);
      }
    });
  }
  botOnAudio() {
    this.bot.on('audio', (ctx) => {
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
  }
  botOnDocument() {
    this.bot.on('document', (ctx) => {
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
        this.forwardToAdmin(ctx);
      }
    });
  }
  botOnPreCheckout() {
    this.bot.on('pre_checkout_query', async (ctx) => {
      try {
        await ctx.answerPreCheckoutQuery(true);
        const orderId = this.getOrderIdfromCTX(
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
      } catch (error) {
        this.console.log(error);
      }
    });
  }
  botOnSuccessPayment() {
    this.bot.on('successful_payment', async (ctx) => {
      try {
        const orderId = this.getOrderIdfromCTX(
          ctx.update.message.successful_payment.invoice_payload,
        );
        const updatedOrder = await pool
          .query('UPDATE orders SET order_status=$1 WHERE id=$2 RETURNING *;', [
            'succeeded',
            orderId,
          ])
          .then((res) => res.rows[0]);
        const customer = await pool
          .query('SELECT * FROM customers WHERE id = $1', [
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
          { bot: this.bot, id: this.config.adminId, resource: 'Телеграм Бот' },
        );
      } catch (error) {
        this.console.log(error);
      }
    });
  }
  getOrderIdfromCTX(ctx) {
    const orderPayload = JSON.parse(ctx);
    return orderPayload.order_id;
  }
  isAdmin(userId) {
    return userId === this.config.adminId;
  }
  forwardToAdmin(ctx) {
    if (this.isAdmin(ctx.message.from.id)) {
      ctx.reply('Для ответа пользователю используйте функцию Ответить/Reply.');
    } else {
      ctx.forwardMessage(this.config.adminId, ctx.from.id, ctx.message.id);
    }
  }
  async sendInvoice(id, cb) {
    this.bot.telegram.sendInvoice(id, cb);
  }
  static stop(sig) {
    this.bot.stop(sig);
  }
}

module.exports = { Bot };
