import React from "react";
import s from "./Admin.module.css"
import "../../App.css"
import {Link, NavLink, Route} from "react-router-dom";
import {Routes} from "react-router";
import AdminUsersContainer from "./AdminPages/AdminUsers/AdminUsersContainer";
import "./Admin.css";
import DashboardContainer from "./AdminPages/Dashboard/DashboardContainer";
import PartnersContainer from "./AdminPages/Partners/PartnersContainer";
import RegionContainer from "./AdminPages/Region/RegionContainer";
import AvailableContainer from "./AdminPages/AdminUsers/MenuPages/AvailableContainer";

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
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="attributes">Attributes</NavLink></li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="services">Services</NavLink></li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="orders">Orders</NavLink></li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="activity_location">Activity in location</NavLink></li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="feedback_rating">Feedback/rating</NavLink></li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="criteria_evaluation">Criteria for evaluation</NavLink></li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="payment">Payment</NavLink>
                                </li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="letters">Letters</NavLink>
                                </li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="pages">Pages</NavLink>
                                </li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="blog">Blog</NavLink>
                                </li>
                                <li className={s.menuColumnLeft_Item}>
                                    <NavLink to="settings">Settings</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className={s.contentColumnRight}>
                    <Routes>
                        <Route path="/dashboard"
                               element={<DashboardContainer/>}/>
                        <Route path="/users/*"
                               element={<AdminUsersContainer/>}>
                                <Route path="user_available"
                                       element={<AvailableContainer />}/>
                        </Route>
                        <Route path="/partners"
                               element={<PartnersContainer/>}/>
                        <Route path="/region_interests"
                               element={<RegionContainer/>}/>
                    </Routes>
                </div>
            </div>
    </main>
</div>
}
export default Admin