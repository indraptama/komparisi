import React from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

// My Components
import KtpTextInput from '../KtpTextInput'

export default class FormKtp extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      nik: this.props.nik,
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

    this.handleSelectKelurahan = this.handleSelectKelurahan.bind(this)
    this.handleSelectCity = this.handleSelectCity.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleOption = this.handleOption.bind(this)
  }

  handleSelectKelurahan(event, index, value){
    this.setState({
      kelurahanType: value,
    })
  }

  handleSelectCity(event, index, value){
    this.setState({
      cityType: value,
    })
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleOption() {

  }

  render() {
    return (
      <ul>
        <li><KtpTextInput onChange={this.handleChange} name="nik" label="N.I.K" defValue={this.state.nik} type="number"/></li>
        <li><KtpTextInput onChange={this.handleChange} name="name" label="Nama Lengkap" defValue={this.state.name}/></li>
        <li><KtpTextInput onChange={this.handleChange} name="bornPlace" label="Kota Kelahiran" defValue={this.state.bornPlace}/></li>
        <li><KtpTextInput onChange={this.handleChange} name="bornDate" label="Tanggal Lahir" defValue={this.state.bornDate}/></li>

        <li>
          <div className="flex items-start w-100 mt3">
            <div className="w-30 pr3">Jenis Kelamin</div>
            <div className="w-70">
              <RadioButtonGroup name="sex" defaultSelected={this.state.sex}>
                <RadioButton value="male" label="Laki-laki" />
                <RadioButton value="female" label="Perempuan" />
              </RadioButtonGroup>
            </div>
          </div>
        </li>

        <li><KtpTextInput onChange={this.handleChange} name="streetAddress" label="Alamat" defValue={this.state.streetAddress}/></li>
        <li><KtpTextInput onChange={this.handleChange} name="rt" label="RT" defValue={this.state.rt} type="number"/></li>
        <li><KtpTextInput onChange={this.handleChange} name="rw" label="RW" defValue={this.state.rw} type="number"/></li>

        <li>
          <div className="flex items-center w-100">
            <div className="w-30">Kelurahan</div>
            <div className="w-70">
              <div className="flex">
                <div className="w-40">
                  <SelectField id="kelurahanType" value={this.state.kelurahanType} autoWidth={false} style={Style.dropdown} onChange={this.handleSelectKelurahan}>
                    <MenuItem value={'desa'} primaryText="Desa" />
                    <MenuItem value={'kelurahan'} primaryText="Kelurahan" />
                  </SelectField>
                </div>
                <div className="w-60 pl3">
                  <TextField name="kelurahanName" label="" defaultValue={this.state.kelurahanName} fullWidth/>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li><KtpTextInput onChange={this.handleChange} name="kecamatan" label="Kecamatan" defValue={this.state.kecamatan}/></li>

        <li>
          <div className="flex items-center w-100">
            <div className="w-30">Kota</div>
            <div className="w-70">
              <div className="flex">
                <div className="w-40">
                  <SelectField name="cityType" value={this.state.cityType} autoWidth={false} style={Style.dropdown} onChange={this.handleSelectCity}>
                    <MenuItem value={'kabupaten'} primaryText="Kabupaten" />
                    <MenuItem value={'kota'} primaryText="Kota" />
                  </SelectField>
                </div>
                <div className="w-60 pl3">
                  <TextField name="cityName" label="" defaultValue={this.state.cityName} fullWidth/>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="flex items-start w-100 mt3">
            <div className="w-30 pr3">Status Pernikahan</div>
            <div className="w-70">
              <RadioButtonGroup name="martialStatus" defaultSelected={this.state.martialStatus}>
                <RadioButton value="single" label="Belum Menikah" />
                <RadioButton value="marriage" label="Menikah" />
                <RadioButton value="devorced" label="Cerai Hidup" />
                <RadioButton value="widowed" label="Cerai Mati" />
              </RadioButtonGroup>
            </div>
          </div>
        </li>

        <li><KtpTextInput onChange={this.handleChange} name="occupation" label="Pekerjaan" defValue={this.state.occupation}/></li>
      </ul>
    );
  }
}


const Style = {
  dropdown: {
    width: '100%',
    display: 'block',
  },
  MenuItem: {
  }
}
