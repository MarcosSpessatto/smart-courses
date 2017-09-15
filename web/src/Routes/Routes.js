import { Router, Route, IndexRoute, Redirect } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '../App';

import HomeUser from '../User/Home/HomeUser';
import HomeSpecialist from '../Specialist/Home/HomeSpecialist';

const browserHistory = createBrowserHistory();

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomeUser} />
            <Route path="user" component={HomeUser}>
            </Route>
            <Route path="specialist" component={HomeSpecialist}>
            </Route>
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);

export default routes;