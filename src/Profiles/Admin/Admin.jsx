import React from "react";
import s from "./Admin.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink, Route} from "react-router-dom";
import {Routes} from "react-router";
import AdminUsersContainer from "./AdminPages/AdminUsers/AdminUsersContainer";
import "./Admin.css";

const Admin = (props) => {
    return <div className={"container"}>
        <main>
            <div className={s.adminContainer}>
                <div className={s.menuColumnLeft}>
                    <div className={s.menuLeftNameItems}>
                        <nav className={"adminPage"}>
                            <ul>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="dashboard">Dashboard</NavLink></li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="users">Users</NavLink>
                                </li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="partners">Partners</NavLink>
                                </li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="region_interests">Region/interests</NavLink>
                                </li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="category">Category</NavLink>
                                </li>
                                <li className={s.menuColumnLeft_Item}>Attributes</li>
                                <li className={s.menuColumnLeft_Item}>Services</li>
                                <li className={s.menuColumnLeft_Item}>Orders</li>
                                <li className={s.menuColumnLeft_Item}>Activity in location</li>
                                <li className={s.menuColumnLeft_Item}>Feedback/rating</li>
                                <li className={s.menuColumnLeft_Item}>Criteria for evaluation</li>
                                <li className={s.menuColumnLeft_Item}>Payment</li>
                                <li className={s.menuColumnLeft_Item}>Letters</li>
                                <li className={s.menuColumnLeft_Item}>Pages</li>
                                <li className={s.menuColumnLeft_Item}>Blog</li>
                                <li className={s.menuColumnLeft_Item}>Settings</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={s.menuLeftIcons}>

                    </div>
                </div>
                <div className={s.contentColumnRight}>
                    <Routes>
                        <Route path="/users"
                               element={<AdminUsersContainer/>}/>
                    </Routes>
                </div>
            </div>
        </main>
    </div>
}
export default Admin