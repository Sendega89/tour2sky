import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";


const Rating = () => {
    return <div className="rating">
        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
        <i><FontAwesomeIcon icon="fa-solid fa-star" className="deactivate"/></i>
    </div>
}
export default Rating