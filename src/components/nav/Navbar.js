import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {

  render() {
    return (
      <nav className='navbar navbar-toggleable-md navbar-light nav-color'>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    );
  }
}

export default Navbar;
