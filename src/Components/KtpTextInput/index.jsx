import React from 'react';
import TextField from 'material-ui/TextField';


export default class KtpTextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex items-center">
        <div className="w-30 pr3">
          {this.props.label}
        </div>
        <div className="w-70">
          <TextField
            name={this.props.name}
            type={this.props.type}
            fullWidth
            defaultValue={this.props.defValue}
          />
        </div>
      </div>);
  }
}
