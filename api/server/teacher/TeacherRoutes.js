const TeacherController = require('./TeacherController');

class TeacherRoutes {

    constructor(router) {
        this.router = router;
        this.TeacherController = new TeacherController();
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/teacher',
            this.TeacherController.getAll.bind(this.TeacherController));

        this.router.get('/teacher/:id',
            this.TeacherController.getById.bind(this.TeacherController));

        this.router.post('/teacher',
            this.TeacherController.insert.bind(this.TeacherController));

        this.router.put('/teacher',
            this.TeacherController.update.bind(this.TeacherController));

        this.router.delete('/teacher/:id',
            this.TeacherController.delete.bind(this.TeacherController));
    }
}

module.exports = TeacherRoutes;
