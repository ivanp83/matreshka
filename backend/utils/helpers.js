const Jimp = require('jimp');
const path = require('path');
const FILES_PATH = path.join(process.cwd(), 'public', 'images');
const convert = require('heic-convert');

async function heicToJpg(inputBuffer) {
  const outputBuffer = await convert({
    buffer: inputBuffer,
    format: 'JPEG',
    quality: 1,
  });
  return outputBuffer;
}
const convertImage = async (base64, folder, size) =>
  new Promise(async (reslove, reject) => {
    const returnPath = path.join('images', folder, `${size}.jpg`);
    const filePath = `${FILES_PATH}/${folder}/${size}.jpg`;
    const fileFromBase64 = Buffer.from(
      base64.replace(/^data:([A-Za-z-+/]+);base64,/, ''),
      'base64',
    );
    let fileToConvert = fileFromBase64;
    if (base64.split(',')[0].includes('image/heic')) {
      fileToConvert = await heicToJpg(fileFromBase64);
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

const sendAlertOrderSuccess = async (
  yookassaId,
  orderItems,
  phone,
  firstName,
  lastName,
  city,
  address,
  { bot, id, resource },
) => {
  const serializedItems = orderItems.map(
    (item, i) =>
      `${i + 1}. <pre>${item.product}</pre>, <pre>${
        item.quantity
      }шт.</pre>, <pre>${item.price}руб.</pre>`,
  );
  const messageHTML = `<b>Новый заказ #${yookassaId}</b>\n\n
<b>Товары:</b>
    <pre>${serializedItems}</pre>\n\n
<b>Покупатель:</b>
    <pre>${firstName}</pre>
    <pre>${lastName}</pre>
    <pre>тел. ${phone}</pre>\n\n
<b>Адрес доставки:</b>
    <pre>${city}</pre>
    <pre>${address}</pre>\n\n
<b>Площадка:</b>
    <pre>${resource}</pre>

`;
  return await bot.telegram.sendMessage(id, messageHTML, {
    parse_mode: 'html',
  });
};

module.exports = { convertImage, sendAlertOrderSuccess };
