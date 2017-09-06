const { promisify } = require('util');
const PromisifyService = require('./PromisifyService')(promisify);

module.exports = PromisifyService;
