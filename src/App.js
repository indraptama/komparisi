import React, { Component } from 'react';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputKtp from './Components/InputKtp'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <InputKtp />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
