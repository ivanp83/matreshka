'use strict';

const { db } = require('../db');
const categories = db('category-with-products');

module.exports = {
  async read(id, isAdmin, fields = ['*']) {
    try {
      const names = fields.join(', ');
      const sql = `SELECT ${names} FROM categories`;
      if (!id) return await categories.queryRows(sql);

      const cat = await categories.queryRows(
        `${sql} INNER JOIN products ON products.category_id=categories.id
       INNER JOIN images ON products.id=images.product_id
         WHERE categories.id = $1`,
        [id],
      );

      return cat;
    } catch (error) {
      console.log(error);
    }
  },
};
