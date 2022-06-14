import itemImage from "../../img/p1.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClockFour} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import '../../../App.css';


const Card = () => {
    return <div className="cat_item">
        <div className="cat_item_vn row">
            <div className="cat_item_img"><a product="[object Object]" href="/product/1"><img
                src={itemImage}/></a></div>
            <div className="cat_item_center">
                <div className="cat_item_title row"><i><FontAwesomeIcon icon="fa-solid fa-bookmark"
                                                                        aria-hidden="true"></FontAwesomeIcon></i><a
                    product="[object Object]" href="/product/1">Tour2Sky VIP: NYC Helicopter Flight
                    and Statue of Liberty Cruise</a></div>
                <div className="cat_item_price">
                    <div className="item_price"><span>from</span> $ 420</div>
                    <div className="rating-container">
                        <div className="rating"><i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                            <i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                            <i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                            <i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                            <i><FontAwesomeIcon icon="fa-solid fa-star deactivate"></FontAwesomeIcon></i>
                        </div>
                        <div className="item_date">
                            <i><FontAwesomeIcon icon={faClockFour} /></i>
                            <span>30 minutes</span>
                        </div>
                    </div>
                </div>
                <div className="cat_item_desk">This is short tour description, can be few rows of
                    text
                </div>
            </div>
            <div className="cat_item_details"><a href="/product/1">Buy</a></div>
        </div>
    </div>
}
export default Card