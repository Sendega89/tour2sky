import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Slider from "rc-slider";



const MyWishlist = () => {
    const [min,setMin] = useState([]);
    const [max,setMax] = useState([]);
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
<div>{min}</div>
<div>{max}</div>
                                    <Slider  trackStyle={{
                                        backgroundImage: "linear-gradient(272deg,#3cc,#2980b9)"
                                    }}
                                             handleStyle={{
                                                 boxShadow:" 0 3px 4px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)",
                                                 backgroundColor: "#ffffff",
                                             }}
                                             range
                                        /*marks={{
                                            100: `$ 100`,
                                            500: `$ 500`
                                        }}*/
                                             min={100}
                                             max={500}
                                             defaultValue={[200, 300]}
                                             tipFormatter={value => <span>`$ ${value}`</span>}
                                            onChange={(value)=> {
                                                setMax(value[1]);
                                                setMin(value[0])}}


                                             tipProps={{
                                                 placement: "bottom",
                                                 visible: true,
                                             }}/>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>







}
export default MyWishlist