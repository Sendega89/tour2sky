import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";





const HeaderAutorized = () => {
    return <div className="header_login">
        <div className="login_drop">
            <span><i><FontAwesomeIcon icon="fa-solid fa-user"/></i>Personal account</span>
            <ul>
                <li><NavLink to="/myAccount">Account settings</NavLink></li>
                <li><NavLink to="/bookings">Bookings</NavLink></li>
                <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                <li><NavLink to="#">Sign Out</NavLink></li>
            </ul>
        </div>
    </div>
}
export default HeaderAutorized