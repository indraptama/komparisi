import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class InputLabel extends Component {
  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this)
  }

  handlerChange(e, n) {
    this.props.getChange(n)
  }

  render() {
    const ID = (this.props.label).toLowerCase().replace(/\s/g, '');
    return (
      <label className="flex items-baseline w-100">
        <div className="w-30 db pr3">
          {this.props.label}
        </div>
        <div className="w-70">
          <TextField
            id={ID}
            onChange={this.handlerChange}
            hintText={this.props.Placeholder}
            fullWidth={this.props.fullWidth}
            type={this.props.type}
          />
        </div>
      </label>);
  }
}
