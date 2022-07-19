import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import ProductCards from "../../../assets/common/Cards/ProductCards";
import PaginatorContainer from "../../../assets/common/Pagination/PaginatorContainer";
import s from "./MyWishlist.module.css";

const MyWishlist = (props) => {
    const [u, setU] = useState(true);
const [question,setQuestion] =useState(true)

    useEffect(() => {
        props.getWishList(props.token)
    }, [u])

    return <div className="content">
        <main>
        <div className="catalog_item row">
            <div className="container">
                <div className="row catalog_row">
                    <div className="sidebar">
                        <div className="row wighet">
                            <h5>Hi, {props.name} <br/>{props.surname}</h5>
                            <div className="row wighet_row">
                                <div className="account_links">
                                    <ul>
                                        <li><NavLink to="/bookings">Bookings</NavLink></li>
                                        <li><NavLink to="/myAccount">Personal info</NavLink></li>
                                        <li><NavLink className="active" to="/wishlist">Wishlist</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Sidebar */}
                    <div className="catalog_r">
                        <div className="row cat_top">
                            <h4>My Wishlist</h4>
                            <div>
                            {!u && <div className={s.modalContainer}>
                                <div className={s.modalText}>Remove from favorites?</div>
                                <span className={s.modalButton}>Ok</span>
                                <span className={s.modalButton}>Cancel</span>
                            </div>}
                            <ProductCards productCards={props.productCards}
                                          addRemoveWishlist={props.addRemoveWishlist}
                                          getProductItemView={props.getProductItemView}
                                          isAuth={props.isAuth}
                                          token={props.token}
                                          isFavoriteItem={props.isFavoriteItem}
                                          u={u}
                                          setU={setU}
                                          setQuestion={setQuestion}
                                          question={question}
                            /></div>
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
        </main>
    </div>


}
export default MyWishlist