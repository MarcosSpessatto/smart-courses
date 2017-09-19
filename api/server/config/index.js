const defaultConfig = require('./default');

defaultConfig.port = process.env.PORT || defaultConfig.port;
defaultConfig.database.host = process.env.DATABASE_HOST || defaultConfig.database.host;

module.exports = defaultConfig;
