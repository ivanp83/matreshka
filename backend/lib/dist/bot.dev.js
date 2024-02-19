'use strict';

var _require = require('telegraf'),
    Telegraf = _require.Telegraf;

var _require2 = require('../db'),
    pool = _require2.pool;

var _require3 = require('../utils/helpers'),
    getorderItems = _require3.getorderItems,
    getInvoice = _require3.getInvoice,
    sendAlertOrderSuccess = _require3.sendAlertOrderSuccess;

var _require4 = require('../utils/EventEmitter'),
    appEmitter = _require4.appEmitter;

module.exports = function (config, adminId, console) {
  var bot = new Telegraf(config.token);

  var getOrderIdfromCTX = function getOrderIdfromCTX(ctx) {
    var orderPayload = JSON.parse(ctx);
    return orderPayload.order_id;
  };

  var isAdmin = function isAdmin(userId) {
    return userId === adminId;
  };

  var forwardToAdmin = function forwardToAdmin(ctx) {
    if (isAdmin(ctx.message.from.id)) {
      ctx.reply('Для ответа пользователю используйте функцию Ответить/Reply.');
    } else {
      ctx.forwardMessage(adminId, ctx.from.id, ctx.message.id);
    }
  };

  appEmitter.on('newBotOrderEvent', function _callee(data) {
    var _JSON$parse, userId, orderProducts, orderId;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _JSON$parse = JSON.parse(data), userId = _JSON$parse.userId, orderProducts = _JSON$parse.orderProducts, orderId = _JSON$parse.orderId;
            _context.next = 4;
            return regeneratorRuntime.awrap(bot.telegram.sendInvoice(userId, getInvoice(userId, orderProducts, orderId, config.providerToken)));

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 6]]);
  });
  appEmitter.on('orderSuccessPay', function _callee2(data) {
    var _JSON$parse2, orderId, orderItems, phone, name, lastName, city, address, resource, HTML;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _JSON$parse2 = JSON.parse(data), orderId = _JSON$parse2.orderId, orderItems = _JSON$parse2.orderItems, phone = _JSON$parse2.phone, name = _JSON$parse2.name, lastName = _JSON$parse2.lastName, city = _JSON$parse2.city, address = _JSON$parse2.address, resource = _JSON$parse2.resource;
            HTML = sendAlertOrderSuccess(orderId, orderItems, phone, name, lastName, city, address, resource);
            _context2.next = 5;
            return regeneratorRuntime.awrap(bot.sendMessage(adminId, HTML, {
              parse_mode: 'html'
            }));

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
  appEmitter.on('siteNewOrderEvent', function _callee3(data) {
    var _JSON$parse3, yookassaResponse, customer, details, orderTotal, shippingPrice, id, description, status, first_name, phone, HTML;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _JSON$parse3 = JSON.parse(data), yookassaResponse = _JSON$parse3.yookassaResponse, customer = _JSON$parse3.customer, details = _JSON$parse3.details, orderTotal = _JSON$parse3.orderTotal, shippingPrice = _JSON$parse3.shippingPrice;
            id = yookassaResponse.id, description = yookassaResponse.description, status = yookassaResponse.status;
            first_name = customer.first_name, phone = customer.phone;
            HTML = "\n<b>\u041D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437 # </b>\n<pre>".concat(id, "</pre>\n\n<b>\u0421\u0442\u0430\u0442\u0443\u0441:</b>\n<pre>").concat(status, "</pre>\n\n<b>\u0422\u043E\u0432\u0430\u0440\u044B:</b>\n<pre>").concat(description, "</pre>\n\n<b>\u041F\u043E\u043A\u0443\u043F\u0430\u0442\u0435\u043B\u044C:</b>\n<pre>").concat(first_name, "</pre>\n<pre>\u0442\u0435\u043B. ").concat(phone, "</pre>\n\n\n<b>\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 RUB</b>\n<pre>").concat(shippingPrice, "</pre>\n\n<b>\u0418\u0442\u043E\u0433 RUB</b>\n<pre>").concat(orderTotal, "</pre>\n\n\n").concat(details.message && "<b>\u0421\u043E\u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E</b>\n\n  <pre>".concat(details.message, "</pre>\n"));
            _context3.next = 7;
            return regeneratorRuntime.awrap(bot.telegram.sendMessage(adminId, HTML, {
              parse_mode: 'html'
            }));

          case 7:
            return _context3.abrupt("return", _context3.sent);

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 10]]);
  });
  bot.on('text', function (ctx) {
    if (ctx.message.reply_to_message && ctx.message.reply_to_message.forward_from && isAdmin(ctx.message.from.id)) {
      ctx.telegram.sendMessage(ctx.message.reply_to_message.forward_from.id, ctx.message.text);
    } else {
      forwardToAdmin(ctx);
    }
  });
  bot.on('voice', function (ctx) {
    if (ctx.message.reply_to_message && ctx.message.reply_to_message.forward_from && isAdmin(ctx.message.from.id)) {
      ctx.telegram.sendVoice(ctx.message.reply_to_message.forward_from.id, ctx.message.voice.file_id, {
        caption: ctx.message.caption
      });
    } else {
      forwardToAdmin(ctx);
    }
  });
  bot.on('audio', function (ctx) {
    if (ctx.message.reply_to_message && ctx.message.reply_to_message.forward_from && isAdmin(ctx.message.from.id)) {
      ctx.telegram.sendAudio(ctx.message.reply_to_message.forward_from.id, ctx.message.audio.file_id, {
        caption: ctx.message.caption
      });
    } else {
      forwardToAdmin(ctx);
    }
  });
  bot.on('document', function (ctx) {
    if (ctx.message.reply_to_message && ctx.message.reply_to_message.forward_from && isAdmin(ctx.message.from.id)) {
      ctx.telegram.sendDocument(ctx.message.reply_to_message.forward_from.id, ctx.message.document.file_id, {
        caption: ctx.message.caption
      });
    } else {
      forwardToAdmin(ctx);
    }
  });
  bot.on('pre_checkout_query', function _callee4(ctx) {
    var orderId, _ref, orderItems, _ctx$update$pre_check, zip, city, street_line1, street_line2, currency, amount;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(ctx.answerPreCheckoutQuery(true));

          case 2:
            orderId = getOrderIdfromCTX(ctx.update.pre_checkout_query.invoice_payload);
            _context4.next = 5;
            return regeneratorRuntime.awrap(pool.query("SELECT *  FROM orders WHERE id = ".concat(orderId, ";")).then(function (res) {
              return res.rows[0];
            }));

          case 5:
            _ref = _context4.sent;
            orderItems = _ref.order_items;
            _ctx$update$pre_check = ctx.update.pre_checkout_query.order_info.shipping_address, zip = _ctx$update$pre_check.post_code, city = _ctx$update$pre_check.city, street_line1 = _ctx$update$pre_check.street_line1, street_line2 = _ctx$update$pre_check.street_line2;
            currency = ctx.update.pre_checkout_query.currency;
            amount = ctx.update.pre_checkout_query.total_amount;
            _context4.next = 12;
            return regeneratorRuntime.awrap(pool.query("UPDATE orders SET order_items=$1, shipping_address=$2,\n       currency=$3, amount=$4, order_status=$5\n       WHERE id=$6 RETURNING order_items;", [JSON.stringify(orderItems), JSON.stringify({
              zip: zip,
              city: city,
              address: [street_line1, street_line2].join(' ')
            }), currency, Number(amount), 'pending', orderId]));

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
  bot.on('successful_payment', function _callee5(ctx) {
    var orderId, updatedOrder, customer, HTML;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            orderId = getOrderIdfromCTX(ctx.update.message.successful_payment.invoice_payload);
            _context5.next = 3;
            return regeneratorRuntime.awrap(pool.query("UPDATE orders SET order_status=$1 WHERE id=$2 RETURNING *;", ['succeeded', orderId]).then(function (res) {
              return res.rows[0];
            }));

          case 3:
            updatedOrder = _context5.sent;
            _context5.next = 6;
            return regeneratorRuntime.awrap(pool.query("SELECT * FROM customers WHERE id = $1", [updatedOrder.customer_id]).then(function (res) {
              return res.rows[0];
            }));

          case 6:
            customer = _context5.sent;
            HTML = sendAlertOrderSuccess(orderId, getorderItems(updatedOrder.order_items), customer.phone, customer.first_name, updatedOrder.shipping_address.city, updatedOrder.shipping_address.address, 'Телеграм Бот');
            _context5.next = 10;
            return regeneratorRuntime.awrap(bot.sendMessage(adminId, HTML, {
              parse_mode: 'html'
            }));

          case 10:
            return _context5.abrupt("return", _context5.sent);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    });
  });
  console.log('Bot is running'); // process.once('SIGINT', () => bot.stop('SIGINT'));
  // process.once('SIGTERM', () => bot.stop('SIGTERM'));
};