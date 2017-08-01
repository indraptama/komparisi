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
      <div>
      <header>
        <AppBar className = {classes.root}>
          <Toolbar>
           <IconButton color="contrast" aria-label="Menu" onClick={this.handleLeftOpen.bind(this)}>
             <MenuIcon />
           </IconButton>
           <Typography type="title" color="inherit">

           </Typography>
           <Button color="contrast">Login</Button>
         </Toolbar>
      </AppBar>
      </header>

      <Drawer
        open={this.state.openDrawer.left}
        onRequestClose={this.handleLeftClose}
        onClick={this.handleLeftClose}>

        <List className={classes.list} disablePadding>
          <NavLink to='/'><ListItem>Home</ListItem></NavLink>
          <NavLink to='/newktp'>New KTP</NavLink>
          <NavLink to='/komparisi'>Komparisi</NavLink>
        </List>

        </Drawer>
      </div>
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

export default withStyles(styleSheet)(Header);



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
