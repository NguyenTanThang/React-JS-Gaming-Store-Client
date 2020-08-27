import React, { Component } from 'react'

export default class MobileNav extends Component {
    render() {
        return (
            <>
            <div className="mobile-nav">
            <div className="container-fluid">
              <div className="main-nav">
              
              <div className="nav-left">
                <div className="navbar-brand">
                <a href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Epic_games_store_logo.png" alt="Logo"/>
                </a>
              </div>
              </div>
              
               <div className="nav-right">
                 <div className="toggle">
                   <div className="span-container">
                   <span></span>
                   <span></span>
                   <span></span>
                     </div>
                 </div>
               </div>
              
                </div>
            </div>
          </div>
          
          <div className="mobile-main-nav">
            
            <div className="nav-top">
              <ul>
                  <li>
                    <a href="#">STORE</a>
                  </li>
                  <li>
                    <a href="#">BLOGS</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">HELP</a>
                  </li>
                  <li>
                    <a href="#">UNREAL ENGINE</a>
                  </li>
                </ul>
            </div>
            
                <div className="nav-bottom">
                <ul>
                    <li>
                        <a href="#">
                        <i className="fas fa-sign-in-alt"></i>
                        <p>Sign In</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <i className="fas fa-shopping-cart"></i>
                        <p>Cart</p>
                        </a>
                    </li>
                    </ul>
                </div>
          </div>
            </>
        )
    }
}
