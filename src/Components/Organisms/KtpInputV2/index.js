import React from 'react';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import MaskedInput from 'react-maskedinput';
import Menu, { MenuItem } from 'material-ui/Menu';

// Import Components


// Icons
import MaleIcon from '../../Icons/male.svg';
import FemaleIcon from '../../Icons/female.svg';


class KtpInputV2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nik: '',
      dullName: '',
      bornPlace: '',
      bornDate: '',
      sex: 'male',
      streetAddress: '',
      rt: '',
      rw: '',
      kelurahanType: 'desa',
      kelurahanName: '',
      kecamatan: '',
      cityType: 'kabupaten',
      cityName: '',
      martialStatus: 'single',
      occupation: '',
    }

  // Register Action
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
    // this.onFormFocus = this.onFormFocus.bind(this);
  }

  // State Updater
  nikChange(evt) {this.setState({nik: parseFloat(evt.target.value)})}
  fullNameChange(evt) {this.setState({fullName: evt.target.value})}
  bornPlaceChange(evt) {this.setState({bornPlace: evt.target.value})}
  bornDateChange(evt) {this.setState({bornDate: evt.target.value})}
  sexChange(evt) {this.setState({sex: evt.target.value})}
  streetAddressChange(evt) {this.setState({streetAddress: evt.target.value})}
  rtChange(evt) {this.setState({rt: evt.target.value})}
  rwChange(evt) {this.setState({rw: evt.target.value})}
  kelurahanTypeChange(evt) {this.setState({kelurahanType: evt.target.value})}
  kelurahanNameChange(evt) {this.setState({kelurahanName: evt.target.value})}
  kecamatanChange(evt) {this.setState({kecamatan: evt.target.value})}
  cityTypeChange(evt) {this.setState({cityType: evt.target.value})}
  cityNameChange(evt) {this.setState({cityName: evt.target.value})}
  martialStatusChange(evt) {this.setState({martialStatus: evt.target.value})}
  occupationChange(evt) {this.setState({occupation: evt.target.value})}


  onSubmitHandler(evt) {
    const dataKtp = {
      _id: this.state.nik,
      nik: this.state.nik,
      fullName: this.state.fullName,
      bornPlace: this.state.bornPlace,
      bornDate: this.state.bornDate,
      sex: this.state.sex,
      streetAddress: this.state.streetAddress,
      rt: this.state.rt,
      rw: this.state.rw,
      kelurahanName: this.state.kelurahanName,
      kecamatan: this.state.kecamatan,
      cityName: this.state.cityName,
      martialStatus: this.state.martialStatus,
      occupation: this.state.occupation,
    }
    evt.preventDefault()
    this.props.getKTPData(dataKtp);
  }

  render() {
    const classes = this.props.classes;
    return (
      <form onSubmit={this.onSubmitHandler.bind(this)}>
        <div className>
          <div className>
            <div>
              <label className="db mb3">
                <span type="caption" className="f7 mb2 db fw5 ttc">NIK</span>
                <MaskedInput mask="1111111111111111" className="input-reset sans pa2 w-100 ba b--black-20" type="text" />
              </label>
              <label className="db mb3">
                <span type="caption" className="f7 mb2 db fw5 ttc">Nama Lengkap</span>
                <input className="input-reset sans pa2 w-100 ba b--black-20" type="text" />
              </label>

              <div className="flex items-center">
                <label className="db mb3 mr3 w-70">
                  <span type="caption" className="f7 mb2 db fw5 ttc">Kota Kelahiran</span>
                  <input className="input-reset sans pa2 w-100 ba b--black-20" type="text" />
                </label>
                <label className="db mb3 w-30">
                  <span type="caption" className="f7 mb2 db fw5 ttc">Tanggal Lahir</span>
                  <MaskedInput mask="11-11-1111" className="input-reset sans pa2 w-100 ba b--black-20" type="text" placeholder="hh-bb-tttt"/>
                </label>
              </div>

              <div className="mb3">
                <span type="caption" className="f7 mb2 db fw5 ttc">Jenis Kelamin</span>
                <div className="flex">
                  <label className="dib mr4 flex items-center">
                    <input type="radio" className="dib mr2"
                      checked={this.state.selectedValue === 'male'}
                      onChange={this.handleChange}
                      value="male"
                      name="sex"
                      aria-label="Male"
                    />
                    <span type="body1">Laki-laki</span>
                  </label>
                  <label className="dib mr4 flex items-center">
                    <input type="radio" className="dib mr2"
                      checked={this.state.selectedValue === 'female'}
                      onChange={this.handleChange}
                      value="female"
                      name="sex"
                      aria-label="Female"
                    />
                    <span type="body1">Perempuan</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center">
                <label className="db mb3 mr3 w-60">
                  <span type="caption" className="f7 mb2 db fw5 ttc">Alamat</span>
                  <input className="input-reset sans pa2 w-100 ba b--black-20" type="text" />
                </label>
                <label className="db mb3 mr3 w-20">
                  <span type="caption" className="f7 mb2 db fw5 ttc">RT</span>
                  <input className="input-reset sans pa2 w-100 ba b--black-20" type="text" />
                </label>
                <label className="db mb3 w-20">
                  <span type="caption" className="f7 mb2 db fw5 ttc">RW</span>
                  <input className="input-reset sans pa2 w-100 ba b--black-20" type="text" />
                </label>
              </div>

              <div className="mb3">
                <div>
                  <span type="caption" className="f7 mb2 db fw5 ttc">Desa / Kelurahan</span>
                </div>
                <div className="flex items-baseline ba b--black-20">
                  <div className="w-30">
                    <select className="bn pa2 input-reset db w-100 sans bg-white Select_arrow">
                      {
                        DataDesa.map(key => <option className="pv2 sans" value={key.value}>{key.label}</option>)
                      }
                    </select>
                  </div>
                <div className="db w-70 bl b--black-20">
                  <input className="input-reset sans pa2 w-100 bn" type="text" />
                </div>
                </div>
              </div>

              <label className="db mb3">
                <span type="caption" className="f7 mb2 db fw5 ttc">Kecamatan</span>
                <input className="input-reset sans pa2 w-100 ba b--black-20" type="text" />
              </label>

              <div className="mb3">
                <div>
                  <span type="caption" className="f7 mb2 db fw5 ttc">Kabupaten / Kota</span>
                </div>
                <div className="flex items-baseline ba b--black-20">
                  <div className="w-30">
                    <select className="bn pa2 input-reset db w-100 sans bg-white Select_arrow">
                      {
                        DataKota.map(key => <option className="pv2 sans" value={key.value}>{key.label}</option>)
                      }
                    </select>
                  </div>
                <div className="db w-70 bl b--black-20">
                  <input className="input-reset sans pa2 w-100 bn" type="text" />
                </div>
                </div>
              </div>

              <div className="mb3">
                <span type="caption" className="f7 mb2 db fw5 ttc">Jenis Kelamin</span>
                <div className="flex">
                  <label className="dib mr4 flex items-center">
                    <input type="radio" className="dib mr2"
                      checked={this.state.selectedValue === 'single'}
                      onChange={this.handleChange}
                      value="single"
                      name="martialStatus"
                      aria-label="Belum Menikah"
                    />
                    <span type="body1">Belum Menikah</span>
                  </label>
                  <label className="dib mr4 flex items-center">
                    <input type="radio" className="dib mr2"
                      checked={this.state.selectedValue === 'marriage'}
                      onChange={this.handleChange}
                      value="marriage"
                      name="martialStatus"
                      aria-label="Menikah"
                    />
                    <span type="body1">Menikah</span>
                  </label>
                  <label className="dib mr4 flex items-center">
                    <input type="radio" className="dib mr2"
                      checked={this.state.selectedValue === 'devorced'}
                      onChange={this.handleChange}
                      value="devorced"
                      name="martialStatus"
                      aria-label="Cerai Hidup"
                    />
                    <span type="body1">Cerai Hidup</span>
                  </label>
                  <label className="dib mr4 flex items-center">
                    <input type="radio" className="dib mr2"
                      checked={this.state.selectedValue === 'widowed'}
                      onChange={this.handleChange}
                      value="widowed"
                      name="martialStatus"
                      aria-label="Cerai Mati"
                    />
                    <span type="body1">Cerai Mati</span>
                  </label>
                </div>
              </div>

              <label className="db mb3">
                <span type="caption" className="f7 mb2 db fw5 ttc">Pekerjaan</span>
                <input className="input-reset sans pa2 w-100 ba b--black-20" type="text" />
              </label>

            </div>
          </div>
        </div>
      </form>
    );
  }
}



