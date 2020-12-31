import React, { Component } from 'react';
import {Link} from "react-router-dom";

class DesktopNav extends Component {
    render() {
        return (
            <div id="desktop-nav">
            <div className="container-fluid">
              <div className="main-nav">
              
              <div className="nav-left">
                <div className="navbar-brand">
                <Link to="/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Epic_games_store_logo.png" alt="Logo"/>
                </Link>
              </div>
                
                <ul>
                  <li>
                    <Link to="/">STORE</Link>
                  </li>
                  <li>
                    <Link to="/users/login">SIGN IN</Link>
                  </li>
                  <li>
                    <Link to="/cart">CART</Link>
                  </li>
                </ul>
              </div>
              
                </div>
            </div>
          </div>
        )
    }
}

export default DesktopNav;
