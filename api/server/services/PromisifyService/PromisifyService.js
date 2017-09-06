class PromisifyService {

    constructor(promisify) {
        this.promisify = promisify;
    }

    static getPromiseFrom(functionToConvert) {
        return this.promisify(functionToConvert);
    }
}

module.exports = promisify => new PromisifyService(promisify);
