import React, {useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import BookingsCards from "./BookingsCards";



const Bookings = (props) => {

  /*  useEffect(()=>{
        props.getOrders(props.token)
    },[])*/

    return <main>
        <div className="catalog_item row">
            <div className="container">
                <div className="row catalog_row">
                    <div className="sidebar">
                        <div className="row wighet">
                            <h5>Hi, {props.name} <br/>{props.surname}</h5>
                            <div className="row wighet_row">
                                <div className="account_links">
                                    <ul>
                                        <li><Link to="/bookings" className="active">Bookings</Link></li>
                                        <li><Link to="/myAccount">Personal info</Link></li>
                                        <li><Link to="/wishlist">Wishlist</Link></li>
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
                            <BookingsCards {...props}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

}
export default Bookings