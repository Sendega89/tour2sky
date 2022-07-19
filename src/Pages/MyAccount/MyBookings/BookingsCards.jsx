import {NavLink} from "react-router-dom";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BookingsCards = (props) => {

    return props.orders.map(card => <OrderCard key={card.id}
                                               img={card.service.images.data.map(img => img.link)}
                                               name={card.service.name}
                                               status={card.statusObject.name}
                                               date={card.service_date}
                                               price={card.price}
    />)
}
export default BookingsCards


const OrderCard = (props) => {

    return <div className="cat_item">
        <div className="cat_item_vn row">
            <div className="cat_item_img">
                <NavLink to="/">
                    <img src={props.img} alt={"productImage"}/></NavLink>
            </div>
            <div className="cat_item_center">
                <div className="cat_item_title row">
                    <NavLink to="/">{props.name}</NavLink>
                </div>
                <div className="cat_item_center">
                    <div>
                        {props.status}
                    </div>
                </div>
                <div className="cat_item_price row">
                    <div className="item_price">$ {props.price}</div>
                </div>
                <div className="row cat_item_date">
                    <div className="item_date">
                        <i><FontAwesomeIcon icon={"fa-solid fa-calendar"}/></i>
                        <span>{props.date}</span>
                    </div>
                    {/*<div className="item_user">
                        <i><FontAwesomeIcon icon={"fa-solid fa-user"}/></i>
                        <span>2 adults</span>
                    </div>*/}
                </div>
            </div>
        </div>
    </div>

}