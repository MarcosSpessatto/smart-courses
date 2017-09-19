const SearchController = require('./SearchController');

class SearchRoutes {

    constructor(router) {
        this.router = router;
        this.SearchController = new SearchController();
        this.registerRoutes();
    }

    registerRoutes() {

        this.router.get('/user/search/:badge',
            this.SearchController.searchUserByBadge.bind(this.SearchController));

    }
}

module.exports = SearchRoutes;
