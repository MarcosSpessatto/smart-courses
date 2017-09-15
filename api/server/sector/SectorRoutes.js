const SectorController = require('./SectorController');

class SectorRoutes {

    constructor(router) {
        this.router = router;
        this.SectorController = new SectorController();
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/sector',
            this.SectorController.getAll.bind(this.SectorController));

        this.router.get('/sector/:id',
            this.SectorController.getById.bind(this.SectorController));

        this.router.post('/sector',
            this.SectorController.insert.bind(this.SectorController));

        this.router.put('/sector',
            this.SectorController.update.bind(this.SectorController));

        this.router.delete('/sector/:id',
            this.SectorController.delete.bind(this.SectorController));
    }
}

module.exports = SectorRoutes;
