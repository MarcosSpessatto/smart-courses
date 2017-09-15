const HttpStatus = require('../constants/HttpStatus.json');
const ResponseMessages = require('../constants/ResponseMessages.json');
const ModalityService = require('./ModalityService');
const ResponseService = require('../services/ResponseService/ResponseService');

class ModalityController {
    constructor() {
        this.ModalityService = new ModalityService();
        this.ResponseService = new ResponseService();
    }

    async getAll(request, response, next) {
        try {
            const modalities = await this.ModalityService.getAll();

            response.json(this.ResponseService.makeResponse(HttpStatus.success, modalities));
        }
        catch (error) {
            next(error);
        }
    }

    async getById(request, response, next) {
        const modalityId = request.params.id;
        let responseToSend;
        try {
            if (modalityId) {
                const modality = await this.ModalityService.getById(modalityId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, modality);
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
        const modalityReceived = request.body.modality;
        let responseToSend;
        try {
            if (modalityReceived) {
                const modality = await this.ModalityService.insert(modalityReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, modalityReceived);
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
        const modalityReceived = request.body.modality;
        let responseToSend;
        try {
            if (modalityReceived && modalityReceived.id) {
                const modality = await this.ModalityService.update(modalityReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, modality);
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
        const modalityId = request.params.id;
        let responseToSend;
        try {
            if (modalityId) {
                await this.ModalityService.delete(modalityId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, modalityId);
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
module.exports = ModalityController;
