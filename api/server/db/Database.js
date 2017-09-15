const config = require('../config');
const mysql = require('promise-mysql');
const ResponseService = require('../services/ResponseService/ResponseService');
const ResponseMessages = require('../constants/ResponseMessages.json');
const HttpStatus = require('../constants/HttpStatus.json');

class Database {

    constructor() {
        this.mysql = mysql;
        this.ResponseService = new ResponseService();
        this.db = null;
        this.connection = null;
    }

    initialize() {
        this.db = this.createAndReturnPool();
        this.registerListenerForErrors();
    }

    registerListenerForErrors() {
        this.db.on('error', () => {
            this.db.end();
        });
    }

    createAndReturnPool() {
        return this.mysql.createPool({
            host: config.database.host,
            user: config.database.username,
            password: config.database.password,
            database: config.database.database
        });
    }

    async getConnection() {
        this.initialize();
        
        try {
            this.connection = await this.db.getConnection();        
            return this.connection;
        }
        catch (error) {
            return this.ResponseService.makeResponse(HttpStatus.internalError, ResponseMessages.databaseError);
        }
    }
}

module.exports = Database;