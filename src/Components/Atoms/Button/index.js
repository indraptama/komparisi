import React from 'react'

function Button(props) {
  return(
    <button
      className="f7 fw6 link dim br1 ph4 pv3 dib white bg-hot-pink ttu tracked bn"
      onClick={props.onClick}
      style={props.style}>
      {props.label}
    </button>
  )
}

export default Button
