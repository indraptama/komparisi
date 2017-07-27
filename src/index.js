import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import 'minireset.css';
import 'tachyons';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

function theApp() {
  return (
    <MuiThemeProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </MuiThemeProvider>
  )
}

ReactDOM.render(theApp(), document.getElementById('root'));
// registerServiceWorker();
