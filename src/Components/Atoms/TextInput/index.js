import React, {Component} from 'react';

export default class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    this.props.onValueChange(e.target.value);
  }

  render() {

    const Style= {
      container: {
        width: this.props.width,
      },
      input: {
        width: "100%"
      }
    }


    return (
      <div style={Style.container}>
        <label className="db w-100">
          <div className="mb1 f7 tracked black-30 fw5">{this.props.label}</div>
          <input  type={this.props.type}
                  name={this.props.name}
                  defaultValue={this.props.defaultValue}
                  data-isNumeric = {this.props.isNumeric}
                  className="input-reset db pv1 ba-none w-100"
                  onChange={this.changeHandler}
                  style={Style.input}
                  onKeyPress={''}
          />
        </label>
      </div>);
  }
}
