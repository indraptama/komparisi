import React from 'react';
import ReactDOM from 'react-dom';

import 'minireset.css';
import 'tachyons';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
<<<<<<< HEAD
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

function theApp() {
  return (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  )
}
=======
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

>>>>>>> origin/master

ReactDOM.render(theApp(), document.getElementById('root'));
registerServiceWorker();
