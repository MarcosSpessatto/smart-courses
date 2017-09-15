const { promisify } = require('util');

class PromisifyService {

    constructor() {
        this.promisify = promisify;
    }

    static getPromiseFrom(functionToConvert) {
        return this.promisify(functionToConvert);
    }
}

module.exports = PromisifyService;
