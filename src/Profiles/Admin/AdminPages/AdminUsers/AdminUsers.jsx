import s from "../AdminUsers/AdminUsers.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Outlet,Link, NavLink, Route} from "react-router-dom";
import "./AdminUsers.css"


const AdminUsers = (props) => {
    return <div>
        <nav className={s.UserNavMenu}>
            <ul>
                <li><Link to="user_available">Available</Link></li>
                <li><Link to="user_add_change">Add/Change User</Link></li>
                <li><Link to="user_orders">User Orders</Link></li>
                <li><Link to="user_log">Log </Link></li>
            </ul>
        </nav>
        <Outlet></Outlet>
    </div>
}
export default AdminUsers