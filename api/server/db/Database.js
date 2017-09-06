const config = require('../config');
const ResponseMessages = require('../constants/ResponseMessages.json');
const HttpStatus = require('../constants/HttpStatus.json');

class Database {

    constructor(mysql, ResponseService) {
        this.mysql = mysql;
        this.ResponseService = ResponseService;
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
        try {
            this.connection = await this.db.getConnection();        
            return this.connection;
        }
        catch (error) {
            return this.ResponseService.makeResponse(HttpStatus.internalError, ResponseMessages.databaseError);
        }
    }
}

module.exports = (mysql, ResponseService) => {
    return new Database(mysql, ResponseService);
};