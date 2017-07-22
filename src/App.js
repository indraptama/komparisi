import React, { Component } from 'react';


import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputKtp from './Components/InputKtp'

class App extends Component {
  render() {
    return (
        <div className="App pa2">
          <form action="">
            <ul>
              <li className="mb3">
                <InputKtp
                  dataEntry={''}
                  submitFiled={Submit()}
                  clearFiled={console.log('clear')}
                />
              </li>
            </ul>
          </form>
        </div>
    );
  }
}

export default App;

function Submit(event) {
  console.log(event)
}
