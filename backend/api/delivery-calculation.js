'use strict';

const { db } = require('../db');
const delivery = db('delivery-calculation ');

module.exports = {
  async create(data) {
    console.log({ data });
    const sourceSQL = `SELECT * FROM store WHERE id=1;`;
    const source = await delivery.queryRows(sourceSQL);

    const sql1 = `INSERT INTO deliveries (id, source_id, destination)
    VALUES (DEFAULT, $1, ST_SetSRID(ST_MakePoint($2, $3), 4326)) RETURNING *;`;

    const newDelivery = await delivery.queryRows(sql1, [
      source[0].id,
      data.latitude,
      data.longitude,
    ]);

    const distanceSQL = `WITH points AS (
  SELECT 
    ST_GeogFromText('SRID=4326;POINT
    ( ${data.latitude} ${data.longitude})') AS point1,
    ST_GeogFromText('SRID=4326;POINT( 54.713356 20.443751 )') AS point2
)
SELECT ST_Distance(point1, point2, false) AS distance
FROM points;`;

    const distanceMetres = await delivery.queryRows(distanceSQL);
    const result = Math.floor(150 + (distanceMetres[0].distance * 5) / 100);

    return result;

    // const sql = `SELECT d.id, s.geom AS source_coordinates, d.destination
    // FROM deliveries d
    // JOIN store s ON d.source_id = s.id;`;
    // `SELECT ST_Distance(dest.location, store.geo) as distance
    // FROM deliveries dest
    // JOIN store ON dest.store_id = store.id;`;
  },
};
