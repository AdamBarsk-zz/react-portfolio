import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import './static/fontawesome/fa-light.min';
import './static/fontawesome/fontawesome.min';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
