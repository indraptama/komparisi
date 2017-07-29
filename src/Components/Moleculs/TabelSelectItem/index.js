import React from 'react'
import anime from 'animejs'

function TabelSelectItem(props) {

  // For using refs on Stateless function
  // bgFocus must be declared here so the ref callback can refer to it
  // https://facebook.github.io/react/docs/refs-and-the-dom.html

  let bgFocus = null

  function NumericOnly(e) {
    inputNumericOnly(e)
  }

  function onInputFocus(e) {
    inputAnimation(bgFocus)
  }

  function onInputBlur(e) {
    inputAnimationOut(bgFocus)
  }


  return(
    <label className="w-100 pa3 relative db">
      <div className="z-2 relative">
        <span className="f7 fw6 ttc black-50 db mb1">{props.label}</span>
        <select  type={props.type}
                name={props.name}
                defaultValue={props.defaultValue}
                data-isNumeric ={props.isNumeric}
                className="input-reset db pv1 ba-none w-100 bg-transparent sans"
                onChange={props.getValue}
                style={Style.input}
                onKeyPress={props.isNumeric ? NumericOnly : '' }
                onFocus={onInputFocus}
                onBlur={onInputBlur}
        >
        {props.dataOption.map(option => (
          <SelectOption key={option.value} value={option.value} label={option.label}/>
        ))}
        </select>
      </div>
      <div className="absolute w-100 h-100 absolute--fill z-1 bg-white o-0" ref={(div) => {bgFocus = div}}></div>

    </label>
  )
}


function SelectOption(props) {
  return(
    <option

      className="sans ph1 pv2"
      value={props.value}>
      {props.label}
    </option>
  )
}




function inputNumericOnly(event) {
  if(event.charCode !== 13 && (event.charCode < 48 || event.charCode > 58)) {
    event.preventDefault();
  }
}


function inputAnimation(elem) {
   anime({
    targets: elem,
    backgroundColor: '#f0f0f0',
    opacity: 1,
    easing: [0, 0, .2, 1],
    duration: 250,
  });
}

function inputAnimationOut(elem) {
  anime({
    targets: elem,
    backgroundColor: '#fff',
    opacity: 0,
    easing: [.4, 0, 0, 1],
    duration: 250,
  });
}

const Style = {
  labelContainer: {
    display: 'flex',
    width: '100%',
    padding: '1rem',
  },
  labelText: {

  },
  inputField: {

  },
}





export default TabelSelectItem;
