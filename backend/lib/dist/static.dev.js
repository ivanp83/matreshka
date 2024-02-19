'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fs = require('node:fs');

var _require = require('node:stream'),
    Readable = _require.Readable;

var http = require('node:http');

var path = require('node:path');

var _require2 = require('../utils/error'),
    httpError = _require2.httpError;

var cache = new Map();
var MIME_TYPES = {
  "default": 'application/octet-stream',
  html: 'text/html; charset=UTF-8',
  js: 'application/javascript; charset=UTF-8',
  json: 'application/json',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  ico: 'image/x-icon',
  svg: 'image/svg+xml'
};
var HEADERS = {
  'X-XSS-Protection': '1; mode=block',
  'X-Content-Type-Options': 'nosniff',
  'Strict-Transport-Security': 'max-age=31536000; includeSubdomains; preload',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': '*'
};

module.exports = function (root, port, console) {
  var cacheFile = function cacheFile(filePath) {
    var data, key;
    return regeneratorRuntime.async(function cacheFile$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fs.promises.readFile(filePath));

          case 2:
            data = _context.sent;
            key = filePath.substring(root.length);
            cache.set(key, data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var cacheDirectory = function cacheDirectory(directoryPath) {
    var files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, filePath;

    return regeneratorRuntime.async(function cacheDirectory$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(fs.promises.readdir(directoryPath, {
              withFileTypes: true
            }));

          case 2:
            files = _context2.sent;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 6;
            _iterator = files[Symbol.iterator]();

          case 8:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 21;
              break;
            }

            file = _step.value;
            filePath = path.join(directoryPath, file.name);

            if (!file.isDirectory()) {
              _context2.next = 16;
              break;
            }

            _context2.next = 14;
            return regeneratorRuntime.awrap(cacheDirectory(path.join(root, file.name)));

          case 14:
            _context2.next = 18;
            break;

          case 16:
            _context2.next = 18;
            return regeneratorRuntime.awrap(cacheFile(filePath));

          case 18:
            _iteratorNormalCompletion = true;
            _context2.next = 8;
            break;

          case 21:
            _context2.next = 27;
            break;

          case 23:
            _context2.prev = 23;
            _context2.t0 = _context2["catch"](6);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 27:
            _context2.prev = 27;
            _context2.prev = 28;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 30:
            _context2.prev = 30;

            if (!_didIteratorError) {
              _context2.next = 33;
              break;
            }

            throw _iteratorError;

          case 33:
            return _context2.finish(30);

          case 34:
            return _context2.finish(27);

          case 35:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[6, 23, 27, 35], [28,, 30, 34]]);
  };

  var prepareFile = function prepareFile(url) {
    var pathTraversal, exists, found, streamPath, ext;
    return regeneratorRuntime.async(function prepareFile$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            pathTraversal = !url.startsWith(url);
            _context3.next = 3;
            return regeneratorRuntime.awrap(fs.promises.access(url, fs.constants.F_OK).then(function () {
              return true;
            })["catch"](function (err) {
              console.log(err);
              return false;
            }));

          case 3:
            exists = _context3.sent;
            found = !pathTraversal && exists;
            streamPath = found ? url : new Error('Not allowed');
            ext = path.extname(streamPath).substring(1).toLowerCase();
            return _context3.abrupt("return", {
              found: found,
              ext: ext
            });

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    });
  };

  http.createServer(function _callee(req, res) {
    var url, pathToFile, _ref, found, ext, statusCode, mimeType, data, stream;

    return regeneratorRuntime.async(function _callee$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            url = req.url.substring(11);
            pathToFile = path.join(root, url);
            _context4.next = 5;
            return regeneratorRuntime.awrap(cacheDirectory(root));

          case 5:
            _context4.next = 7;
            return regeneratorRuntime.awrap(prepareFile(pathToFile));

          case 7:
            _ref = _context4.sent;
            found = _ref.found;
            ext = _ref.ext;
            statusCode = found ? 200 : 404;
            mimeType = MIME_TYPES[ext] || MIME_TYPES["default"];
            data = cache.get(url);
            stream = Readable.from(data);
            res.writeHead(statusCode, _objectSpread({}, HEADERS, {
              'Content-Type': mimeType
            }));
            stream.pipe(res);
            _context4.next = 21;
            break;

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](0);
            httpError(res, 404, 'File is not found');

          case 21:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 18]]);
  }).listen(port);
  console.log("Static on port ".concat(port));
};