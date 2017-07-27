import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class InputLabel extends Component {
  constructor(props) {
    super(props);
    this.state={
      inputState: '',
    }
    this.handlerChange = this.handlerChange.bind(this)
  }

  handlerChange(e) {
    this.props.getChange(event.target.value)
  }

  render() {
    return (
      <label className="flex items-baseline w-100">
        <div className="w-30 db pr3">
          {this.props.label}
        </div>
        <div className="w-70">
          <TextField
            onChange={this.handlerChange}
            hintText="Hint Text"

          />
        </div>
      </label>);
  }
}
