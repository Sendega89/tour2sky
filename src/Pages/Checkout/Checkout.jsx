import React from "react";
import s from "./Checkout.module.css";
import '../../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Rating from "../../assets/common/Rating/Rating";



const Checkout = () => {
    return <main>
    <div className={s.Checkout_wrapper}>
        <div className={s.Checkout_left}>
            <div className={s.Checkout_item}><h2>Secure Checkout</h2>
                <p>Checkout securely — it takes only a few minutes</p>

                <div className={s.Checkout_product}>
                    <div className={s.Checkout_product__image}><img src=""/></div>
                    <div className={s.Checkout_product__right}>

                    <span><i><FontAwesomeIcon icon="fa-solid fa-calendar" aria-hidden="true"/></i>12.20.2019</span>
                        <h3>Sierra Nevada Helicopter day tour</h3>
                        <Rating/>
                </div>
            </div>
        </div>
        <div className={s.Checkout_right}>

        </div>
    </div>
    </div>

</main>
}
export default Checkout