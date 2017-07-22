import React from 'react';
import fetch from 'unfetch';
import Paper from 'material-ui/Paper';
import FormKtp from '../FormKtp'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


export default class InputKtp extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      Data: this.props.dataEntry,
    }
  }

  render() {
    return (
      <div>
        <Paper zDepth={1} className="pa4">
          <h4 className="fw5 f4 mb3">Identitas Penghadap</h4>
          <div className="mb4">
            <FormKtp
              nik={this.state.Data.nik}
              name={this.state.Data.name}
              bornPlace={this.state.Data.bornPlace}
              bornDate={this.state.Data.bornDate}
              sex={this.state.Data.sex}
              streetAddress={this.state.Data.streetAddress}
              rt={this.state.Data.rt}
              rw={this.state.Data.rw}
              kelurahanType={this.state.Data.kelurahanType}
              kelurahanName={this.state.Data.kelurahanName}
              kecamatan={this.state.Data.kecamatan}
              cityType={this.state.Data.cityType}
              cityName={this.state.Data.cityName}
              martialStatus={this.state.Data.martialStatus}
              occupation={this.state.Data.occupation}
            />
          </div>
          <div className="tr">

          <FlatButton label="Reset" onTouchTap={this.props.clearFiled}/>
          <FlatButton label="Simpan" onTouchTap={this.props.submitFiled}/>
        </div>
        </Paper>
      </div>);
  }
}
