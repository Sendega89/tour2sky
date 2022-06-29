import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";


const Rating = (props) => {

    return <div className="rating">
        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
        <i><FontAwesomeIcon icon="fa-solid fa-star" className="deactivate"/></i>
    </div>
}
export default Rating