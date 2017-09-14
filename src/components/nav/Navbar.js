import React, { Component } from 'react';
import './Navbar.css'
import NavbarToggle from './NavbarToggle';
import NavAccountBar from './NavAccountBar';

class Navbar extends Component {

  constructor(props){
    super(props);

    this.state = {
      logged_in: false,
      user: {
        "username": "Ezirens"
      }
    };

  }




  render() {

    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavbarToggle />
            <a href="/" className="navbar-brand">FitApp</a>
          </div>
        <div id='myNavbar' className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="/foods">Food</a></li>
            <li><a href="/exercises">Exercise</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
          <NavAccountBar logged_in={this.state.logged_in} user={this.state.user} />
        </div>
      </div>
      </nav>
    );
  }
}

export default Navbar;
