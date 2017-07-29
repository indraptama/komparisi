import React from 'react';
import anime from 'animejs'

// Import Components
import TabelInputItem from '../../Moleculs/TabelInputItem'
import TabelSelectItem from '../../Moleculs/TabelSelectItem'
import TabelRadioItem from '../../Moleculs/TabelRadioItem'


export default class KtpInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nik: '',
      name: '',
      bornPlace: '',
      bornDate: '',
      sex: '',
      streetAddress: '',
      rt: '',
      rw: '',
      kelurahanType: '',
      kelurahanName: '',
      kecamatan: '',
      cityType: '',
      cityName: '',
      martialStatus: '',
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
  nikChange(evt) {this.setState({nik: evt.target.value})}
  fullNameChange(evt) {this.setState({name: evt.target.value})}
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




  render() {
    return (
      <div className="mw7 center pa4 bg-white">
        <div className="mb4">
          <h3 className="mb2 black-50 f5">Data Pribadi</h3>
          <div className="flex ba b--black-30">
            <div className="w-third br b--black-30">
            </div>
            <div className="w-two-thirds">
              <TabelInputItem label="Nomor Induk Kependudukan" isNumeric getValue={this.nikChange}/>
              <span className="db bb b--black-30"></span>
              <TabelInputItem label="Nama Lengkap" />
              <span className="db bb b--black-30"></span>
              <TabelInputItem label="Kota Kelahiran"/>
              <span className="db bb b--black-30"></span>
              <div className="flex">
                <div className="w-50 br b--black-30">
                  <TabelInputItem label="Tanggal Lahir" isNumeric/>
                </div>
                <div className="w-50">
                  <TabelRadioItem name="sex" label="Jenis Kelamin" dataRadio={DataSex} getValue={this.sexChange}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb4">
          <h3 className="mb2 black-50 f5">Alamat</h3>
          <div className="ba b--black-30">
            <div className="w-100">
              <div className="flex">
                <div className="w-two-thirds">
                  <TabelInputItem label="Jalan"/>
                </div>
                <div className="flex w-third">
                  <div className="w-50 bl br b--black-30">
                    <TabelInputItem label="RT" isNumeric/>
                  </div>
                  <div className="w-50">
                    <TabelInputItem label="RW" isNumeric/>
                  </div>
                </div>
              </div>

              <span className="db bt b--black-30"></span>

              <div className="flex b--black-30">
                <div className="w-third br b--black-30">
                  <TabelSelectItem label="Jenis administrasi" dataOption={DataDesa}/>
                </div>
                <div className="w-two-thirds">
                  <TabelInputItem label="Desa / Kelurahan" />
                </div>
              </div>

              <span className="db bt b--black-30"></span>

              <div className="w-100">
                <TabelInputItem label="Kecamatan" />
              </div>

              <span className="db bt b--black-30"></span>

              <div className="flex b--black-30">
                <div className="w-third br b--black-30">
                  <TabelSelectItem label="Jenis administrasi" dataOption={DataKota}/>
                </div>
                <div className="w-two-thirds">
                  <TabelInputItem label="Kota / Kabupaten" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="div">
          <h3 className="mb2 black-50 f5">Status Pernikahan & Pekerjaan</h3>
          <div className="ba b--black-30">
            <div className="">
              <TabelRadioItem name="martialStatus" label="Status Perkawinan" dataRadio={DataMartiaStatus} getValue={this.martialStatusChange}/>
            </div>
            <span className="db bt b--black-30"></span>
            <TabelInputItem label="Pekerjaan"/>
          </div>
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
    value: 'man',
    label: 'Laki-laki',
    name: 'single'
  },
  {
    value: 'female',
    label: 'Perempuan',
    name: 'marriage'
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
