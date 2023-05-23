'use strict';
const EventEmitter = require('node:events');
class AppEmitter extends EventEmitter {}
const appEmitter = new AppEmitter();

module.exports = { appEmitter };
