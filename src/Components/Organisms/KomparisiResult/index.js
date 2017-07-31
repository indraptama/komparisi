import React from 'react';
import numToWord from '../../../Lib/numtoword'
import monthToWord from '../../../Lib/monthtoword'

function KomparisiResult(props) {
  let DataKtp = props.dataKTP;
  let templateSource = {
    nik: DataKtp.nik,
    fullName: DataKtp.fullName,
    bornPlace: DataKtp.bornPlace,
    bornDate: DataKtp.bornDate,
    sex: DataKtp.sex,
    streetAddress: DataKtp.streetAddress,
    rt: DataKtp.rt,
    rw: DataKtp.rw,
    kelurahanType: DataKtp.kelurahanType,
    kelurahanName: DataKtp.kelurahanName,
    kecamatan: DataKtp.kecamatan,
    cityType: DataKtp.cityType,
    cityName: DataKtp.cityName,
    martialStatus: DataKtp.martialStatus,
    occupation: DataKtp.occupation,
  }

  const personTitle = getTitle(templateSource.sex, templateSource.martialStatus);
  const bornDataArray = (templateSource.bornDate).split('-').map(key => parseInt(key, 10));
  const bornDateW = numToWord(bornDataArray[0]);
  const bornMonthW = monthToWord(bornDataArray[1]);
  const bornYearW = numToWord(bornDataArray[2]);

  const bornDateWord = (bornDateW+" "+bornMonthW+" "+bornYearW);

  return (
    <p>
      {`${personTitle} ${templateSource.fullName}, lahir di ${templateSource.bornPlace} pada tanggal ${templateSource.bornDate} (${bornDateWord}), ${templateSource.occupation} Warga Negara Indonesia. Pemegang Kartu Tanda Penduduk dengan Nomor Induk Kependudukan (NIK) ${templateSource.nik}. Bertempat tinggal di ${templateSource.cityType} ${templateSource.cityName}, beralamat di ${templateSource.streetAddress}, Rukun Tetangga ${templateSource.rt}, Rukun Warga ${templateSource.rw}, ${templateSource.kelurahanType} ${templateSource.kelurahanName}, Kecamatan  ${templateSource.kecamatan}`}
    </p>
  )




}

function getTitle(sex, martialStatus) {
  if (sex === 'male') {
    return 'Tuan'
  } else if (sex === 'female' && martialStatus === 'single') {
    return 'Nona'
  }
  return 'Nyonya'
}

export default KomparisiResult
