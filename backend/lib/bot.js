const { Telegraf } = require('telegraf');
const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const products = require('../api/products');
const { pool } = require('../db');
const { productsToDB } = require('../utils/helpers');
const bot = new Telegraf(process.env.BOT_TOKEN);

const isAdmin = (userId) => {
  return userId == process.env.ADMIN_ID;
};
const forwardToAdmin = (ctx) => {
  if (isAdmin(ctx.message.from.id)) {
    ctx.reply('Для ответа пользователю используйте функцию Ответить/Reply.');
  } else {
    ctx.forwardMessage(process.env.ADMIN_ID, ctx.from.id, ctx.message.id);
  }
};
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
  try {
    await ctx.answerPreCheckoutQuery(true);
    const orderPayload = JSON.parse(
      ctx.update.pre_checkout_query.invoice_payload,
    );
    const orderId = orderPayload.order_id;
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
    // const { name: firstName, phone_number: phone } =
    //   ctx.update.pre_checkout_query.order_info;
    console.log(currency, amount);
    await pool.query(
      `UPDATE orders SET order_items='${JSON.stringify(
        orderItems,
      )}' currency=${currency} WHERE id=$1 RETURNING order_items;`,
      [orderId],
    );

    // console.log(productsStoreInOrder);
  } catch (err) {
    throw new Error(err);
  }
});

bot.on('successful_payment', async (ctx) => {
  try {
    const orderData = {
      name: ctx.update.message.from,
      order: ctx.update.message.successful_payment.order_info,
    };
    // console.log(ctx.update.message.successful_payment.order_info);
    // const sql = `INSERT INTO orders ("shipping_address", "order_items")
    //   VALUES(${JSON.stringify(
    //     ctx.update.message.successful_payment.order_info.shipping_address,
    //     null,
    //     2,
    //   )})`;

    // await pool.query(sql);

    //     const message_html = `<b>Новый заказ</b>
    // <pre>${orderData.name.username}</pre>
    // <pre>${orderData.name.first_name}</pre>
    // <pre>${orderData.name.last_name}</pre>
    // <b >Адрес доставки</b>
    // <pre>${orderData.order.shipping_address.state}</pre>
    // <pre>${orderData.order.shipping_address.city}</pre>
    // <pre>${orderData.order.shipping_address.street_line1}</pre>
    // <pre>${orderData.order.shipping_address.street_line2}</pre>`;

    return await bot.telegram.sendMessage(process.env.ADMIN_ID, 'message_html');
  } catch (err) {
    console.log(err);
  }
});

module.exports = { bot };
