import React from 'react';
import {NavLink} from 'react-router-dom'

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

    return (
      <header className="fixed top-0 left-0 right-0 ph2 bg-near-black">
        <div className="header_container h3 flex items-center">
          <nav className="flex f6">
            <NavLink to='/' className="dib mr4 link white">Home</NavLink>
            <NavLink to='/newktp' className="dib mr4 link white">New KTP</NavLink>
            <NavLink to='/komparisi' className="dib mr4 link white">Komparisi</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;


// {/* <div className="ph3 flex items-center justify-between h3">
//   <nav className>
//     <NavLink to='/'>Home</NavLink>
//     <NavLink to='/newktp'>New KTP</NavLink>
//     <NavLink to='/komparisi'>Komparisi</NavLink>
//   </nav>
// </div> */}
