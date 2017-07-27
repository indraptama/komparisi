const dataKtp = {

}

addNewKtpData(data) {
    const ktpDatas = {...this.state.ktpDatas};
    const nik = data.nik;
    ktpDatas[`${nik}`] = data;
    this.setState({ ktpDatas })
  }
