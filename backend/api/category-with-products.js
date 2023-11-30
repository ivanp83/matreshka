'use strict';

const { db } = require('../db');
const categories = db('category-with-products');
const products = db('products');

module.exports = {
  async read(id, isAdmin, fields = ['*']) {
    const names = fields.join(', ');

    const sql = `SELECT ${names} FROM categories`;
    if (id === '0') {
      return await products.queryRows(
        `SELECT * FROM products INNER JOIN images ON products.id=images.product_id;`,
      );
    }

    const cat = await categories.queryRows(
      `${sql} INNER JOIN products ON products.category_id=categories.id
       INNER JOIN images ON products.id=images.product_id
         WHERE categories.id = $1`,
      [id],
    );

    return cat;
  },
};
