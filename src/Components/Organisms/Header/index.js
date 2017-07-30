import React from 'react';
import {NavLink} from 'react-router-dom'

function Header(props) {

  return(
    <header style={Style.mainHeader}>
      <div className="ph3 flex items-center justify-between h3">
        <nav className>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/newktp'>New KTP</NavLink>
          <NavLink to='/komparisi'>Komparisi</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header


const Style = {
  mainHeader: {
    display: 'flex',
    backgroundColor: "teal",
  }
}
