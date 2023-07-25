'use strict';

const { productsToDB } = require('../utils/helpers');
const { db } = require('../db');
const orders = db('products');
const products = db('products');
const customers = db('customers');
const config = require('../config.js');
const { appEmitter } = require('../utils/EventEmitter');

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
          config.yookassa.shopId + ':' + config.yookassa.token,
        ).toString('base64'),
    );

    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    const yookassaResponse = await fetch(
      `${config.yookassa.uri}/${order[0].yookassa_id}`,
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => result);

    if (!['succeeded', 'canceled'].includes(order[0].status)) {
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
    const customer = await customers.queryRows(
      'SELECT * FROM customers where telegram_id=$1;',
      [userId],
    );

    const newOrder = await orders.queryRows(
      `INSERT INTO orders ("customer_id", "order_items") 
        VALUES ($1, $2) RETURNING *;`,
      [customer[0].id, JSON.stringify(productsToDB(productsReq), null, 2)],
    );

    const orderProducts = [];
    for await (const product of productsReq) {
      const productInDb = await products.read(product.product_id);
      orderProducts.push(productInDb.rows[0]);
    }

    appEmitter.emit(
      'siteNewOrderEvent',
      JSON.stringify({ userId, orderProducts, orderId: newOrder[0].id }),
    );

    await products.query(
      `UPDATE carts SET cart_items='${JSON.stringify(
        [],
      )}' WHERE customer_id=$1;`,
      [userId],
    );
    return orderProducts;
  },

  delete(id, isAdmin) {
    if (!isAdmin) return 'Forbidden';
    return orders.delete(id);
  },
};
