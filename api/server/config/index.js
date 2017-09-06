const defaultConfig = require('./default');

defaultConfig.port = process.env.PORT || defaultConfig.port;

defaultConfig.jwt.expiresIn = process.env.JWT_EXPIRESIN || defaultConfig.jwt.expiresIn;

module.exports = defaultConfig;
