const ModalityController = require('./ModalityController');

class ModalityRoutes {

    constructor(router) {
        this.router = router;
        this.ModalityController = new ModalityController();
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/modality',
            this.ModalityController.getAll.bind(this.ModalityController));

        this.router.get('/modality/:id',
            this.ModalityController.getById.bind(this.ModalityController));

        this.router.post('/modality',
            this.ModalityController.insert.bind(this.ModalityController));

        this.router.put('/modality',
            this.ModalityController.update.bind(this.ModalityController));

        this.router.delete('/modality/:id',
            this.ModalityController.delete.bind(this.ModalityController));
    }
}

module.exports = ModalityRoutes;
