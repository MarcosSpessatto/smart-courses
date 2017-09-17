import { Router, Route, IndexRoute, Redirect } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from '../main/App';

import UserBox from '../User/Home/UserBox';
import SpecialistBox from '../Specialist/Home/SpecialistBox';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'inferno-redux';
import thunk from 'redux-thunk';
import reducers from '../main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
&& window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk)(createStore)(reducers, devTools);

const browserHistory = createBrowserHistory();

const routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={UserBox} />
                <Route path="user" component={UserBox}>
                </Route>
                <Route path="specialist" component={SpecialistBox}>
                </Route>
                <Redirect from='*' to='/' />
            </Route>
        </Router>
    </Provider>
);

export default routes;