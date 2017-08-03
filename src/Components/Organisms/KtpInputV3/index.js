import React from 'react';

// Import Components
import TextField from '../../Moleculs/TextField'
import TextFieldMasked from '../../Moleculs/TextFieldMasked'
// Icons
import MaleIcon from '../../Icons/male.svg';
import FemaleIcon from '../../Icons/female.svg';


class KtpInputV3 extends React.Component {
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
    return (
      <div className="w-640">
        <header className="pv5 tc">
          <h2 className="fw6 f1 mb3">Informasi Penghadap</h2>
          <p className="lh-copy gray">Isi data-data penghadap sesuai dengan Kartu Identitas Penduduk (KTP)</p>
        </header>
        <div className="mw8 elevation pa5 ba b--black-10 br2 bg-white">

          <form onSubmit={this.onSubmitHandler.bind(this)}>
            <ul>
            <li><h3 className="mb4 fw5 f3 orange">Informasi Pribadi</h3></li>
            <li className="mb4"><TextFieldMasked label="Nomor Induk Kependudukan" mask="1111111111111111"/></li>
            <li className="mb4"><TextField label="Nama Lengkap" /></li>
            <li className="mb4 flex items-center">
              <div className="w-50 mr4"><TextField label="Kota Kelahiran" /></div>
              <div className="w-50"><TextFieldMasked label="Tanggal Lahir" mask="11-11-1111" /></div>
            </li>

            <li><h3 className="mb4 fw5 f3 orange pt4">Alamat Penghadap</h3></li>
            <li className="mb4 flex items-center">
              <div className="w-50 mr4"><TextField label="Alamat" /></div>
              <div className="w-50 flex">
                <div className="w-50 mr4">
                  <TextFieldMasked label="R.T" mask="111" />
                </div>
                <div className="w-50">
                  <TextFieldMasked label="R.W" mask="111" />
                </div>
              </div>
            </li>

            <li className="mb4 flex items-center">
              <div className="w-one-third mr4"><TextField label="Jenis Administrasi" /></div>
              <div className="w-two-thirds"><TextField label="Nama Desa / Kelurahan" /></div>
            </li>

            <li className="mb4"><TextField label="Kecamatan" /></li>

            <li className="mb4 flex items-center">
              <div className="w-one-third mr4"><TextField label="Jenis Administrasi" /></div>
              <div className="w-two-thirds"><TextField label="Nama Kabupaten / Kota" /></div>
            </li>

            <li><h3 className="mb4 fw5 f3 orange pt4">Status Perkawinan & Pekerjaan</h3></li>
            <li className="mb4"><TextField label="Status Perkawinan"/></li>
            <li className="mb4"><TextField label="Status Perkawinan"/></li>
            </ul>
          </form>
        </div>
      </div>
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
  },
  highlightLine: {
    right: '100%',
    height: 1,
    width: '100%',
    background: 'linear-gradient(to left, #cc2b5e, #753a88)',
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

export default KtpInputV3;
