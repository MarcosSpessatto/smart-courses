const AreaController = require('./AreaController');

class AreaRoutes {

    constructor(router) {
        this.router = router;
        this.AreaController = new AreaController();
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/area',
            this.AreaController.getAll.bind(this.AreaController));

        this.router.get('/area/:id',
            this.AreaController.getById.bind(this.AreaController));

        this.router.post('/area',
            this.AreaController.insert.bind(this.AreaController));

        this.router.put('/area',
            this.AreaController.update.bind(this.AreaController));

        this.router.delete('/area/:id',
            this.AreaController.delete.bind(this.AreaController));
    }
}

module.exports = AreaRoutes;
