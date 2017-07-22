import React from 'react';
import fetch from 'unfetch';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FormKtp from '../FormKtp'



export default class InputKtp extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      Data: {},
    }
  }

  componentDidMount() {
    fetch('dataKtp.json')
      .then(resp => resp.json())
      .then(respData => {
        this.setState({
          Data: respData
        })
      })
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title={this.state.Data.name}
            subtitle={this.state.Data.nik}
            avatar={this.state.Data.avatar}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            <FormKtp
              nik={this.state.Data.nik}
              name={this.state.Data.name}
              bornPlace={this.state.Data.bornPlace}
              bornDate={this.state.Data.bornDate}
              sex={this.state.Data.sex}
              streetAddress={this.state.Data.streetAddress}
              rt={this.state.Data.rt}
              rw={this.state.Data.rw}
              kelurahanType={this.state.Data.kelurahanType}
              kelurahanName={this.state.Data.kelurahanName}
              kecamatan={this.state.Data.kecamatan}
              cityType={this.state.Data.cityType}
              cityName={this.state.Data.cityName}
              martialStatus={this.state.Data.martialStatus}
              occupation={this.state.Data.occupation}
            />
          </CardText>
        </Card>
      </div>);
  }
}
