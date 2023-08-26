import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/Home'>
          Home
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
          <NavLink to='/Project' activeStyle>
            Project
          </NavLink>
          <NavLink to='/Experience' activeStyle>
            Experience
          </NavLink>
          <NavLink to='/Contact' activeStyle>
          Contact
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;