class ResponseService {

    makeResponse(status, data) {
        return {
            status,
            data: {
                data
            }
        };
    }

}

module.exports = ResponseService;
