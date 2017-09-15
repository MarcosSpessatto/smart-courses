import { render } from 'inferno';
import App from './App';
import './index.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

render(<App />, document.getElementById('app'));
