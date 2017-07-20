import React from 'react'
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
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
<<<<<<< HEAD
          <li className="mb2 pt2">
            <div className="flex items-star">
              <div className="w-30">
                {Value.label}
              </div>
              <div className="w-70">
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                  {Value.options.map(Val => {
                    return (
                      <RadioButton
                        value={Val.value}
                        label={Val.label}
                      />
                    )
                  })}
                </RadioButtonGroup>
              </div>
            </div>
          </li>
        )
      } else if (Value.type === 'date') {
        return (
          <li className="mb2">
            <div className="flex items-baseline">
              <div className="w-30">
                {Value.label}
              </div>
              <div className="w-70">
                <DatePicker hintText={Value.label} mode="landscape" fullWidth={true} />
              </div>
            </div>
          </li>
=======
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
>>>>>>> origin/master
        )
      }
      return (
        <li className="mb2">
          <div className="flex items-baseline">
            <div className="w-30">
              {Value.label}
            </div>
            <div className="w-70 pl2">
              <TextField
                key={idx}
                type={Value.type}
                name={Value.name}
                fullWidth={true}
              />
            </div>
          </div>
        </li>
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
    "label": "N.I.K",
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
    "options" : [
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
    "options": [
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
