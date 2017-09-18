const CourseController = require('./CourseController');

class CourseRoutes {

    constructor(router) {
        this.router = router;
        this.CourseController = new CourseController();
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/course',
            this.CourseController.getAll.bind(this.CourseController));

        this.router.get('/course/:id',
            this.CourseController.getById.bind(this.CourseController));

        this.router.post('/course',
            this.CourseController.insert.bind(this.CourseController));

        this.router.put('/course',
            this.CourseController.update.bind(this.CourseController));

        this.router.delete('/course/:id',
            this.CourseController.delete.bind(this.CourseController));
    }
}

module.exports = CourseRoutes;
