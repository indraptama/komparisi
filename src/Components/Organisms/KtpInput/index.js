import React from 'react';
import anime from 'animejs'
import Button from 'material-ui/Button';


// Import Components
import TabelInputItem from '../../Moleculs/TabelInputItem'
import TabelInputMasked from '../../Moleculs/TabelInputMasked'
import TabelSelectItem from '../../Moleculs/TabelSelectItem'
import TabelRadioItem from '../../Moleculs/TabelRadioItem'

// Icons
import MaleIcon from '../../Icons/male.svg';
import FemaleIcon from '../../Icons/female.svg';


export default class KtpInput extends React.Component {
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
      <form onSubmit={this.onSubmitHandler.bind(this)}>
      <div className="mw8 center pa4 bg-white">
        <div className="mb4">
          <h3 className="mb2 black-50 f5">Data Pribadi</h3>
          <div className="flex ba b--black-20">
            <div className="w-third br b--black-20">
            </div>
            <div className="w-two-thirds">
              <TabelInputItem label="Nomor Induk Kependudukan" isNumeric getValue={this.nikChange}/>
              <span className="db bb b--black-20"></span>
              <TabelInputItem label="Nama Lengkap" getValue={this.fullNameChange}/>
              <span className="db bb b--black-20"></span>
              <TabelInputItem label="Kota Kelahiran" getValue={this.bornPlaceChange}/>
              <span className="db bb b--black-20"></span>
              <div className="flex">
                <div className="w-50 br b--black-20">
                  <TabelInputMasked pattern="11-11-1111" label="tanggal lahir" getValue={this.bornDateChange} />

                </div>
                <div className="w-50">
                  <TabelRadioItem name="sex" label="Jenis Kelamin" dataRadio={DataSex} getValue={this.sexChange} hasIcon/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb4">
          <h3 className="mb2 black-50 f5">Alamat</h3>
          <div className="ba b--black-20">
            <div className="w-100">
              <div className="flex">
                <div className="w-two-thirds">
                  <TabelInputItem label="Jalan" getValue={this.streetAddressChange}/>
                </div>
                <div className="flex w-third">
                  <div className="w-50 bl b--black-20">
                    <TabelInputItem label="RT" isNumeric getValue={this.rtChange}/>
                  </div>
                  <div className="w-50 bl b--black-20">
                    <TabelInputItem label="RW" isNumeric getValue={this.rwChange}/>
                  </div>
                </div>
              </div>

              <span className="db bt b--black-20"></span>

              <div className="flex b--black-20">
                <div className="w-third br b--black-20">
                  <TabelSelectItem label="Jenis administrasi" defaultValue={this.state.kelurahanType} dataOption={DataDesa} getValue={this.kelurahanTypeChange}/>
                </div>
                <div className="w-two-thirds">
                  <TabelInputItem label="Nama Desa / Kelurahan" getValue={this.kelurahanNameChange}/>
                </div>
              </div>

              <span className="db bt b--black-20"></span>

              <div className="w-100">
                <TabelInputItem label="Kecamatan" getValue={this.kecamatanChange}/>
              </div>

              <span className="db bt b--black-20"></span>

              <div className="flex b--black-20">
                <div className="w-third br b--black-20">
                  <TabelSelectItem label="Jenis administrasi" defaultValue={this.state.cityType} dataOption={DataKota} getValue={this.cityTypeChange}/>
                </div>
                <div className="w-two-thirds">
                  <TabelInputItem label="Nama Kota / Kabupaten" getValue={this.cityNameChange}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb4">
          <h3 className="mb2 black-50 f5">Status Pernikahan & Pekerjaan</h3>
          <div className="ba b--black-20">
            <div className="">
              <TabelRadioItem name="martialStatus" label="Status Perkawinan" dataRadio={DataMartiaStatus} getValue={this.martialStatusChange}/>
            </div>
            <span className="db bt b--black-20"></span>
            <TabelInputItem label="Pekerjaan" getValue={this.occupationChange}/>
          </div>
        </div>

        <div className="">
          <Button type="sumbit">Simpan Data</Button>
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
