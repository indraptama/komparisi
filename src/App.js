import React, { Component } from 'react'
import './App.css'


import Header from './Components/Organisms/Header'
import RoutePath from './Routes/routePath'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:{}
    }
  }

  render() {
    return (
      <div>
        <Header />
        <RoutePath />
      </div>
    );
  }
}
