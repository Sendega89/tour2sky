import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {Rating} from "@mui/material";


const RatingTour2Sky = (props) => {
    return    <div className="rating">
        <Rating size={'small'}
                readOnly
                defaultValue={2.5}
                value={props.rating}
                precision={0.2}
                icon={<i><FontAwesomeIcon icon="fa-solid fa-star"/></i>}
                emptyIcon={<i><FontAwesomeIcon icon="fa-solid fa-star" className="deactivate"/></i>}/>

    </div>
}
export default RatingTour2Sky