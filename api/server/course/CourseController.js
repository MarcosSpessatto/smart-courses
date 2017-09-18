const HttpStatus = require('../constants/HttpStatus.json');
const ResponseMessages = require('../constants/ResponseMessages.json');
const CourseService = require('./CourseService');
const ResponseService = require('../services/ResponseService/ResponseService');

class CourseController {
    constructor() {
        this.CourseService = new CourseService();
        this.ResponseService = new ResponseService();
    }

    async getAll(request, response, next) {
        try {
            const courses = await this.CourseService.getAll();

            response.json(this.ResponseService.makeResponse(HttpStatus.success, courses));
        }
        catch (error) {
            next(error);
        }
    }

    async getById(request, response, next) {
        const courseId = request.params.id;
        let responseToSend;
        try {
            if (courseId) {
                const course = await this.CourseService.getById(courseId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, course);
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
        const courseReceived = request.body.course;
        let responseToSend;
        try {
            if (courseReceived) {
                const course = await this.CourseService.insert(courseReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, course);
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
        const courseReceived = request.body.course;
        let responseToSend;
        try {
            if (courseReceived && courseReceived.id) {
                const course = await this.CourseService.update(courseReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, course);
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
        const courseId = request.params.id;
        let responseToSend;
        try {
            if (courseId) {
                await this.CourseService.delete(courseId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, courseId);
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
module.exports = CourseController;
