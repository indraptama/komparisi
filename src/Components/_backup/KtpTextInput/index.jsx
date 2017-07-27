import React from 'react';
import TextField from 'material-ui/TextField';


export default class KtpTextInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label className="flex items-center w-100">
        <div className="w-30 pr3">
          {this.props.label}
        </div>
        <div className="w-70">
          <TextField
            name={this.props.name}
            type={this.props.type}
            fullWidth
            defaultValue={this.props.defValue}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      </label>);
  }
}
