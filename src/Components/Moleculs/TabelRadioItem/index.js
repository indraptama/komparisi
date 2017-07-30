import React from 'react'
import anime from 'animejs'

function TabelRadioItem(props) {

  // For using refs on Stateless function
  // bgFocus must be declared here so the ref callback can refer to it
  // https://facebook.github.io/react/docs/refs-and-the-dom.html

  let bgFocus = null

  function onInputFocus(e) {
    inputAnimation(bgFocus)
  }

  function onInputBlur(e) {
    inputAnimationOut(bgFocus)
  }


  return(
    <div className="w-100 pa3 relative db">
      <div className="z-2 relative" onFocus={onInputFocus} onBlur={onInputBlur}>
        <span className="f7 fw6 ttc black-50 db mb1">{props.label}</span>
        <div className="flex w-100">
          {props.dataRadio.map(radio => (
            <RadioItem
              key={radio.name}
              icon={radio.icon}
              radioName={props.name}
              value={radio.value}
              getValue={props.getValue}
              label={radio.label}
              hasIcon = {props.hasIcon}
              alt={radio.name}
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
    <div className="db ml2 w-100 black-50">
      {props.hasIcon ? <img src={props.icon} alt={props.name}/> : <span>{props.label}</span> }
    </div>
    </label>
  )
}


// Animation

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

export default TabelRadioItem;
