class ResponseService {

    makeResponse(status, data) {
        return {
            status,
            data
        };
    }

}

module.exports = ResponseService;
