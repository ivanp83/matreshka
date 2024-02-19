"use strict";

var _reactToastify = require("react-toastify");

require("react-toastify/dist/ReactToastify.css");

var currencyFormat = function currencyFormat(num) {
  var value = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(num);
  return value;
};

var getDate = function getDate() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  return year + "-" + month + "-" + day;
};

var getFilteredCategories = function getFilteredCategories(categories, products) {
  var catsArray = {};

  for (var i = 0; i < categories.length; i++) {
    var category = categories[i];
    catsArray[category.id] = 0;

    for (var j = 0; j < products.length; j++) {
      var product = products[j];
      if (product) if (product.category_id === category.id) catsArray[category.id] += 1;
    }
  }

  var index = [];

  for (var k in catsArray) {
    if (catsArray[k] === 0) index.push(k);
  }

  return categories.filter(function (c) {
    if (!index.includes(String(c.id))) return c;
  });
};

var getProperty = function getProperty(obj, key) {
  return obj[key];
};

var debounce = function debounce(func, ms) {
  var timeout;
  return function () {
    var _arguments = arguments,
        _this = this;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(_this, _arguments);
    }, ms);
  };
};

var calcTotal = function calcTotal(items, shippingPrice) {
  var res = items.reduce(function (acc, obj) {
    return acc + obj.quantity * obj.price;
  }, 0);
  return Number(res) + Number(shippingPrice);
};

module.exports = {
  currencyFormat: currencyFormat,
  getDate: getDate,
  getFilteredCategories: getFilteredCategories,
  getProperty: getProperty,
  debounce: debounce,
  calcTotal: calcTotal
};