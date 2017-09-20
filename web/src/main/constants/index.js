const defaultConfig = require('./constants');

defaultConfig.api = process.env.API_HOST || defaultConfig.api;

module.exports = defaultConfig;
