import React from 'react';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// My Components
import KtpTextInput from '../KtpTextInput'

export default class FormKtp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

    <ul>
      <li><KtpTextInput name="nik" label="N.I.K" defValue="" type="number"/></li>
      <li><KtpTextInput name="name" label="Nama Lengkap" defValue=""/></li>
      <li><KtpTextInput name="bornPlace" label="Kota Kelahiran" defValue=""/></li>
      <li><KtpTextInput name="bornDate" label="Tanggal Lahir" defValue=""/></li>
      <li>
        <div className="flex items-center w-100">
          <div className="w-30">Jenis Kelamin</div>
          <div className="w-70">
            <SelectField name="sex" autoWidth={false} style={Style.dropdown} menuItemStyle={Style.menuItem}>
              <MenuItem value={'male'} primaryText="Laki-laki" />
              <MenuItem value={'female'} primaryText="Perempuan" />
            </SelectField>
          </div>
        </div>
      </li>

      <li><KtpTextInput name="streetAddress" label="Alamat" defValue=""/></li>
      <li><KtpTextInput name="rt" label="RT" defValue="" type="number"/></li>
      <li><KtpTextInput name="rw" label="RW" defValue="" type="number"/></li>

      <li>
        <div className="flex items-center w-100">
          <div className="w-30">Kelurahan</div>
          <div className="w-70">
            <div className="flex">
              <div className="w-30">
                <SelectField name="kelurahan" autoWidth={false} style={Style.dropdown} menuItemStyle={Style.menuItem}>
                  <MenuItem value={'kelurahan'} primaryText="Kelurahan" />
                  <MenuItem value={'desa'} primaryText="Desa" />
                </SelectField>
              </div>
              <div className="w-70 pl2">
                <TextField name="kelurahanName" label="" defValue="" fullWidth/>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li><KtpTextInput name="kecamatan" label="Kecamatan" defValue=""/></li>

      <li>
        <div className="flex items-center w-100">
          <div className="w-30">Kota</div>
          <div className="w-70">
            <div className="flex">
              <div className="w-30">
                <SelectField name="" autoWidth={false} style={Style.dropdown} menuItemStyle={Style.menuItem}>
                  <MenuItem value={'kota'} primaryText="Kota" />
                  <MenuItem value={'kabupaten'} primaryText="Kabupaten" />
                </SelectField>
              </div>
              <div className="w-70 pl2">
                <TextField name="kelurahanName" label="" defValue="" fullWidth/>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div className="flex items-center w-100">
          <div className="w-30">Status Pernikahan</div>
          <div className="w-70">
            <SelectField name="marriageStatus" autoWidth={false} style={Style.dropdown} menuItemStyle={Style.menuItem}>
              <MenuItem value={'single'} primaryText="Belum Menikah" />
              <MenuItem value={'marriage'} primaryText="Menikah" />
              <MenuItem value={'devorced'} primaryText="Cerai Hidup" />
              <MenuItem value={'widowed'} primaryText="Cerai Mati" />
            </SelectField>
          </div>
        </div>
      </li>

      <li><KtpTextInput name="occupation" label="Pekerjaan" defValue=""/></li>
    </ul>

    );
  }
}


const Style = {
  dropdown: {
    width: '100%',
    display: 'block',
  },
  MenuItem: {
    marginRight: 0,
  }
}
