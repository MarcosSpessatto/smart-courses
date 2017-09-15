import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
