import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import registerServiceWorker from './components/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('launchpad'));
registerServiceWorker();
