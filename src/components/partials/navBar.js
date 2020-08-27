import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {isNull} from "../../validator/validator";

import DesktopNav from "../partials/DesktopNav";
import MobileNav from "../partials/MobileNav";

class Navbar extends Component{

    componentDidMount() {
        const toggleButton = document.querySelector(".toggle");
        const mobileMainNav = document.querySelector(".mobile-main-nav");

        toggleButton.addEventListener("click", (e) => {
        if (toggleButton.classList.contains("active")) {
                toggleButton.classList.remove("active");          mobileMainNav.classList.remove("active");
            return;
        }
        toggleButton.classList.add("active");
        mobileMainNav.classList.add("active");
        })
    }

    render(){
        const cartQuantityLabel = this.props.totalQuantity > 0 ?
        (<span className="ml-2 badge badge-light">                    {this.props.totalQuantity}
        </span>) : (null); 
        const userManagement = isNull(this.props.userID) ? 
        (
            <li className="nav-item">
                <Link className="nav-link" to="/users/login">Login</Link>
            </li>
        )
        : 
        (<li className="nav-item">
        <Link className="nav-link" to="/users/profile">User Profile</Link>
    </li>)
        return (
            <>
                <DesktopNav/>
                <MobileNav/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        totalQuantity: state.cartReducers.totalQuantity,
        userID: state.userReducers.userID
    }
}

export default connect(mapStateToProps)(Navbar);