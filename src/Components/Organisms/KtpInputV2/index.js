import React from 'react';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormHelperText from 'material-ui/Form/FormHelperText';


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
        <Card className={classes.Card}>
          <div className={classes.Card_cover}></div>
          <div className={classes.Card_content}>

          <CardContent>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name" className={classes.Label}>Name</InputLabel>
              <Input id="name" value={this.state.name} onChange={this.handleChange} />
            </FormControl>
          </CardContent>
          <CardActions>
            <Button dense>Learn More</Button>
          </CardActions>
          </div>
        </Card>
      </form>
    );
  }
}


const styleSheet = createStyleSheet(theme => ({
  Card: {
    width: 800,
    margin: '0 auto',
    display: 'flex',
  },
  Card_cover: {
    width: 256,
    backgroundColor: 'teal',
  },
  textField: {
    width: 256,
    marginLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  Label: {
    top: -8,
  },
}));



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

export default withStyles(styleSheet)(KtpInputV2);
