import React from 'react';

// Import Components
import TextField from '../../Moleculs/TextField'
import TextFieldMasked from '../../Moleculs/TextFieldMasked'
import SelectField from '../../Moleculs/SelectField'
import RadioOrCheckboxField from '../../Moleculs/RadioOrCheckboxField'
import Button from '../../Atoms/Button'

// Icons
import MaleIcon from '../../Icons/male.svg';
import FemaleIcon from '../../Icons/female.svg';


class KtpInputV3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nik: '',
      fullName: '',
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
    evt.preventDefault()
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
      kelurahanType: this.state.kelurahanType,
      kelurahanName: this.state.kelurahanName,
      kecamatan: this.state.kecamatan,
      cityType: this.state.cityType,
      cityName: this.state.cityName,
      martialStatus: this.state.martialStatus,
      occupation: this.state.occupation,
    }
    this.props.getKTPData(dataKtp);
  }



  render() {

    return (
      <div className="w-640">

        <header className="pv3 tc">
          <h2 className="fw6 f1 mb3">Informasi Penghadap</h2>
          <p className="lh-copy gray">Isi data-data penghadap sesuai dengan Kartu Identitas Penduduk (KTP)</p>
        </header>
        <div className="mw8 pa5">
          <form onSubmit={this.onSubmitHandler.bind(this)}>
            <ul>
            <li><h3 className="mb4 fw4 f3 orange">Informasi Pribadi</h3></li>
            <li className="mb4"><TextFieldMasked label="Nomor Induk Kependudukan" mask="1111111111111111" onChange={this.nikChange}/></li>
            <li className="mb4"><TextField label="Nama Lengkap" onChange={this.fullNameChange}/></li>
            <li className="mb4 flex items-center">
              <div className="w-50 mr4"><TextField label="Kota Kelahiran" onChange={this.bornPlaceChange}/></div>
              <div className="w-50"><TextFieldMasked label="Tanggal Lahir" mask="11-11-1111" onChange={this.bornDateChange}/></div>
            </li>
            <li className="mb4">
              <RadioOrCheckboxField
                label="Jenis Kelamin"
                type="radio"
                name="sex"
                options={DataSex}
                onClick={this.sexChange}
                defChecked={this.state.sex}
                />
            </li>


            <li><h3 className="mb4 fw3 f4 orange pt4">Alamat Penghadap</h3></li>
            <li className="mb4 flex items-center">
              <div className="w-50 mr4"><TextField label="Alamat" onChange={this.streetAddressChange}/></div>
              <div className="w-50 flex">
                <div className="w-50 mr4">
                  <TextFieldMasked label="R.T" mask="111" onChange={this.rtChange} />
                </div>
                <div className="w-50">
                  <TextFieldMasked label="R.W" mask="111" onChange={this.rwChange}/>
                </div>
              </div>
            </li>

            <li className="mb4 flex items-center">
              <div className="w-third mr4">
                <SelectField label="Jenis Administrasi" dataOptions={DataDesa} onChange={this.kelurahanTypeChange}/>
              </div>
              <div className="w-two-thirds"><TextField label="Nama Desa / Kelurahan" onChange={this.kelurahanNameChange}/></div>
            </li>

            <li className="mb4"><TextField label="Kecamatan" onChange={this.kecamatanChange}/></li>

            <li className="mb4 flex items-end">
              <div className="w-third mr4">
                <SelectField label="Jenis Administrasi" dataOptions={DataKota} onChange={this.cityTypeChange}/>
              </div>
              <div className="w-two-thirds"><TextField label="Nama Kabupaten / Kota" onChange={this.cityNameChange}/></div>
            </li>

            <li><h3 className="mb4 fw3 f4 orange pt4">Status Perkawinan & Pekerjaan</h3></li>
            <li className="mb4 flex items-center">
              <div className="w-50 mr4">
                <SelectField name="martialStatus" label="Status Perkawinan" dataOptions={DataMartiaStatus} onChange={this.martialStatusChange}/>
              </div>
              <div className="w-50"><TextField label="Pekerjaan" onChange={this.occupationChange}/></div>
            </li>
            </ul>
            <div className="tr">
              <Button type="submit" label="simpan data"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// const SelectField = (props) => {
//   let Labels = null;
//   let highlightLine = null;
//   return (
//     <div className="w-100 db">
//       <span className="f7 db fw4 ttc silver ttc" ref={(span) => {Labels = span}}>{props.label}</span>
//       <select
//         className="input-reset db sans pv2 w-100 ba-none bg-white Select_arrow"
//         style={Style.SelectStyle}
//         defaultValue={props.defaultValue}
//         onChange={props.onChange}
//       >
//         <option className="w-100 db" value={props.value}>Kota</option>
//         <option className="w-100 db" value={props.value}>Kabupaten</option>
//       </select>
//       <div className="relative w-100 overflow-x-hidden">
//         <span className="w-100 db absolute z-2 top-0" ref={(span) => {highlightLine = span}} style={Style.highlightLine}/>
//         <span className="w-100 db bb b--black-20 relative z-1"/>
//       </div>
//     </div>
//   )
// }


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
    value: 'kabupaten',
    label: 'Kabupaten',
  },
  {
    value: 'kota',
    label: 'Kota',
  },
]

// <TabelInputItem label="Tanggal Lahir" isNumeric getValue={this.bornDateChange}/>

export default KtpInputV3;
