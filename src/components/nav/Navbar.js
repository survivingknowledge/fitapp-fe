import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {

  constructor(props){
    super(props);

    this.state = {
      logged_in: true,
      user: {
        "username": "Ezirens"
      }
    };

  }




  render() {

    //if logged in show profile, else show sigin and signup links
    const signin_signup = () => {
      if(!this.state.logged_in) {
        return (
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="/signin"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>
        );
      }else {
        return (
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="" className="dropdown-toggle" data-toggle='dropdown'>
                <span className="glyphicon glyphicon-user"></span>
                <strong> { this.state.user.username } </strong>
                <span className="glyphicon glyphicon-chevron-down"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="navbar-login">
                    <div className="row text-center">
                      <div className="col-lg-4">
                        <a href=""><span className="glyphicon glyphicon-user"></span> My Account</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="divider"></li>
                <li>
                  <div className="navbar-login navbar-login-session">
                    <div className="row">
                        <div className="col-lg-12">
                          <a href="" className="btn btn-block btn-xs btn-danger text-center">Logout</a>
                        </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        );
      }
    }

    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type='button' className="navbar-toggle" data-toggle='collapse' data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand">FitApp</a>
          </div>

        <div id='myNavbar' className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="/foods">Food</a></li>
            <li><a href="/exercises">Exercise</a></li>
            <li><a href="/community">Community</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
          { signin_signup() }
        </div>
      </div>
      </nav>
    );
  }
}

export default Navbar;
