'use strict';

const { sendAlertOrderSuccess, getorderItems } = require('../utils/helpers');
const { db } = require('../db');
const orders = db('orders');
const customers = db('customers');
const { bot } = require('../lib/bot');
const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const getStatusPaymentProvider = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append('Idempotence-Key', `${new Date().getTime()}`);
  myHeaders.set(
    'Authorization',
    'Basic ' +
      Buffer.from(
        process.env.YOOKASSA_SHOPID + ':' + process.env.YOOKASSA_TOKEN,
      ).toString('base64'),
  );

  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };
  return await fetch(`${process.env.YOOKASSA_URI}/${id}`, requestOptions)
    .then((response) => response.json())
    .then((result) => result);
};

(async () => {
  const ordersInPending = await orders.queryRows(
    `SELECT * FROM orders WHERE order_status ='pending';`,
  );

  if (!ordersInPending.length) return;
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
          `SELECT * FROM orders WHERE orders.yookassa_id = $1`,
          [orderPaymentDetails.id],
        );
        // const order = await orders.queryRows(
        //   `UPDATE orders SET order_status='${orderPaymentDetails.status}' WHERE orders.yookassa_id= $1 RETURNING  *;`,
        //   [orderPaymentDetails.id],
        // );

        const customer = await customers.queryRows(
          `SELECT * FROM customers WHERE id = $1`,
          [order[0].customer_id],
        );

        try {
          await sendAlertOrderSuccess(
            order[0].yookassa_id,
            getorderItems(order[0].order_items),
            customer[0].phone,
            customer[0].first_name,
            customer[0].last_name,
            order[0].shipping_address.city,
            order[0].shipping_address.address,
            { bot, id: 1294200727, resource: 'Сайт' },
          );
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
})();
