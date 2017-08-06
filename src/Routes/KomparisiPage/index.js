import React from 'react';
import _ from 'lodash';
import Button from 'material-ui/Button';
import KtpInputV3 from '../../Components/Organisms/KtpInputV3'
import KomparisiResult from '../../Components/Organisms/KomparisiResult'

import PeopleCard from '../../Components/Moleculs/PeopleCard';

// MOBX
import {observable} from 'mobx';
import {observer} from 'mobx-react';

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
    console.log(PIHAK_1.length);
  }

  dialogRequestClose() {

    this.setState({
      dialogOpen: false
    })

  }

  addNewKtpDataPihak_1(data) {
    const pihak_1 = {...this.state.pihak_1};
    const noUrut = Object.keys(pihak_1).length + 1;
    const nik = data.nik;
    pihak_1[`${noUrut}`] = data;
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
          <div className="minh-100vh w-50 pa5 bg-near-white">
            <div className="mw6 center">

              <div className="penghadap_1 mb6">
                <h2 className="f5 pv3 bb b--black-20 mb4">Pihak Pertama</h2>
                <div className="penghadap_1__list mb3 flex flex-wrap">
                  {
                    Object.keys(Pihak_1).map(key => {
                      return (
                        <PeopleCard fullName={Pihak_1[key].fullName} Nik={Pihak_1[key].nik} sex={Pihak_1[key].sex} />
                      )
                    })
                  }
                  <PeopleCard fullName="Indra Pratama Putra" Nik="3204070911850005" sex="male" />
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
          <KtpInputV3 getKTPData={this.addNewKtpDataPihak_1.bind(this)}/>
        </DialogContent>
      </Dialog>
      </div>);
  }
}
