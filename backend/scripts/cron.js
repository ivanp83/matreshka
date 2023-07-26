'use strict';

const { getorderItems, sendAlertOrderSuccess } = require('../utils/helpers');
const { db } = require('../db');
const config = require('../config.js');
const orders = db('orders');
const customers = db('customers');

const { Telegraf } = require('telegraf');
const getStatusPaymentProvider = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Idempotence-Key', `${new Date().getTime()}`);
  myHeaders.set(
    'Authorization',
    'Basic ' +
      Buffer.from(
        config.yookassa.shopId + ':' + config.yookassa.token,
      ).toString('base64'),
  );

  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };
  const yookassaRequest = await fetch(
    `${config.yookassa.uri}/${id}`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => result);

  return yookassaRequest;
};
const bot = new Telegraf(config.bot.token);
(async () => {
  const ordersInPending = await orders.queryRows(
    `SELECT * FROM orders WHERE order_status ='pending';`,
  );

  if (!ordersInPending.length) return console.log('No orders Found');

  let maxIndex = 100;

  for await (const order of ordersInPending) {
    if (maxIndex <= 0) continue;
    if (new Date(order.created_at).getTime() < Date.now()) {
      maxIndex -= 1;
      const orderPaymentDetails = await getStatusPaymentProvider(
        order.yookassa_id,
      );

      if (orderPaymentDetails.status === 'succeeded') {
        const order = await orders.queryRows(
          `UPDATE orders SET order_status='${orderPaymentDetails.status}'
        WHERE orders.yookassa_id= $1 RETURNING  *;`,
          [orderPaymentDetails.id],
        );

        const customer = await customers.queryRows(
          `SELECT * FROM customers WHERE id = $1`,
          [order[0].customer_id],
        );

        try {
          const HTML = sendAlertOrderSuccess(
            order[0].id,
            getorderItems(order[0].order_items),
            customer[0].phone,
            customer[0].first_name,
            customer[0].last_name,
            order[0].shipping_address.city,
            order[0].shipping_address.address,
            'Сайт',
          );

          return await bot.telegram.sendMessage(config.adminId, HTML, {
            parse_mode: 'html',
          });
        } catch (error) {
          console.log(error);
        }

        return;
      } else if (orderPaymentDetails.status === 'canceled') {
        return await orders.queryRows(
          `UPDATE orders SET order_status='${orderPaymentDetails.status}'
        WHERE orders.yookassa_id= $1 RETURNING  *;`,
          [orderPaymentDetails.id],
        );
      }
    }
  }
})();
