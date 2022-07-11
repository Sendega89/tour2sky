import React from "react";
import {NavLink} from "react-router-dom";
import ProductCards from "../../../assets/common/Cards/ProductCards";
import PaginatorContainer from "../../../assets/common/Pagination/PaginatorContainer";
import {useEffect} from "react";



const MyWishlist = (props) => {

    useEffect(()=>{
        props.getWishList(props.token)
    },[props.wishList])

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

                                {/*<FavoriteItems {...props}/>*/}
                            </div>
                            <div className="row row-15">
                                <ProductCards productCards={props.productCards}
                                              addRemoveWishlist={props.addRemoveWishlist}
                                              getProductItemView={props.getProductItemView}
                                              isAuth={props.isAuth}
                                              token={props.token}/>
                            </div>
                            <div className="row">

                                <PaginatorContainer totalItemCount={props.pagination.total}
                                                    pageSize={props.pagination.count}
                                                    currentPage={props.pagination.current_page}
                                                    totalPages={props.pagination.total_pages}
                                                    links={props.pagination.links}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>







}
export default MyWishlist