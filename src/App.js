import React, { Component } from 'react';


import './App.css';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputKtp from './Components/InputKtp'

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      dataForm: '',
    }
  }



  handleSubmit(event) {
    let dataKtp = {
      _id: Date.now(),
    };
    const Form = document.querySelector('#testHook');
    const Inputs = Form.querySelectorAll('input');
    const Selects = Form.querySelectorAll('select')

    for (let Input of Inputs) {
      dataKtp[Input.name] = Input.value;
    }

    for (let Select of Selects) {
      dataKtp[Select.name] = Select.value;
      console.log(Select.value);
    }

    console.log(dataKtp);
    event.preventDefault();
  }


  render() {
    return (
        <div className="App pa2">
          <form id="testHook">
            <ul>
              <li className="mb3">
                <InputKtp
                  dataEntry={this.state.dataForm}
                  submitFiled={this.handleSubmit.bind(this)}

                />
              </li>
            </ul>
          </form>
        </div>
    );
  }
}

export default App;




function handleSubmit() {
  let Datas = {
    "nik": this.state.nik,
    "name": this.state.name,
    "bornPlace": this.state.bornPlace,
    "bornDate": this.state.bornDate,
    "sex": this.state.sex,
    "streetAddress" : this.state.streetAddress,
    "rt": this.state.rt,
    "rw": this.state.rw,
    "kelurahanType": this.state.kelurahanType,
    "kelurahanName": this.state.kelurahanName,
    "kecamatan": this.state.kecamatan,
    "cityType": this.state.cityType,
    "cityName": this.state.cityName,
    "martialStatus": this.state.martialStatus,
    "occupation": this.state.occupation
  }

  console.log(Datas);
}
