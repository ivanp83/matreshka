'use strict';
const Jimp = require('jimp');
const path = require('path');
const FILES_PATH = path.join(process.cwd(), 'public', 'images');
const convert = require('heic-convert');

const productsToDB = (products) =>
  products.map((prod) => ({
    id: prod.id,
    name: prod.name,
    price: prod.price,
    quantity: prod.quantity,
  }));
const getorderItems = (items) =>
  items.map((item) => ({
    product: item.name,
    quantity: item.quantity,
    price: item.price,
  }));
async function heicToJpg(inputBuffer) {
  const outputBuffer = await convert({
    buffer: inputBuffer,
    format: 'JPEG',
    quality: 1,
  });
  return outputBuffer;
}
const convertImage = async (base64, folder, size) =>
  new Promise((reslove, reject) => {
    const returnPath = path.join('images', folder, `${size}.jpg`);
    const filePath = `${FILES_PATH}/${folder}/${size}.jpg`;
    const fileFromBase64 = Buffer.from(
      base64.replace(/^data:([A-Za-z-+/]+);base64,/, ''),
      'base64',
    );
    let fileToConvert = fileFromBase64;
    if (base64.split(',')[0].includes('image/heic')) {
      fileToConvert = heicToJpg(fileFromBase64);
    }

    Jimp.read(fileToConvert)
      .then((image) => {
        const w = image.bitmap.width;
        const h = image.bitmap.height;
        const aspectRation = h / w;
        image.resize(size, size * aspectRation).write(filePath);
        return reslove(returnPath);
      })
      .catch((err) => {
        reject(err);
      });
  });
const getInvoice = (id, products, orderId, token) => {
  const price = products.map((prod) => ({
    label: prod.name,
    amount: Number(prod.price) * Number((prod.quantity = 1)) * 100,
  }));
  const invoice = {
    chat_id: id,
    provider_token: token,
    start_parameter: 'get_access',
    title: 'Оплата в магазине Matrёshka flowers!',
    description: products.map((prod) => prod.name),
    currency: 'RUB',
    prices: price,
    need_shipping_address: true,
    need_phone_number: true,
    need_email: true,
    need_name: true,
    payload: {
      unique_id: `${id}_${Number(new Date())}`,
      order_id: orderId,
    },
  };
  return invoice;
};
const sendAlertOrderSuccess = (
  yookassaId,
  orderItems,
  phone,
  firstName,
  lastName,
  city,
  address,
  resource,
) => {
  const serializedItems = orderItems.map(
    (item, i) =>
      `${i + 1}. <pre>${item.product}</pre>, <pre>${
        item.quantity
      }шт.</pre>, <pre>${item.price}руб.</pre>`,
  );
  const messageHTML = `
 <b>Новый заказ #</b>
<pre>${yookassaId}</pre>\n
 <b>Статус</b>
<pre>оплачен</pre>\n
<b>Товары:</b>
<pre>${serializedItems}</pre>\n
<b>Покупатель:</b>
<pre>${firstName}</pre>
<pre>${lastName}</pre>
<pre>тел. ${phone}</pre>\n
<b>Адрес доставки:</b>
<pre>${city}</pre>
<pre>${address}</pre>\n
<b>ресурс:</b>
<pre>${resource}</pre>
  
  `;
  return messageHTML;
};
module.exports = {
  convertImage,
  productsToDB,
  getorderItems,
  sendAlertOrderSuccess,
  getInvoice,
};