const Style = {
  radioItem: {
    display: 'inline-block'
  },
  Paper: {
    maxWidth: 360,
    padding: '1.5rem',
    margin: '1.5rem auto',
  }
}


const DataMartiaStatus = [
  {
    value: 'single',
    label: 'Belum Menikah',
    name: 'single'
  },
  {
    value: 'marriage',
    label: 'Menikah',
    name: 'marriage'
  },
  {
    value: 'devorced',
    label: 'Cerai Hidup',
    name: 'devorced'
  },
  {
    value: 'widowed',
    label: 'Cerai Mati',
    name: 'widowed'
  },
]


const DataSex = [
  {
    value: 'male',
    label: 'Laki-laki',
    name: 'male',
    icon: MaleIcon,
  },
  {
    value: 'female',
    label: 'Perempuan',
    name: 'female',
    icon: FemaleIcon,
  }
]

const DataDesa = [
  {
    value: 'desa',
    label: 'Desa'
  },
  {
    value: 'kelurahan',
    label: 'Kelurahan'
  }
]

const DataKota = [
  {
    value: 'kota',
    label: 'Kota',
  },
  {
    value: 'kabupaten',
    label: 'Kabupaten',
  }
]

// <TabelInputItem label="Tanggal Lahir" isNumeric getValue={this.bornDateChange}/>

export default KtpInputV2;
