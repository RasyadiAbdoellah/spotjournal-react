import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';



//quick and dirty environment setting. Sets the API url according to the current frontend url.
//taken from GA-Boston's Browser Template.
const setAPIOrigin = require('./lib/set-api-origin');
const config = require('./config');
setAPIOrigin(window.location, config)




ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
