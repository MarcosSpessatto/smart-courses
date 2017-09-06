class ResponseService {

    static makeResponse(status, data) {
        return {
            status,
            data: {
                data
            }
        };
    }

}

module.exports = () => new ResponseService();
