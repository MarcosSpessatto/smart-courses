const HttpStatus = require('../constants/HttpStatus.json');
const ResponseMessages = require('../constants/ResponseMessages.json');
const EmployeeService = require('./EmployeeService');
const ResponseService = require('../services/ResponseService/ResponseService');

class EmployeeController {
    constructor() {
        this.EmployeeService = new EmployeeService();
        this.ResponseService = new ResponseService();
    }

    async getAll(request, response, next) {
        try {
            const employees = await this.EmployeeService.getAll();

            response.json(this.ResponseService.makeResponse(HttpStatus.success, employees));
        }
        catch (error) {
            next(error);
        }
    }

    async getById(request, response, next) {
        const employeeId = request.params.id;
        let responseToSend;
        try {
            if (employeeId) {
                const employee = await this.EmployeeService.getById(employeeId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, employee);
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
        const employeeReceived = request.body.employee;
        let responseToSend;
        try {
            if (employeeReceived) {
                const employee = await this.EmployeeService.insert(employeeReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success,employeegroup);
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
        const employeeReceived = request.body.employee;
        let responseToSend;
        try {
            if (employeeReceived && employeeReceived.id) {
                const employee = await this.EmployeeService.update(employeeReceived);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, employee);
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
        const employeeId = request.params.id;
        let responseToSend;
        try {
            if (employeeId) {
                await this.GroupService.delete(employeeId);

                responseToSend = this.ResponseService.makeResponse(HttpStatus.success, employeeId);
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
module.exports = EmployeeController;
