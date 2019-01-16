import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {isMobile as trueIsMobile} from 'react-device-detect';

ReactDOM.render(<App />, document.getElementById('root'));

if(trueIsMobile){
    serviceWorker.register();
}
else{
    serviceWorker.unregister();
}