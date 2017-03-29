const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config/config.json'));
module.exports = config;

/**
 * config.json must be in this format
 * {
 *   "client_id": "appId",
 *   "access_token": ""
 *  }
 */