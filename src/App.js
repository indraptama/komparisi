import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputKtp from './Components/InputKtp'

class App extends Component {
  render() {
    return (
        <div className="App pa2">
          <InputKtp />
          <InputKtp />
        </div>
    );
  }
}

export default App;
