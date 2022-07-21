import s from "./Partners.module.css";
import React from "react";
import {Link, Outlet} from "react-router-dom";


const Partners = (props) => {
    return  <div>
        <nav className={s.partnerNavMenu}>
            <ul>
                <li><Link to="partner_available">Available Partners</Link></li>
                <li><Link to="partner_add_change">Add/Change User</Link></li>
                <li><Link to="partner_log">Log </Link></li>
            </ul>
        </nav>
        <Outlet></Outlet>
    </div>
}
export default Partners