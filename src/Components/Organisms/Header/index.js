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

// SIde drawer
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrawer: {
        left: false,
      },
    }
  }

  toggleDrawer = (side, open) => {
    const drawerState = {};
    drawerState[side] = open;
    this.setState({ openDrawer: drawerState });
  };

  handleLeftOpen = () => this.toggleDrawer('left', true);
  handleLeftClose = () => this.toggleDrawer('left', false);

  render() {
    const classes = this.props.classes;
    return (
      <header className="fixed top-0 left-0 right-0 ph2 bg-near-black">
        <div className="header_container h3 flex items-end">
          <nav className="flex f6">
            <NavLink to='/' className="dib mr4 pb2 link white">Home</NavLink>
            <NavLink to='/newktp' className="dib mr4 pb2 link white">New KTP</NavLink>
            <NavLink to='/komparisi' className="dib mr4 pb2 link white">Komparisi</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}


const styleSheet = createStyleSheet({
  root: {
    display: 'flex',
    backgroundColor: "#2196f3",
    boxShadow: 0,
  },
  list: {
    width: 250,
    flex: 'initial',
  }
});

export default Header;



const Style = {
  root: {
    display: 'flex',
    backgroundColor: "blue",
    height: '48px'
  }
}

// {/* <div className="ph3 flex items-center justify-between h3">
//   <nav className>
//     <NavLink to='/'>Home</NavLink>
//     <NavLink to='/newktp'>New KTP</NavLink>
//     <NavLink to='/komparisi'>Komparisi</NavLink>
//   </nav>
// </div> */}
