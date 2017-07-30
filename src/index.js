import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import 'minireset.css';
import 'tachyons';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


function theApp() {
  return (

    <BrowserRouter>
        <App />
    </BrowserRouter>

  )
}

ReactDOM.render(theApp(), document.getElementById('root'));
// registerServiceWorker();
