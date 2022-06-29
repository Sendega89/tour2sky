import React from "react";
import ProductCards from "../../../assets/common/Cards/ProductCards";





const MyBookings = () => {
    return <div className="catalog_item row">
                <div className="container">
                    <div className="row catalog_row">
                        <div className="sidebar">
                            <div className="row wighet">
                                <h5>Hi, and welcome to <br /> your personal account</h5>
                                <div className="row wighet_row">
                                    <div className="account_links">
                                        <ul>
                                            <li><a href="/myAccount">Account settings</a></li>
                                            <li><a className="active" href="/bookings">Bookings</a></li>
                                            <li><a href="/wishlist">Wishlist</a></li>
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
<ProductCards/>


                         {/*        cat item */}

                        </div>
                    </div>
                    </div>
                </div>
            </div>


}
export default MyBookings