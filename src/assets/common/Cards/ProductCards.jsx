import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RatingTour2Sky from "../Rating/RatingTour2Sky";
import {faClockFour} from "@fortawesome/free-solid-svg-icons";
import itemImage from "../../img/p1.jpg";
import {Checkbox} from "@mui/material";
import s from "./ProductCards.module.css";

const ProductCards = (props) => {

    return props.productCards.map(card => <ProductCard key={card.id}
                                                       img={card.images.data.map(i => i.link)}
                                                       name={card.name} price={card.price}
                                                       duration={card.duration}
                                                       description={card.description}
                                                       rating={card.rating}
                                                       id={card.id}
                                                       getProductItemView={props.getProductItemView}
                                                       isAuth={props.isAuth}
                                                       addRemoveWishlist={props.addRemoveWishlist}
                                                       token={props.token}
                                                       isFavoriteItem={props.isFavoriteItem}
                                                       u={props.u}
                                                       setU={props.setU}

    />)
}
export const ProductCard = (props) => {

    const [checked, setChecked] = useState(props.u);
    const handleChange = (event) => {
        if (props.isAuth) {
            let addRemoveHandler = event.target.checked;
            setChecked(event.target.checked);
            props.addRemoveWishlist(props.id, addRemoveHandler, props.token);
            props.setU(!props.u)
        }
        /*setChecked(!checked)*/
    };

    return <div className="cat_item">
        <div className="cat_item_vn row">
            <div className="cat_item_img">
                <NavLink product="[object Object]" to={`/product/${props.id}`}>
                    <img src={props.img[0] != null ? props.img[1] : itemImage}
                         alt={'No image'}/>
                </NavLink>
            </div>

            <div className="cat_item_center">
                <div className="cat_item_title row">
                    <Checkbox  className={s.bookmark} checked={checked}
                                onChange={handleChange}
                                inputProps={{'aria-label': 'controlled'}}
                                checkedIcon={<i><FontAwesomeIcon icon="fa-solid fa-bookmark"/></i>}
                                icon={<i><FontAwesomeIcon icon="fa-solid fa-bookmark" style={{color: "#B6C2CC"}}/></i>}/>


                    <NavLink to={`/product/${props.id}`}>
                        {props.name != null ? <div>{props.name}</div> :
                            <div>Tour2Sky VIP: NYC Helicopter Flight
                                and Statue of Liberty Cruise</div>}</NavLink>
                </div>
                <div className="cat_item_price">
                    <div className="item_price"><span>from</span> ${props.price != null ? props.price : "???"}</div>
                    <div className="rating-container">
                        <RatingTour2Sky rating={props.rating}/>
                        <div className="item_date">
                            <i><FontAwesomeIcon icon={faClockFour}/></i>
                            <span>{props.duration != null ? props.duration : "30"} minutes</span>
                        </div>
                    </div>
                </div>
                <div className="cat_item_desk">
                    {props.description != null ? props.description :
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