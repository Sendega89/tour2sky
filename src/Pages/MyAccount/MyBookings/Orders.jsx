import React from "react";
import {NavLink} from "react-router-dom";



const Orders = () => {
    return <main>
        <div className="catalog_item row">
        <div className="container">
            <div className="row catalog_row">
                <div className="sidebar">
                    <div className="row wighet">
                        <h5>Hi, and welcome to <br/> your personal account</h5>
                        <div className="row wighet_row">
                            <div className="account_links">
                                <ul>
                                    <li><NavLink to="/orders" className="active">Orders</NavLink></li>
                                    <li><NavLink to="/myAccount">Personal info</NavLink></li>
                                    <li><NavLink to="/wishlist">Wishlist</NavLink></li>
                                    <li><NavLink to="/delAccount">Delete Account</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog_r">
                    <div className="row cat_top">
                        <h4>My Orders</h4>
                    </div>
                    <div className="row row-15">
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

}
export default Orders