import React, {Component} from 'react';
import KtpInputV3 from '../../Components/Organisms/KtpInputV3'

import {observable} from "mobx";
import {observer} from 'mobx-react';

export default class NewKtp extends Component {

  render() {
    return (
    <div className="min-vh100 flex items-center minh-100vh justify-center">
<Counter />
    </div>);
  }
}





@observer class Counter extends Component {
    @observable counter= 0;

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }

  render() {
    return (
      <div>
        <div>
          <p className="mb2 tc">Test MOBX Counter</p>
          <p className="mb4 tc f1 fw3">{this.counter}</p>
        </div>
        <div className="flex w-100">
          <button className="w-50" onClick={this.decrement.bind(this)}>-</button>
          <button className="w-50" onClick={this.increment.bind(this)}>+</button>
        </div>
      </div>
    );
  }
}
