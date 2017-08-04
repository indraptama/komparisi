import React from 'react'
import {focusLine, outFocusLine} from '../../Animations';

function SelectField (props) {
  let highlightLine = null;
  let Labels = null

  function inputOnFocus() {
    focusLine(highlightLine, Labels);
  }

  function inputOnBlur() {
    outFocusLine(highlightLine, Labels);
  }


  return (
    <div className="w-100 db">
      <span className="f7 db fw5 ttc silver ttc" ref={(span) => {Labels = span}}>{props.label}</span>
      <select
        name={props.name}
        className="input-reset db sans pv2 w-100 ba-none bg-white Select_arrow"
        style={Style.SelectStyle}
        defaultValue={props.dataOptions[0].value}
        onChange={props.onChange}
        onFocus={inputOnFocus}
        onBlur={inputOnBlur}
        value={props.value}
      >
        {
          props.dataOptions.map(option => {
            return (
              <SelectOptions key={`${props.name}_${option.value}`}value={option.value} label={option.label}/>
            )
          })
        }
      </select>
      <div className="relative w-100 overflow-x-hidden">
        <span className="w-100 db absolute z-2 top-0" ref={(span) => {highlightLine = span}} style={Style.highlightLine}/>
        <span className="w-100 db bb b--black-20 relative z-1"/>
      </div>
    </div>
  )
}

const SelectOptions = (props) => {
  return (
    <option className="w-100 db" value={props.value}>{props.label}</option>
  )
}


const Style = {
  SelectStyle: {
    height: '2.15rem',
  }
}

export default SelectField;
