import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import {faClockFour} from "@fortawesome/free-solid-svg-icons";
import itemImage from "../../img/p1.jpg";



const ProductCards = (props) => {

    return  props.productCards.map(card => <ProductCard key={card.id}
                                                       /*img={card.images.data[0].link}*/
                                                       name={card.name} price={card.price}
                                                       duration={card.duration}
                                                       description={card.description}
                                                       rating={card.rating}
                                                       id={card.id}
    />)
}


export const ProductCard = (props) => {

    return <div className="cat_item">
        <div className="cat_item_vn row">
            <div className="cat_item_img">
                <NavLink product="[object Object]" to="/product/1">
                    <img src={props.img != null ? props.img : itemImage} />
                </NavLink>
            </div>

            <div className="cat_item_center">
                <div className="cat_item_title row"><i>
                    <FontAwesomeIcon icon="fa-solid fa-bookmark"/></i>
                    <NavLink to="/product/1">
                        {props.name != null ? props.name :
                            <div>Tour2Sky VIP: NYC Helicopter Flight
                                and Statue of Liberty Cruise</div>}</NavLink>
                </div>
                <div className="cat_item_price">
                    <div className="item_price"><span>from</span> ${props.price != null? props.price :"420"}</div>
                    <div className="rating-container">
                        <Rating rating={props.rating}/>
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