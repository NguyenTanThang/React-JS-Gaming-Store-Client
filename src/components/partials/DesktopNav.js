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
                    <Link to="/products">STORE</Link>
                  </li>
                  <li>
                    <Link to="/blogs">BLOGS</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
              
               <div className="nav-right">
                 <ul>
                   <li>
                        <Link to="/users/login">
                            <i className="fas fa-sign-in-alt"></i>
                            <p>Sign In</p>
                       </Link>
                   </li>
                   <li>
                        <Link to="/cart">
                            <i className="fas fa-shopping-cart"></i>
                            <p>Cart</p>
                        </Link>
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
