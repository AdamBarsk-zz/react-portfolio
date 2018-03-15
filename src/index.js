import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import './static/fontawesome/fontawesome-all';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
