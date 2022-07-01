import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RatingTour2Sky from "../Rating/RatingTour2Sky";
import {faClockFour} from "@fortawesome/free-solid-svg-icons";
import itemImage from "../../img/p1.jpg";
import logo from "../../../Components/Header/headerComponents/Logo";



const ProductCards = (props) => {

    return  props.productCards.data.map(card => <ProductCard key={card.id}
                                                       img={card.images.data.map(i=>i.link)}
                                                       name={card.name} price={card.price}
                                                       duration={card.duration}
                                                       description={card.description}
                                                       rating={card.rating}
                                                       id={card.id}
    />)
}


export const ProductCard = (props) => {
const getItemInfo =(itemId) => {
    console.log(itemId)
};

    return <div className="cat_item">
        <div className="cat_item_vn row">
            <div className="cat_item_img">
                <NavLink product="[object Object]" to="/product/1">
                    <img src={props.img != null || undefined ? props.img : itemImage} alt={'No image'} />
                </NavLink>
            </div>

            <div className="cat_item_center">
                <div className="cat_item_title row">
                    <i><FontAwesomeIcon icon="fa-solid fa-bookmark"/></i>
                    <NavLink to={`/product/${props.id}`}>
                        {props.name != null ? <div onClick={()=> getItemInfo(props.id)}>{props.name}</div> :
                            <div>Tour2Sky VIP: NYC Helicopter Flight
                                and Statue of Liberty Cruise</div>}</NavLink>
                </div>
                <div className="cat_item_price">
                    <div className="item_price"><span>from</span> ${props.price != null? props.price :"???"}</div>
                    <div className="rating-container">
                        <RatingTour2Sky rating={props.rating}/>
                        <div className="item_date">
                            <i><FontAwesomeIcon icon={faClockFour} /></i>
                            <span>{props.duration != null ? props.duration : "30"} minutes</span>
                        </div>
                    </div>
                </div>
                <div className="cat_item_desk">
                    {props.description !=null ? props.description :
                        "This is short tour description, can be few rows of text"}
                </div>
            </div>
            <div className="cat_item_details">
                <NavLink to={`/product/${props.id}`}>Buy</NavLink>
            </div>
        </div>
    </div>
}

export default ProductCards