import React from 'react'
import TextField from 'material-ui/TextField'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

export default class InputKtp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderData = ktpField.map((Value, idx) => {
      if (Value.type === "radio") {
        const choices = Value.option;
        return (
          <div>
            <h6>{Value.label}</h6>
            <RadioButtonGroup key={idx}
              name={Value.name}
              defaultSelected={Value.option[0].value}>
                {choices.map(choice => {
                  console.log(choice.label);
                  return (
                    <RadioButton value={choice.value} label={choice.label} />
                  )
                })}
            </RadioButtonGroup>
          </div>
        )
      }
      return (
        <TextField
          key={idx}
          type={Value.type}
          floatingLabelText={Value.label}
          name={Value.name}
          hintText=""
          floatingLabelFixed={true}
        />
      )
    })

    return (
    <div>
      <ul>
        {renderData}
      </ul>
    </div>);
  }
}

// Mockup Data from server
const ServerData = {
  "_id": 3204070911850005,
  "name": "Indra Pratama Putra",
  "bornPlace" : "Bandung",
  "birthday": "Nov 9, 1985",
  "sex": "male",
  "address" : {
    "street": "Jalan Pasir Jati A67",
    "rt": 1,
    "rw": 5,
    "kelurahan": "jatiendah",
    "kecamatan": "cilengkrang",
    "city": "kabupaten bandung",
    "occupation": "Wiraswasta"
  }
}

const ktpField = [
  {
    "label": "Nomor Induk Kependudukan",
    "type": "number",
    "name": "nik",
  },
  {
    "label": "Nama Lengkap",
    "type": "text",
    "name": "name",
  },
  {
    "label": "Kota Kelahiran",
    "type": "text",
    "name": "bornPlace",
  },
  {
    "label": "Tanggal Lahir",
    "type": "date",
    "name": "birthDate",
  },
  {
    "label": "Jenis Kelamin",
    "type": "radio",
    "name": "sex",
    "option" : [
      {
        "label": "Laki-laki",
        "value": "male"
      },
      {
        "label": "Perempuan",
        "value": "female"
      }
    ]
  },
  {
    "label": "Alamat",
    "type": "text",
    "name": "street",
  },
  {
    "label": "RT",
    "type": "number",
    "name": "rt",
  },
  {
    "label": "RW",
    "type": "number",
    "name": "rw",
  },
  {
    "label": "Kelurahan / Desa",
    "type": "text",
    "name": "kelurahan",
  },
  {
    "label": "Kecamatan",
    "type": "text",
    "name": "kecamatan",
  },
  {
    "label": "Kota",
    "type": "text",
    "name": "city",
  },
  {
    "label": "Status Perkawinan",
    "type": "radio",
    "name": "martialStatus",
    "option": [
      {
        "label": "Belum Menikah",
        "value": "single"
      },
      {
        "label": "Menikah",
        "value": "mariage"
      },
      {
        "label": "Cerai Hidup",
        "value": "divorce"
      },
      {
        "label": "Cerai Mati",
        "value": "widowed"
      }
    ]
  },
  {
    "label": "Pekerjaan",
    "type": "text",
    "name": "occupation",
  }
]


// <TextField
  // type="number"
  // name="nik"
  // hintText="1023434335353"
  // floatingLabelFixed={true}
  // floatingLabelText="Nomor Induk Kependudukan"
// />
//
//           // <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
          //   <RadioButton
          //   value="not_light"
          //   label="Selected by default"
          // />
          // </RadioButtonGroup>
