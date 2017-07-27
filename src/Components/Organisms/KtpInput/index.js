import React, { Component } from 'react';

// Import Components
import InputLabel from '../../Moleculs/InputLabel'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class KtpInput extends Component {
  constructor(props) {
    super(props);
    this.state={
      nik: this.props.nik,

    // Register Action
    name: this.props.name,
    bornPlace: this.props.bornPlace,
    bornDate: this.props.bornDate,
    sex: this.props.sex,
    streetAddress: this.props.streetAddress,
    rt: this.props.rt,
    rw: this.props.rw,
    kelurahanType: this.props.kelurahanType,
    kelurahanName: this.props.kelurahanName,
    kecamatan: this.props.kecamatan,
    cityType: this.props.cityType,
    cityName: this.props.cityName,
    martialStatus: this.props.martialStatus,
    occupation: this.props.occupation,
  }
    this.nikChange = this.nikChange.bind(this);
    this.fullNameChange = this.fullNameChange.bind(this);
    this.bornPlaceChange = this.bornPlaceChange.bind(this);
    this.bornDateChange = this.bornDateChange.bind(this);
    this.sexChange = this.sexChange.bind(this);
    this.streetAddressChange = this.streetAddressChange.bind(this);
    this.rtChange = this.rtChange.bind(this);
    this.rwChange = this.rwChange.bind(this);
    this.kelurahanTypeChange = this.kelurahanTypeChange.bind(this);
    this.kelurahanNameChange = this.kelurahanNameChange.bind(this);
    this.kecamatanChange = this.kecamatanChange.bind(this);
    this.cityTypeChange = this.cityTypeChange.bind(this);
    this.cityNameChange = this.cityNameChange.bind(this);
    this.martialStatusChange = this.martialStatusChange.bind(this);
    this.occupationChange = this.occupationChange.bind(this);
  }

  // State Updater
  nikChange(value) {this.setState({nik: value})}
  fullNameChange(value) {this.setState({name: value})}
  bornPlaceChange(value) {this.setState({bornPlace: value})}
  bornDateChange(value) {this.setState({bornDate: value})}
  sexChange(event, value) {this.setState({sex: value})}
  streetAddressChange(value) {this.setState({streetAddress: value})}
  rtChange(value) {this.setState({rt: value})}
  rwChange(value) {this.setState({rw: value})}
  kelurahanTypeChange(event, value) {this.setState({kelurahanType: value})}
  kelurahanNameChange(value) {this.setState({kelurahanName: value})}
  kecamatanChange(value) {this.setState({kecamatan: value})}
  cityTypeChange(event, value) {this.setState({cityType: value})}
  cityNameChange(value) {this.setState({cityName: value})}
  martialStatusChange(event, value) {this.setState({martialStatus: value})}
  occupationChange(value) {this.setState({occupation: value})}

  render() {
    return (
      <div className="mw6 center">
        <ul>
          <li className="mb2"><h4 className="f4 gray">Identitas Pribadi</h4></li>
          <li><InputLabel label="NIK" type="number" getChange={this.nikChange} Placeholder="NIK" fullWidth/></li>
          <li><InputLabel label="Nama Lengkap" type="text" getChange={this.fullNameChange} fullWidth/></li>
          <li><InputLabel label="Tempat Lahir" type="text" getChange={this.bornPlaceChange} fullWidth/></li>
          <li><InputLabel label="Tanggal Lahir" type="text" getChange={this.bornDateChange} /></li>

          <li className="flex items-start mt3">
            <div className="w-30 mt1">Jenis Kelamin</div>
            <div className="w-70">
              <RadioButtonGroup name="sex" onChange={this.sexChange}>
                <RadioButton value="male" label="Laki-laki" />
                <RadioButton value="female" label="Perempuan" />
              </RadioButtonGroup>
            </div>
          </li>

          <li className="pt5 mb2"><h4 className="f4 gray">Alamat Tempat Tinggal</h4></li>
          <li><InputLabel label="Jalan" type="text" getChange={this.streetAddressChange} fullWidth/></li>
          <li><InputLabel label="RT" type="number" getChange={this.rtChange} /></li>
          <li><InputLabel label="RW" type="number" getChange={this.rwChange} /></li>

          <li className="flex items-start mt3">
            <div className="w-30 mt1">Desa / Kelurahan</div>
            <div className="w-70">
              <RadioButtonGroup name="kelurahanType" className="flex" onChange={this.kelurahanTypeChange}>
                <RadioButton value="desa" label="Desa" style={Style.radioItem}/>
                <RadioButton value="kelurahan" label="Kelurahan" style={Style.radioItem}/>
              </RadioButtonGroup>
              <div className="">
                <TextField hintText="Nama Desa / Kelurahan" fullWidth onChange={this.kelurahanNameChange} />
              </div>
            </div>
          </li>

          <li><InputLabel label="Kecamatan" type="text" getChange={this.kecamatanChange} fullWidth/></li>

          <li className="flex items-start mt3">
            <div className="w-30 mt1">Kota / Kabupaten</div>
            <div className="w-70">
              <RadioButtonGroup name="cityType" className="flex" onChange={this.cityTypeChange}>
                <RadioButton value="kabupaten" label="Kabupaten" style={Style.radioItem}/>
                <RadioButton value="kota" label="Kota" style={Style.radioItem}/>
              </RadioButtonGroup>
              <div className="">
                <TextField hintText="Nama Kota / Kabupaten" fullWidth onChange={this.cityNameChange} />
              </div>
            </div>
          </li>

          <li className="pt5 mb2"><h4 className="f4 gray">Status Perkawinan & Pekerjaan</h4></li>

          <li className="flex items-start mt3">
            <div className="w-30 mt1">Status Pekawinan</div>
            <div className="w-70">
              <RadioButtonGroup name="martialStatus" onChange={this.martialStatusChange}>
                <RadioButton value="single" label="Belum Menikah" />
                <RadioButton value="marriage" label="Menikah" />
                <RadioButton value="devorced" label="Cerai Hidup" />
                <RadioButton value="widowed" label="Cerai Mati" />
              </RadioButtonGroup>
            </div>
          </li>

          <li><InputLabel label="Pekerjaan" type="text" getChange={this.occupationChange} fullWidth/></li>
        </ul>
        <div className="pt4 tr">
          <FlatButton label="Simpan identitas"  primary={true} onTouchTap={ e => console.log(this.state) } />
        </div>
      </div>
    );
  }
}

const Style = {
  radioItem: {
    display: 'inline-block'
  }
}
