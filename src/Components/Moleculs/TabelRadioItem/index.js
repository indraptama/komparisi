import React from 'react'
import anime from 'animejs'

function TabelRadioItem(props) {

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
    <div className="w-100 pa3 relative db">
      <div className="z-2 relative">
        <span className="f7 fw6 ttc black-50 db mb1">{props.label}</span>
        <div className="flex w-100">
          {props.dataRadio.map(radio => (
            <RadioItem
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              key={radio.name}
              label={radio.label}
              radioName={props.name}
              value={radio.value}
              getValue={props.getValue}
              />
          ))}
        </div>
      </div>
      <div className="absolute w-100 h-100 absolute--fill z-1 bg-white o-0" ref={(div) => {bgFocus = div}}></div>
    </div>
  )
}


function RadioItem(props) {
  return(
    <label className="flex items-center pa2">
    <input
      type="radio"
      value={props.value}
      checked={props.selected}
      className="db"
      name={props.radioName}
      onClick={props.getValue}
    />
    <span className="db ml2 w-100 black-50">{props.label}</span>
    </label>
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

// {/* <select  type={props.type}
//         name={props.name}
//         defaultValue={props.defaultValue}
//         data-isNumeric ={props.isNumeric}
//         className="input-reset db pv1 ba-none w-100 bg-transparent sans"
//         onChange={props.getValue}
//         style={Style.input}
//         onKeyPress={props.isNumeric ? NumericOnly : '' }
//         onFocus={onInputFocus}
//         onBlur={onInputBlur}
// >
//
// </select> */}




export default TabelRadioItem;
