const mysql = require('promise-mysql');
const Database = require('./Database')(mysql, ResponseService);

module.exports = Database;
