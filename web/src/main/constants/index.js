const defaultConfig = require('./constants');

defaultConfig.api = process.env.API_HOST || defaultConfig.api;
console.log(process)

module.exports = defaultConfig;
