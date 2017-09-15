const HttpStatus = require('../constants/HttpStatus.json');
const ResponseMessages = require('../constants/ResponseMessages.json');
const SectorService = require('./SectorService');
const ResponseService = require('../services/ResponseService/ResponseService');

class SectorController {
    constructor() {
        this.SectorService = new SectorService();
        this.ResponseService = new ResponseService();
    }

    async getAll(request, response, next) {
        try {
            const sectors = await this.SectorService.getAll();

            response.json(this.ResponseService.makeResponse(HttpStatus.success, sectors));
        }
        catch (error) {
            next(error);
        }
    }

    async getById(request, response, next) {
        const sectorId = request.params.id;
        let responseToSend;
        try {
            if (sectorId) {
                const sector = await this.SectorService.getById(sectorId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, sector);
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
        const sectorReceived = request.body.sector;
        let responseToSend;
        try {
            if (sectorReceived) {
                const sector = await this.SectorService.insert(sectorReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, sectorReceived);
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
        const sectorReceived = request.body.sector;
        let responseToSend;
        try {
            if (sectorReceived && sectorReceived.id) {
                const sector = await this.SectorService.update(sectorReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, sector);
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
        const sectorId = request.params.id;
        let responseToSend;
        try {
            if (sectorId) {
                await this.SectorService.delete(sectorId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, sectorId);
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
module.exports = SectorController;
