import Component from 'inferno-component';
import { Router, Route, IndexRoute, Redirect} from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './registerServiceWorker';

import HomeUser from './User/Home/HomeUser';
import HomeSpecialist from './Specialist/Home/HomeSpecialist';
import Navbar from './Navbar/Navbar';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <Router history={createBrowserHistory()}>
          <Route path="/user" component={HomeUser}>
          </Route>
          <Route path="/specialist" component={HomeSpecialist}>
          </Route>
          <Route path="*" to="/user">
          </Route>
        </Router>
        );
      </div>
    );
  }
}

export default App;
