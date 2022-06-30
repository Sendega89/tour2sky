import React from "react";
import ProductCardsContainer from "../../../assets/common/Cards/ProductCardsContainer";
import {NavLink} from "react-router-dom";


const MyBookings = () => {
    return <div className="catalog_item row">
        <div className="container">
            <div className="row catalog_row">
                <div className="sidebar">
                    <div className="row wighet">
                        <h5>Hi, and welcome to <br/> your personal account</h5>
                        <div className="row wighet_row">
                            <div className="account_links">
                                <ul>
                                    <li><NavLink to="/myAccount">Account settings</NavLink></li>
                                    <li><NavLink to="/bookings" className="active"  >Bookings</NavLink></li>
                                    <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog_r">
                    <div className="row cat_top">
                        <h4>My Bookings</h4>
                    </div>

                    <div className="row row-15">
                        {/*        cat item */}
                        <ProductCardsContainer/>


                        {/*        cat item */}

                    </div>
                </div>
            </div>
        </div>
    </div>


}
export default MyBookings