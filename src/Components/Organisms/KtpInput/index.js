import React, { Component } from 'react';

// Import Components
import InputLabel from '../../Moleculs/InputLabel'

export default class KtpInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InputLabel
          label={this.props.label}
        />
      </div>);
  }
}
