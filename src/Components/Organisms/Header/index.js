import React from 'react';
import {NavLink} from 'react-router-dom'

// material-ui
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';



function Header(props) {

  return(
    <header>
      <AppBar>
        <Toolbar>
         <IconButton color="contrast" aria-label="Menu">
           <MenuIcon />
         </IconButton>
         <Typography type="title" color="inherit">
           <NavLink to='/'>Home</NavLink>
           <NavLink to='/newktp'>New KTP</NavLink>
           <NavLink to='/komparisi'>Komparisi</NavLink>
         </Typography>
         <Button color="contrast">Login</Button>
       </Toolbar>
    </AppBar>
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

// {/* <div className="ph3 flex items-center justify-between h3">
//   <nav className>
//     <NavLink to='/'>Home</NavLink>
//     <NavLink to='/newktp'>New KTP</NavLink>
//     <NavLink to='/komparisi'>Komparisi</NavLink>
//   </nav>
// </div> */}
