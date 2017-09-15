const HttpStatus = require('../constants/HttpStatus.json');
const ResponseMessages = require('../constants/ResponseMessages.json');
const TeacherService = require('./TeacherService');
const ResponseService = require('../services/ResponseService/ResponseService');

class TeacherController {
    constructor() {
        this.TeacherService = new TeacherService();
        this.ResponseService = new ResponseService();
    }

    async getAll(request, response, next) {
        try {
            const teachers = await this.TeacherService.getAll();

            response.json(this.ResponseService.makeResponse(HttpStatus.success, teachers));
        }
        catch (error) {
            next(error);
        }
    }

    async getById(request, response, next) {
        const teacherId = request.params.id;
        let responseToSend;
        try {
            if (teacherId) {
                const teacher = await this.TeacherService.getById(teacherId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, teacher);
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
        const teacherReceived = request.body.teacher;
        let responseToSend;
        try {
            if (teacherReceived) {
                const teacher = await this.TeacherService.insert(teacherReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, teacherReceived);
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
        const teacherReceived = request.body.teacher;
        let responseToSend;
        try {
            if (teacherReceived && teacherReceived.id) {
                const teacher = await this.TeacherService.update(teacherReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, teacher);
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
        const teacherId = request.params.id;
        let responseToSend;
        try {
            if (teacherId) {
                await this.TeacherService.delete(teacherId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, teacherId);
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
module.exports = TeacherController;
