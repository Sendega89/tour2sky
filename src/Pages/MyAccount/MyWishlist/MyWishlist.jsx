import React from "react";
import {NavLink} from "react-router-dom";



const MyWishlist = () => {
    return   <div className="content">
            <div className="catalog_item row">
                <div className="container">
                    <div className="row catalog_row">
         {/* Sidebar */}
                        <div className="sidebar">
                            <div className="row wighet">
                                <h5>Hi, and welcome to <br /> your personal account</h5>
                                <div className="row wighet_row">
                                    <div className="account_links">
                                        <ul>
                                            <li><NavLink to="/myAccount">Account settings</NavLink></li>
                                            <li><NavLink to="/bookings">Bookings</NavLink></li>
                                            <li><NavLink className="active" to="/wishlist">Wishlist</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
         {/*Sidebar */}


                        <div className="catalog_r">
                            <div className="row cat_top">
                                <h4>Wishlist</h4>
                            </div>

                            <div className="row row-15">


                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>







}
export default MyWishlist