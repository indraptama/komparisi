import React from 'react'
import anime from 'animejs'
import downarrow from '../../Icons/downarrow.svg';

function TabelSelectItem(props) {

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
    <label className="w-100 pv3 relative db">
      <div className="z-2 relative">
        <span className="f7 fw6 ttc black-50 db mb1 ph3">{props.label}</span>
        <select type={props.type}
                name={props.name}
                defaultValue={props.defaultValue}
                data-isNumeric ={props.isNumeric}
                className="input-reset db pv1 ba-none w-100 bg-transparent sans ph3"
                onChange={props.getValue}
                style={Style.input}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
        >
        {props.dataOption.map(option => (
          <SelectOption key={option.value} value={option.value} label={option.label}/>
        ))}
        </select>
        <span className="absolute w1 right-0" style={Style.arrow}><img src={downarrow} alt="" /></span>
      </div>
      <div className="absolute w-100 h-100 absolute--fill z-1 bg-white o-0" ref={(div) => {bgFocus = div}}></div>

    </label>
  )
}


function SelectOption(props) {
  return(
    <option
      className="sans"
      value={props.value}>
      {props.label}
    </option>
  )
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
  arrow: {
    top: '50%',
    right: '1rem',
    width: '1rem',
    opacity: '.5',
  }
}





export default TabelSelectItem;
