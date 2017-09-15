import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

import HomeUser from '../User/Home/HomeUser';
import HomeSpecialist from '../Specialist/Home/HomeSpecialist';

const browserHistory = createBrowserHistory();

const routes = (
    <Router history={browserHistory}>
        <Route component={App}>
            <IndexRoute component={HomeUser} />
            <Route path="/user" component={HomeUser}>
            </Route>
            <Route path="/specialist" component={HomeSpecialist}>
            </Route>
        </Route>
    </Router>
);

export default routes;