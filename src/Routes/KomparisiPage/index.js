import React from 'react';
import _ from 'lodash';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import KtpInput from '../../Components/Organisms/KtpInput'
import KomparisiResult from '../../Components/Organisms/KomparisiResult'

import Dialog, { DialogContent } from 'material-ui/Dialog';


export default class KomparisiPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pihak_1: {},
      pihak_2: {},
      dialogOpen: false,
    }

    this.addPihak_1 = this.addPihak_1.bind(this);
    this.addPihak_2 = this.addPihak_2.bind(this);
    this.dialogRequestClose = this.dialogRequestClose.bind(this);
  }

  addPihak_1(e) {
    console.log(this.state);
  }

  addPihak_2(e) {
    const PIHAK_1 = _.size(this.state.pihak_1);
    console.log(this.state)
    console.log(PIHAK_1);
  }

  dialogRequestClose() {

    this.setState({
      dialogOpen: false
    })

  }

  addNewKtpDataPihak_1(data) {
    const pihak_1 = {...this.state.pihak_1};
    const nik = data.nik;
    pihak_1[`${nik}`] = data;
    this.setState({
      pihak_1: pihak_1,
      dialogOpen: false
     })
  }

  // Component Will recives props
  componentWillReceiveProps() {
  }



  render() {
    const Pihak_1 = this.state.pihak_1;
    const komparisiPihak1 = Object.keys(Pihak_1).map(key => {
      if (key.length >= 1) {
        return(
          <li className="mb4" key={Pihak_1[key].nik}><KomparisiResult dataKTP={Pihak_1[key]} /></li>
        )
      }
      return (
        <h2>data Penghadap 1 tidak tersedia</h2>
      )
    });

    return (
      <div className="KomparisiPage">
        <div className="flex">
          <div className="minh-100vh w-50 pa5">
            <div className="mw6 center">

              <div className="penghadap_1 mb6">
                <h2 className="f5 pv3 bb b--black-20">Pihak Pertama</h2>
                <div className="penghadap_1__list mb3">

                </div>
                <div className="penghadap_1__action tr">
                   <Button onClick={() => this.setState({ dialogOpen: true })}>Tambah Penghadap</Button>
                </div>
              </div>

              <div className="penghadap_2">
                <h2 className="f5 pv3 bb b--black-20">Pihak Kedua</h2>
                <div className="penghadap_2__list mb3">

                </div>
                <div className="penghadap_2__action tr">
                  <Button onClick={this.addPihak_2}>Tambah Penghadap</Button>
                </div>
              </div>

            </div>
          </div>
          <div className="minh-100vh w-50 bg-white pa5 shadow-1">
            <ul>{ komparisiPihak1 }</ul>
          </div>
        </div>


      <Dialog open={this.state.dialogOpen}
              onRequestClose={this.dialogRequestClose}
              maxWidth='md'>
        <DialogContent>
          <KtpInput getKTPData={this.addNewKtpDataPihak_1.bind(this)}/>
        </DialogContent>
      </Dialog>
      </div>);
  }
}
