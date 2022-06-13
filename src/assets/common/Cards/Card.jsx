import itemImage from "../../img/p1.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


const Card = () => {
    return <div className="cat_item">
        <div className="cat_item_vn row">
            <div className="cat_item_img"><a href="#"><img src={itemImage} /></a></div>
            <div className="cat_item_center">
                <div className="cat_item_title row">
                    <i><FontAwesomeIcon icon="fa-solid fa-bookmark" aria-hidden="true"></FontAwesomeIcon></i>
                    <a href="#">Tour2Sky VIP: NYC Helicopter Flight and Statue of Liberty Cruise</a>
                </div>
                <div className="cat_item_price row">
                    <div className="item_price">$ 420</div>
                    <div className="rating">
                        <i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                        <i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                        <i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                        <i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                        <i><FontAwesomeIcon icon="fa-solid fa-star deactivate"></FontAwesomeIcon></i>
                    </div>
                </div>
                <div className="cat_item_desk">
                    This is short tour description, can be few rows of text
                </div>
            </div>
            <div className="cat_item_details">
                <a href="#">Buy</a>
            </div>
        </div>
    </div>
}
export default Card