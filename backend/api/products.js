'use strict';
const fs = require('node:fs');
const path = require('node:path');
const { db } = require('../db');
const products = db('products');
const images = db('images');
const { convertImage } = require('../utils/helpers');

module.exports = {
  async read(id, isAdmin, fields = ['*']) {
    const names = fields.join(', ');
    const sql = `SELECT ${names} FROM products
     INNER JOIN images ON products.id=images.product_id`;
    if (!id) return await products.queryRows(sql);
    return await products.queryRows(`${sql} WHERE products.id = $1`, [id]);
  },

  async create({ image, category, name, price, description, stock }, isAdmin) {
    if (!isAdmin) return 'Forbidden';

    const folder = new Date().getTime().toString();
    const p1 = await convertImage(image, folder, 600);
    const p2 = await convertImage(image, folder, 1400);
    const [small, big] = await Promise.all([p1, p2]);
    const prod = await products
      .create({ category_id: category, name, price, description, stock })
      .then((prod) => prod.rows[0]);

    await images.create({ product_id: prod.id, small, big });
    return { status: 201 };
  },

  async update(
    {
      id: product_id,
      name,
      price,
      description,
      stock,
      category_id,
      base64Data,
    },
    isAdmin,
  ) {
    if (!isAdmin) return 'Forbidden';

    await products.update(product_id, {
      category_id,
      name,
      price,
      description,
      stock,
    });

    if (base64Data) {
      const folder = new Date().getTime().toString();

      const sql = `SELECT * FROM images WHERE images.product_id=$1;`;
      const res = await images.queryRows(sql, [product_id]);

      const folderToRemove = res[0].small.split('/');
      const folderPath = path.join(
        process.cwd(),
        'public',
        folderToRemove[0],
        folderToRemove[1],
      );

      if (fs.existsSync(folderPath)) {
        fs.rmSync(folderPath, {
          recursive: true,
          force: true,
        });
      }

      const p1 = await convertImage(base64Data, folder, 768);
      const p2 = await convertImage(base64Data, folder, 1600);
      const [small, big] = await Promise.all([p1, p2]);
      await images.update(product_id, { small, big });
    }

    const sql = `SELECT * FROM products INNER JOIN
       images ON products.id=images.product_id`;
    return await products.query(`${sql} WHERE products.id = $1`, [product_id]);
  },
  async delete(id, isAdmin) {
    if (!isAdmin) return 'Forbidden';

    const sql = `SELECT * FROM images WHERE product_id=$1;`;
    const res = await products.queryRows(sql, [id]);

    const folderToRemove = res[0].small.split('/');
    const folderPath = path.join(
      process.cwd(),
      'public',
      folderToRemove[0],
      folderToRemove[1],
    );

    if (fs.existsSync(folderPath)) {
      products.delete(id);
      fs.rmSync(folderPath, {
        recursive: true,
        force: true,
      });
    }

    return await products.queryRows(
      `SELECT * FROM products INNER JOIN 
        images ON products.id=images.product_id;`,
    );
  },
};
