'use strict';

const { productsToDB } = require('../utils/helpers');
const { db } = require('../db');
const orders = db('products');
const products = db('products');
const customers = db('customers');
const { Bot } = require('../lib/bot');
const config = require('../config.js');

const getInvoice = (id, products, orderId) => {
  const invoice = {
    chat_id: id,
    provider_token: process.env.PROVIDER_TOKEN,
    description: products,
    start_parameter: 'get_access',
    title: 'Оплата в магазине Matrёshka flowers!',
    description: products.map((prod) => prod.name),
    currency: 'RUB',
    prices: products.map((prod) => {
      return { label: prod.name, amount: prod.price * prod.quantity * 100 };
    }),
    need_shipping_address: true,
    need_phone_number: true,
    need_email: true,
    need_name: true,
    // send_phone_number_to_provider: true,
    // send_email_to_provider: true,
    payload: {
      unique_id: `${id}_${Number(new Date())}`,
      order_id: orderId,
    },
  };
  return invoice;
};

module.exports = {
  async read(id, isAdmin, fields = ['*']) {
    const names = fields.join(', ');
    const sql = `SELECT ${names} FROM orders`;
    if (!id) return orders.queryRows(sql);

    const order = await orders.queryRows(`${sql} WHERE orders.id = $1`, [id]);

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
    let yookassaResponse = await fetch(
      `${config.yookassa.uri}/${order[0].yookassa_id}`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => result);

    if (order[0].status !== 'succeeded' || 'canceled') {
      order[0].status = yookassaResponse.status;
      await orders.queryRows(
        `UPDATE orders
        SET order_status = $1
        WHERE orders.id=$2;`,
        [yookassaResponse.status, order[0].id],
      );
    }

    return await orders.queryRows(`${sql} WHERE orders.id = $1`, [order[0].id]);
  },

  async create({ products: productsReq, userId }) {
    try {
      const customer = await customers.queryRows(
        `SELECT * FROM customers where telegram_id=$1;`,
        [userId],
      );

      const newOrder = await orders.queryRows(
        `INSERT INTO orders ("customer_id", "order_items") VALUES ($1, $2) RETURNING *;`,
        [customer[0].id, JSON.stringify(productsToDB(productsReq), null, 2)],
      );

      let orderProducts = [];
      for await (let product of productsReq) {
        const productInDb = await products.read(product.product_id);
        orderProducts.push(productInDb.rows[0]);
      }

      await Bot.sendInvoice(
        userId,
        getInvoice(userId, productsReq, newOrder[0].id),
      );
      await products.query(
        `UPDATE carts SET cart_items='${JSON.stringify(
          [],
        )}' WHERE customer_id=$1;`,
        [userId],
      );
      return orderProducts;
    } catch (error) {
      console.log(error);
    }
  },

  delete(id, isAdmin) {
    if (!isAdmin) return 'Forbidden';
    return orders.delete(id);
  },
};
