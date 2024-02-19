'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _require = require('../utils/helpers'),
    productsToDB = _require.productsToDB;

var _require2 = require('../db'),
    db = _require2.db;

var orders = db('orders');
var products = db('products');
var customers = db('customers');

var config = require('../config.js');

var _require3 = require('../utils/EventEmitter'),
    appEmitter = _require3.appEmitter;

module.exports = {
  create: function create(_ref) {
    var shippingDetails, orderProducts, details, ids, productInDb, map, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _loop, _iterator, _step, orderTotal, customer, newOrder, payload, headers, requestOptions, yookassaResponse;

    return regeneratorRuntime.async(function create$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            shippingDetails = _ref.shippingDetails, orderProducts = _ref.orderProducts, details = _ref.details;
            _context.prev = 1;
            ids = _toConsumableArray(orderProducts.map(function (p) {
              return p.id;
            }));
            _context.next = 5;
            return regeneratorRuntime.awrap(products.queryRows("SELECT *  FROM products WHERE id = ANY (ARRAY[".concat(ids, "])")));

          case 5:
            productInDb = _context.sent;
            map = new Map();
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 10;

            _loop = function _loop() {
              var prod = _step.value;

              var _orderProducts$find = orderProducts.find(function (p) {
                if (p.id == prod.id) return p.quantity;
              }),
                  quantity = _orderProducts$find.quantity;

              map.set(prod.id, _objectSpread({}, prod, {
                quantity: quantity
              }));
            };

            for (_iterator = productInDb[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              _loop();
            }

            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](10);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 19:
            _context.prev = 19;
            _context.prev = 20;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 22:
            _context.prev = 22;

            if (!_didIteratorError) {
              _context.next = 25;
              break;
            }

            throw _iteratorError;

          case 25:
            return _context.finish(22);

          case 26:
            return _context.finish(19);

          case 27:
            orderTotal = Number(shippingDetails.price) + Number(_toConsumableArray(map.values()).reduce(function (acc, val) {
              return acc + val.quantity * val.price;
            }, 0));
            _context.next = 30;
            return regeneratorRuntime.awrap(customers.queryRows("SELECT * FROM customers WHERE customers.phone =$1", [shippingDetails.phone]));

          case 30:
            customer = _context.sent;

            if (customer.length) {
              _context.next = 35;
              break;
            }

            _context.next = 34;
            return regeneratorRuntime.awrap(customers.queryRows("INSERT INTO customers (\"first_name\",  \"phone\", \"token\") \n          VALUES ('".concat(shippingDetails.first_name, "',\n          '").concat(shippingDetails.phone.replace(/[^0-9]/g, ''), "', \n          '").concat(shippingDetails.first_name, "');")));

          case 34:
            customer = _context.sent;

          case 35:
            _context.next = 37;
            return regeneratorRuntime.awrap(orders.queryRows("INSERT INTO orders (\"customer_id\") VALUES($1) RETURNING id;", [customer[0].id]));

          case 37:
            newOrder = _context.sent;
            // Yookassa Request
            payload = {
              amount: {
                value: orderTotal,
                currency: 'RUB'
              },
              payment_method_data: {
                type: 'bank_card'
              },
              confirmation: {
                type: 'redirect',
                return_url: "https://matryoshkaflowers.ru/order/".concat(newOrder[0].id)
              },
              capture: true,
              description: "".concat(JSON.stringify.apply(JSON, _toConsumableArray(orderProducts.map(function (p) {
                return p.name;
              })).concat([null, 2])))
            };
            headers = new Headers();
            headers.append('Idempotence-Key', "".concat(new Date().getTime()));
            headers.set('Authorization', 'Basic ' + Buffer.from(config.yookassa.shopId + ':' + config.yookassa.token).toString('base64'));
            headers.append('Content-Type', 'application/json');
            requestOptions = {
              method: 'POST',
              headers: headers,
              body: JSON.stringify(payload),
              redirect: 'follow'
            };
            _context.next = 46;
            return regeneratorRuntime.awrap(fetch(config.yookassa.uri, requestOptions).then(function (response) {
              return response.json();
            }).then(function (result) {
              return result;
            }));

          case 46:
            yookassaResponse = _context.sent;
            appEmitter.emit('siteNewOrderEvent', JSON.stringify({
              yookassaResponse: yookassaResponse,
              customer: customer[0],
              details: details,
              orderTotal: orderTotal,
              shippingPrice: shippingDetails.price
            }));
            _context.next = 50;
            return regeneratorRuntime.awrap(orders.queryRows("UPDATE orders\n   SET yookassa_id = $2, amount = $3, currency=$4, order_status=$5, \n   shipping_address=$6, order_items=$7  WHERE orders.id= $1;", [newOrder[0].id, yookassaResponse.id, Number(yookassaResponse.amount.value), yookassaResponse.amount.currency, yookassaResponse.status, JSON.stringify({
              city: shippingDetails.city,
              zip: shippingDetails.zip,
              address: shippingDetails.address
            }, null, 2), JSON.stringify(productsToDB(orderProducts, null, 2))]));

          case 50:
            return _context.abrupt("return", {
              status: yookassaResponse.status,
              returnUrl: yookassaResponse.confirmation.return_url,
              confirmationUrl: yookassaResponse.confirmation.confirmation_url
            });

          case 53:
            _context.prev = 53;
            _context.t1 = _context["catch"](1);
            console.log(_context.t1);

          case 56:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 53], [10, 15, 19, 27], [20,, 22, 26]]);
  }
};