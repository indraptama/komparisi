import React, { Component } from 'react'
import './App.css'

import KtpInput from './Components/Organisms/KtpInput'

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
        <KtpInput
          label="N.I.K"
        />
      </div>);
  }
}
