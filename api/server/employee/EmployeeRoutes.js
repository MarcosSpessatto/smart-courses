const EmployeeController = require('./EmployeeController');

class EmployeeRoutes {

    constructor(router) {
        this.router = router;
        this.EmployeeController = new EmployeeController();
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/employee',
            this.EmployeeController.getAll.bind(this.EmployeeController));

        this.router.get('/employee/:id',
            this.EmployeeController.getById.bind(this.EmployeeController));

        this.router.post('/employee',
            this.EmployeeController.insert.bind(this.EmployeeController));

        this.router.put('/employee',
            this.EmployeeController.update.bind(this.EmployeeController));

        this.router.delete('/employee/:id',
            this.EmployeeController.delete.bind(this.EmployeeController));
    }
}

module.exports = EmployeeRoutes;
