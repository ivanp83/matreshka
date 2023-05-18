'use strict';
const fsp = require('node:fs').promises;
const path = require('node:path');
const staticServer = require('./lib/static');
const logger = require('./lib/logger.js');
const config = require('./config.js');
const { bot } = require('./lib/bot.js');
const transport = require(`./transport/${config.api.transport}.js`);
const apiPath = path.join(process.cwd(), './api');
const routing = {};

(async () => {
  const files = await fsp.readdir(apiPath);

  for (const fileName of files) {
    if (!fileName.endsWith('.js')) continue;
    const filePath = path.join(apiPath, fileName);
    const serviceName = path.basename(fileName, '.js');
    routing[serviceName] = require(filePath);
  }

  staticServer('./public', config.static.port, config.adminId, logger);
  transport(routing, config.api.port, logger);
  await bot.launch();
})();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
