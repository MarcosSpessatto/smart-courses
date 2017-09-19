const HttpStatus = require('../constants/HttpStatus.json');
const ResponseMessages = require('../constants/ResponseMessages.json');
const SearchService = require('./SearchService');
const ResponseService = require('../services/ResponseService/ResponseService');

class SearchController {
    constructor() {
        this.SearchService = new SearchService();
        this.ResponseService = new ResponseService();
    }

    async searchUserByBadge(request, response, next) {
        const badge = request.params.badge;

        let responseToSend;
        try {
            if (badge) {
                const listOfCoursesAndEmployee = await this.SearchService.searchUserByBadge(badge);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, listOfCoursesAndEmployee);
            }
            else
                responseToSend = this.ResponseService.makeResponse(HttpStatus.badRequest, ResponseMessages.verifyParameters);

            response.json(responseToSend);
        }
        catch (error) {
            next(error);
        }
    }

}
module.exports = SearchController;
