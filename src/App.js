import React, { Component } from 'react';


import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputKtp from './Components/InputKtp'

class App extends Component {
  render() {
    return (
        <div className="App pa2">
          <ul>
            <li className="mb3"><InputKtp /></li>
            <li className="mb3"><InputKtp /></li>
            <li className="mb3"><InputKtp /></li>
          </ul>
        </div>
    );
  }
}

export default App;
