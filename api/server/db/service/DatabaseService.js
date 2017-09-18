const Database = require('../Database');

class DatabaseService {
    constructor() {
        this.Database = new Database();
    }

    async execute(query, params) {
        let returnedData;
        let connection;
        try {
            connection = await this.Database.getConnection();
            await connection.beginTransaction();
            if (params)
                returnedData = await connection.query(query, params);
            else
                returnedData = await connection.query(query);
            await connection.commit();

            return this.parseDataFromDatabase(returnedData);
        }
        catch (error) {
            throw error;
        }
    }

    parseDataFromDatabase(dataToParse) {
        const isSingleRow = data => data.length === 1;

        if (isSingleRow(dataToParse))
            return dataToParse[0];

        return dataToParse;
    }

}

module.exports = DatabaseService;