import React, {useRef, useState} from 'react';
import Slider from 'react-slick';
import product from "../../assets/img/product.jpg";
import product2 from "../../assets/img/product2.jpg";
import product3 from "../../assets/img/product3.jpg";
import product4 from "../../assets/img/product4.jpg";
import "./slickStyle.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function SlickSlider () {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
const sliderRef = useRef()

    return (
        <div>
            <Slider asNavFor={nav2} arrows={false}  ref={(slider1) => setNav1(slider1)} >
                <div className={"slickSlide"}>
                    <a href={product}><img src={product}/></a>
                </div>
                <div>
                    <a href={product2}><img src={product2}/></a>
                </div>
                <div>
                    <a href={product3}><img src={product3}/></a>
                </div>
                <div>
                    <a href={product4}><img src={product4}/></a>
                </div>

            </Slider>
<div className="slideNavBlock">
            <div className="slickArrow slickLeft" onClick={()=>sliderRef.current.slickPrev()} >
                <FontAwesomeIcon icon="fa-solid fa-chevron-left"/>
            </div>
            <Slider  arrows={false} ref={sliderRef}
                asNavFor={nav1}
                /*ref={(slider2) => setNav2(slider2)}*/
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true} className="slideNavCarousel">
                                        <div>
                                            <a href="#"><img src={product}/></a>
                                        </div>
                                        <div>
                                            <a href="#"><img src={product2}/></a>
                                        </div>
                                        <div>
                                            <a href="#"><img src={product3}/></a>
                                        </div>
                                        <div>
                                            <a href="#"><img src={product4}/></a>
                                        </div>
            </Slider>
    <div className="slickArrow slickRight" onClick={()=>sliderRef.current.slickNext()}>
            <FontAwesomeIcon icon="fa-solid fa-chevron-right"/>
        </div></div>
        </div>
    );
}