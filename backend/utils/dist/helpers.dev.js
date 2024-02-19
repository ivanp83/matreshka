'use strict';

var Jimp = require('jimp');

var path = require('path');

var FILES_PATH = path.join(process.cwd(), 'public', 'images');

var convert = require('heic-convert');

var productsToDB = function productsToDB(products) {
  return products.map(function (prod) {
    return {
      id: prod.id,
      name: prod.name,
      price: prod.price,
      quantity: prod.quantity
    };
  });
};

var getorderItems = function getorderItems(items) {
  return items.map(function (item) {
    return {
      product: item.name,
      quantity: item.quantity,
      price: item.price
    };
  });
};

function heicToJpg(inputBuffer) {
  var outputBuffer;
  return regeneratorRuntime.async(function heicToJpg$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(convert({
            buffer: inputBuffer,
            format: 'JPEG',
            quality: 1
          }));

        case 2:
          outputBuffer = _context.sent;
          return _context.abrupt("return", outputBuffer);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

var convertImage = function convertImage(base64, folder, size) {
  return regeneratorRuntime.async(function convertImage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise(function (reslove, reject) {
            var returnPath = path.join('images', folder, "".concat(size, ".jpg"));
            var filePath = "".concat(FILES_PATH, "/").concat(folder, "/").concat(size, ".jpg");
            var fileFromBase64 = Buffer.from(base64.replace(/^data:([A-Za-z-+/]+);base64,/, ''), 'base64');
            var fileToConvert = fileFromBase64;

            if (base64.split(',')[0].includes('image/heic')) {
              fileToConvert = heicToJpg(fileFromBase64);
            }

            Jimp.read(fileToConvert).then(function (image) {
              var w = image.bitmap.width;
              var h = image.bitmap.height;
              var aspectRation = h / w;
              image.resize(size, size * aspectRation).write(filePath);
              return reslove(returnPath);
            })["catch"](function (err) {
              reject(err);
            });
          }));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var getInvoice = function getInvoice(id, products, orderId, token) {
  var price = products.map(function (prod) {
    return {
      label: prod.name,
      amount: Number(prod.price) * Number(prod.quantity = 1) * 100
    };
  });
  var invoice = {
    chat_id: id,
    provider_token: token,
    start_parameter: 'get_access',
    title: 'Оплата в магазине Matrёshka flowers!',
    description: products.map(function (prod) {
      return prod.name;
    }),
    currency: 'RUB',
    prices: price,
    need_shipping_address: true,
    need_phone_number: true,
    need_email: true,
    need_name: true,
    payload: {
      unique_id: "".concat(id, "_").concat(Number(new Date())),
      order_id: orderId
    }
  };
  return invoice;
};

var sendAlertOrderSuccess = function sendAlertOrderSuccess(yookassaId, orderItems, phone, firstName, city, address, resource) {
  var serializedItems = orderItems.map(function (item, i) {
    return "".concat(i + 1, ". <pre>").concat(item.product, "</pre>, <pre>").concat(item.quantity, "\u0448\u0442.</pre>, <pre>").concat(item.price, "\u0440\u0443\u0431.</pre>");
  });
  var messageHTML = "\n <b>\u041D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437 #</b>\n<pre>".concat(yookassaId, "</pre>\n\n <b>\u0421\u0442\u0430\u0442\u0443\u0441</b>\n<pre>\u043E\u043F\u043B\u0430\u0447\u0435\u043D</pre>\n\n<b>\u0422\u043E\u0432\u0430\u0440\u044B:</b>\n<pre>").concat(serializedItems, "</pre>\n\n<b>\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C:</b>\n<pre>").concat(firstName, "</pre>\n<pre>\u0442\u0435\u043B. ").concat(phone, "</pre>\n\n<b>\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438:</b>\n<pre>").concat(city, "</pre>\n<pre>").concat(address, "</pre>\n\n<b>\u0440\u0435\u0441\u0443\u0440\u0441:</b>\n<pre>").concat(resource, "</pre>\n  \n  ");
  return messageHTML;
};

function convertDurationToISO8601(duration) {
  var hours = Math.floor(duration / 3600);
  var minutes = Math.floor(duration % 3600 / 60);
  var seconds = Math.floor(duration % 60); // Add leading zeros if needed

  var formattedDuration = 'PT';

  if (hours > 0) {
    formattedDuration += "".concat(hours, "H");
  }

  if (minutes > 0) {
    formattedDuration += "".concat(minutes, "M");
  }

  if (seconds > 0) {
    formattedDuration += "".concat(seconds, "S");
  }

  return formattedDuration;
}

module.exports = {
  convertImage: convertImage,
  productsToDB: productsToDB,
  getorderItems: getorderItems,
  sendAlertOrderSuccess: sendAlertOrderSuccess,
  getInvoice: getInvoice,
  convertDurationToISO8601: convertDurationToISO8601
};