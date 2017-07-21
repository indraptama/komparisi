import React, { Component } from 'react';

import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FormKtp from './Components/FormKtp'

class App extends Component {
  render() {
    return (
        <div className="App">
          <FormKtp />
        </div>
    );
  }
}

export default App;
