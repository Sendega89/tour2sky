import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";






const HeaderAutorized = (props) => {

    return <div className="header_login">
        <div className="login_drop">
            <span><i><FontAwesomeIcon icon="fa-solid fa-user"/></i>My account</span>
            <ul>
                <li><NavLink to="/myAccount">Account settings</NavLink></li>
                <li><NavLink to="/bookings">Bookings</NavLink></li>
                <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                <li><NavLink to="#" onClick={props.getOutClientProfile}>Sign Out</NavLink></li>
            </ul>
        </div>
    </div>
}
export default HeaderAutorized