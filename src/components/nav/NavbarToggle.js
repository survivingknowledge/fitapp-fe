import React from 'react';

const NavbarToggle = (props) => {
  return(
    <button type='button' className="navbar-toggle" data-toggle='collapse' data-target="#myNavbar">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
  );
}

export default NavbarToggle;
