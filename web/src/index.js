import { render } from 'inferno';
import './registerServiceWorker';
import './index.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import routes from './Routes/Routes';

render(routes, document.getElementById('app'));
