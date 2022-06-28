import React from "react";
import loadingImage from "../img/Loading_2.gif";
import s from "./Preloader.module.css"
const Preloader =() => {
    return <div className={s.preloadContainer}>
        <img src={loadingImage} alt="loading"/>
    </div>
}
export default Preloader