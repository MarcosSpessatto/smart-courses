const HttpStatus = require('../constants/HttpStatus.json');
const ResponseMessages = require('../constants/ResponseMessages.json');
const AreaService = require('./AreaService');
const ResponseService = require('../services/ResponseService/ResponseService');

class AreaController {
    constructor() {
        this.AreaService = new AreaService();
        this.ResponseService = new ResponseService();
    }

    async getAll(request, response, next) {
        try {
            const areas = await this.AreaService.getAll();

            response.json(this.ResponseService.makeResponse(HttpStatus.success, areas));
        }
        catch (error) {
            next(error);
        }
    }

    async getById(request, response, next) {
        const areaId = request.params.id;
        let responseToSend;
        try {
            if (areaId) {
                const area = await this.AreaService.getById(areaId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, area);
            }
            else
                responseToSend = this.ResponseService.makeResponse(HttpStatus.badRequest, ResponseMessages.verifyParameters);

            response.json(responseToSend);
        }
        catch (error) {
            next(error);
        }
    }

    async insert(request, response, next) {
        const areaReceived = request.body.area;
        let responseToSend;
        try {
            if (areaReceived) {
                const area = await this.AreaService.insert(areaReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success,areaReceived);
            }
            else
                responseToSend = this.ResponseService.makeResponse(HttpStatus.badRequest, ResponseMessages.verifyParameters);

            response.json(responseToSend);
        }
        catch (error) {
            next(error);
        }
    }

    async update(request, response, next) {
        const areaReceived = request.body.area;
        let responseToSend;
        try {
            if (areaReceived && areaReceived.id) {
                const area = await this.AreaService.update(areaReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, area);
            }
            else
                responseToSend = this.ResponseService.makeResponse(HttpStatus.badRequest, ResponseMessages.verifyParameters);

            response.json(responseToSend);
        }
        catch (error) {
            next(error);
        }
    }

    async delete(request, response, next) {
        const areaId = request.params.id;
        let responseToSend;
        try {
            if (areaId) {
                await this.AreaService.delete(areaId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, areaId);
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
module.exports = AreaController;
