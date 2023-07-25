'use strict';

const { productsToDB } = require('../utils/helpers');
const { db } = require('../db');
const orders = db('orders');
const products = db('products');
const customers = db('customers');
const config = require('../config.js');
const { appEmitter } = require('../utils/EventEmitter');

module.exports = {
  async create({ shippingAddress, orderProducts }) {
    console.log('order here');
    try {
      const ids = [...orderProducts.map((p) => p.id)];

      const productInDb = await products.queryRows(
        `SELECT *  FROM products WHERE id = ANY (ARRAY[${ids}])`,
      );

      const map = new Map();
      console.log({ map });
      for (const prod of productInDb) {
        const { quantity } = orderProducts.find((p) => {
          if (p.id == prod.id) return p.quantity;
        });
        map.set(prod.id, { ...prod, quantity });
      }
      const orderTotal = [...map.values()].reduce(
        (acc, val) => acc + val.quantity * val.price,
        0,
      );

      let customer;
      customer = await customers.queryRows(
        `SELECT * FROM customers WHERE customers.phone =$1`,
        [shippingAddress.phone],
      );

      if (!customer.length) {
        customer = await customers.queryRows(
          `INSERT INTO customers ("first_name", "last_name", "phone", "token") 
          VALUES ('${shippingAddress.first_name}','${
            shippingAddress.last_name
          }',
          '${shippingAddress.phone.replace(/[^0-9]/g, '')}', 
          '${shippingAddress.first_name}');`,
        );
      }

      const newOrder = await orders.queryRows(
        `INSERT INTO orders ("customer_id") VALUES($1) RETURNING id;`,
        [customer[0].id],
      );

      // Yookassa Request
      const payload = {
        amount: {
          value: orderTotal,
          currency: 'RUB',
        },

        payment_method_data: {
          type: 'bank_card',
        },

        confirmation: {
          type: 'redirect',
          return_url: `https://matryoshkaflowers.ru/order/${newOrder[0].id}`,
        },

        capture: true,
        description: `Заказ ${JSON.stringify(map.values(), null, 2)}`,
      };

      const headers = new Headers();
      headers.append('Idempotence-Key', `${new Date().getTime()}`);
      headers.set(
        'Authorization',
        'Basic ' +
          Buffer.from(
            config.yookassa.shopId + ':' + config.yookassa.token,
          ).toString('base64'),
      );

      headers.append('Content-Type', 'application/json');
      const requestOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
        redirect: 'follow',
      };
      const yookassaResponse = await fetch(config.yookassa.uri, requestOptions)
        .then((response) => response.json())
        .then((result) => result);
      appEmitter.emit('siteNewOrderEvent', JSON.stringify(yookassaResponse));
      await orders.queryRows(
        `UPDATE orders
   SET yookassa_id = $2, amount = $3, currency=$4, order_status=$5, 
   shipping_address=$6, order_items=$7  WHERE orders.id= $1;`,
        [
          newOrder[0].id,
          yookassaResponse.id,
          Number(yookassaResponse.amount.value),
          yookassaResponse.amount.currency,
          yookassaResponse.status,
          JSON.stringify(
            {
              city: shippingAddress.city,
              zip: shippingAddress.zip,
              address: shippingAddress.address,
            },
            null,
            2,
          ),
          JSON.stringify(productsToDB(orderProducts, null, 2)),
        ],
      );

      return {
        status: yookassaResponse.status,
        returnUrl: yookassaResponse.confirmation.return_url,
        confirmationUrl: yookassaResponse.confirmation.confirmation_url,
      };
    } catch (error) {
      console.log(error);
    }
  },
};
