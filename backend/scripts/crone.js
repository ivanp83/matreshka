'use strict';

const { db } = require('../db');
const orders = db('orders');
const path = require('node:path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const getYookassaOrderStatus = async (id) => {
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
  const allOrders = await orders.queryRows(
    `SELECT * FROM orders WHERE order_status = 'pending'`,
  );
  console.log(allOrders);
  if (!allOrders.length) return;
  let maxIndex = 100;

  for (const order of allOrders) {
    if (maxIndex <= 0) continue;
    if (new Date(order.created_at).getTime() < Date.now()) {
      maxIndex -= 1;
      const orderYookassaStatus = await getYookassaOrderStatus(
        order.yookassa_id,
      );
      console.log(orderYookassaStatus);
    }
  }
  //   for (const order of allOrders) {
  //     if (maxIndex <= 0) continue;

  //     if (new Date(order.createAt).getTime() < Date.now()) {
  //       maxIndex -= 1;
  //       const orderYookassaStatus =
  //         await this.apiService.getStatusInitializedYookassaOrder(
  //           order.yookassaId,
  //         );
  //       await this.logsService.addLog(
  //         order,
  //         {
  //           method: 'GET',
  //           uri: this.configService.get < string > 'YOOKASSA_URI',
  //           payload: null,
  //         },
  //         orderYookassaStatus,
  //         orderYookassaStatus.status,
  //       );
  //       const updatedOrder = await this.ordersService.update(order.id, {
  //         status: orderYookassaStatus.status,
  //       });
  //       if (updatedOrder.status === 'succeeded') {
  //         this.eventEmitter.emit('order.created', updatedOrder);
  //       } else {
  //         const orderYookassaStatus =
  //           await this.apiService.getStatusInitializedYookassaOrder(
  //             order.yookassaId,
  //           );
  //         await this.logsService.addLog(
  //           order,
  //           {
  //             method: 'GET',
  //             uri: this.configService.get < string > 'YOOKASSA_URI',
  //             payload: null,
  //           },
  //           orderYookassaStatus,
  //           orderYookassaStatus.status,
  //         );
  //         if (orderYookassaStatus.status !== 'pending') {
  //           let updatedOrder2 = await this.ordersService.update(order.id, {
  //             status: orderYookassaStatus.status,
  //           });
  //           maxIndex -= 1;
  //           if (updatedOrder2.status === 'succeeded') {
  //             this.eventEmitter.emit('order.created', updatedOrder2);
  //           }
  //         }
  //       }
  //     }
  //   }
})();
