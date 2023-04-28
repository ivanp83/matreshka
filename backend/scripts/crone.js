'use strict';

const { sendAlertOrderSuccess } = require('../utils/helpers');
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

        await customers.queryRows(`SELECT * FROM customers WHERE id = $1`, [
          order[0].customer_id,
        ]);
        const getorderItems = (items) =>
          items.map((item) => ({
            product: item.name,
            quantity: item.quantity,
            price: item.price,
          }));
        sendAlertOrderSuccess(getorderItems(order[0].order_items));
        // console.log(
        //   'process.env.ADMIN_ID',
        //   'bot',
        //   customer[0],
        //   order[0].shipping_address,
        //   order[0].order_items,
        // );
      }
    }
  }
})();
