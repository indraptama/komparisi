import React from 'react'
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


export default class InputKtp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderData = ktpField.map((Value, idx) => {
      if (Value.type === "radio") {
        const choices = Value.option;
        return (
          <li className="mb2 pt2" key={Value.name}>
            <div className="flex items-star">
              <div className="w-30">
                {Value.label}
              </div>
              <div className="w-70">
                <RadioButtonGroup name={Value.name} defaultSelected="not_light">
                  {Value.options.map(Val => {
                    return (
                      <RadioButton key={Value.Name+'_'+Val.value}
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
          <li className="mb2" key={Value.name}>
            <div className="flex items-baseline">
              <div className="w-30">
                {Value.label}
              </div>
              <div className="w-70">
                <DatePicker name={Value.name} hintText={Value.label} mode="landscape" fullWidth={true} />
              </div>
            </div>
          </li>
        )
      }
      return (
        <li className="mb2" key={Value.name}>
          <div className="flex items-baseline">
            <div className="w-30">
              {Value.label}
            </div>
            <div className="w-70 pl2">
              <TextField
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
    <Card>
      <CardHeader
      title="Without Avatar"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
      />
      <CardText expandable={true}>
        <ul>
          {renderData}
        </ul>
      </CardText>
    </Card>);
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
];
