const Database = require('../');
const DatabaseService = require('./DatabaseService')(Database);

module.exports = DatabaseService;