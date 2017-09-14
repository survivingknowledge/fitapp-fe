import React from 'react';

const NavAccountBar = (props) => {
  if (!props.logged_in) {
    return(
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="/signin"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    );
  } else {
    return(
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="" className="dropdown-toggle" data-toggle='dropdown'>
            <span className="glyphicon glyphicon-user"></span>
            <strong> { props.user.username } </strong>
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

export default NavAccountBar;
