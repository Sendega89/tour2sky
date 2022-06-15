import "../../App.css";
import "../../rating.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../assets/common/Cards/ProductCard";



const Product = () => {

    return <main>
    <div className="container">
        <div className="row">
            {/*breadcrumbs */}
            <div className="row breadcrumbs">
                <a href="#">Home page </a>
                <a href="#">Balloning</a>
                <span>Sierra Nevada</span>
            </div>
            {/*breadcrumbs*/}
            <article>
                <div className="product_title row">
                    <i><FontAwesomeIcon icon="fa-solid fa-bookmark" aria-hidden="true"/></i>
                    <h1>Tour2Sky VIP: NYC Helicopter Flight and Statue of Liberty Cruise</h1>
                </div>
                {/*product top row */}
                <div className="row product_top">
                    {/*product left block */}
                    <div className="col-2 product_l">
                        <div className="slider-for gallery slick-initialized slick-slider">
                            {/*<div className="slick-list draggable">
                                <div className="slick-track"
                                     style="opacity: 1; width: 1808px;">
                                    <div className="slick-slide slick-current slick-active"
                                         data-slick-index="0"
                                         aria-hidden="false"
                                         style="width: 452px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;">
                                        <div>
                                            <div style="width: 100%; display: inline-block;">
                                                <a href="/img/product.jpg" tabIndex="0">
                                                    <img src={product}/></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="slick-slide" data-slick-index="1" aria-hidden="true"
                                         style="width: 452px; position: relative; left: -452px; top: 0px; z-index: 998; opacity: 0;"
                                         tabIndex="-1">
                                        <div>
                                            <div style="width: 100%; display: inline-block;">
                                                <a href="/img/product2.jpg" tabIndex="-1">
                                                    <img src={product2}/></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slick-slide" data-slick-index="2" aria-hidden="true"
                                         style="width: 452px; position: relative; left: -904px; top: 0px; z-index: 998; opacity: 0;"
                                         tabIndex="-1">
                                        <div>
                                            <div style="width: 100%; display: inline-block;">
                                                <a href="/img/product3.jpg" tabIndex="-1">
                                                    <img src={product3}/></a>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="slick-slide" data-slick-index="3" aria-hidden="true"
                                         style="width: 452px; position: relative; left: -1356px; top: 0px; z-index: 998; opacity: 0;"
                                         tabIndex="-1">
                                        <div>
                                            <div style="width: 100%; display: inline-block;">
                                                <a href="/img/product4.jpg" tabIndex="-1"><img
                                                src={product4}/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>*/}
                        </div>
                        <div className="row slider_nav_block">
                            {/*<div className="slider-nav">
                                <div>
                                    <div className="slider_nav_block_vn"><img src={product}/></div>
                                </div>
                                <div>
                                    <div className="slider_nav_block_vn"><img src={product2}/></div>
                                </div>
                                <div>
                                    <div className="slider_nav_block_vn"><img src={product3}/></div>
                                </div>
                                <div>
                                    <div className="slider_nav_block_vn"><img src={product4}/></div>
                                </div>
                            </div>*/}
                            <div className="slider-nav slick-initialized slick-slider">
                                <div className="angle_left slick-arrow">
                                    <i><FontAwesomeIcon icon="fa-solid fa-angle-left" aria-hidden="true"/></i></div>
                                {/*<div className="slick-list draggable" style="padding: 0px;">
                                    <div className="slick-track"
                                         style="opacity: 1; width: 1524px; transform: translate3d(-381px, 0px, 0px);">
                                        <div className="slick-slide slick-cloned" data-slick-index="-4"
                                             aria-hidden="true" style="width: 127px;" tabIndex="-1">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-cloned" data-slick-index="-3"
                                             aria-hidden="true" style="width: 127px;" tabIndex="-1">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product2}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-cloned" data-slick-index="-2"
                                             aria-hidden="true" style="width: 127px;" tabIndex="-1">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product3}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-cloned slick-active" data-slick-index="-1"
                                             aria-hidden="false" style="width: 127px;" tabIndex="-1">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product4}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-current slick-active slick-center"
                                             data-slick-index="0" aria-hidden="false" style="width: 127px;">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-active" data-slick-index="1"
                                             aria-hidden="false" style="width: 127px;">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product2}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide" data-slick-index="2" aria-hidden="true"
                                             style="width: 127px;">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product3}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide" data-slick-index="3" aria-hidden="true"
                                             style="width: 127px;" tabIndex="-1">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product4}/>">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-cloned slick-center" data-slick-index="4"
                                             aria-hidden="true" style="width: 127px;" tabIndex="-1">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-cloned" data-slick-index="5"
                                             aria-hidden="true" style="width: 127px;" tabIndex="-1">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product2}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-cloned" data-slick-index="6"
                                             aria-hidden="true" style="width: 127px;" tabIndex="-1">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product3}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slick-slide slick-cloned" data-slick-index="7"
                                             aria-hidden="true" style="width: 127px;" tabIndex="-1">
                                            <div>
                                                <div style="width: 100%; display: inline-block;">
                                                    <div className="slider_nav_block_vn"><img src={product4}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>*/}
                                <div className="angle_right slick-arrow">
                                    <i><FontAwesomeIcon icon="fa-solid fa-angle-right" aria-hidden="true"/></i></div>
                            </div>
                        </div>

                    </div>
                    {/*product left block*/}
                    {/*product right block*/}
                    <div className="col-2 product_r">
                        <div className="product_r_vn">
                            <div className="row product_r_top">
                                <div className="row">
                                    <div className="time">
                                        <i><FontAwesomeIcon icon="fa-solid fa-clock" aria-hidden="true"/></i>
                                        <span>4h of flight</span>
                                    </div>
                                    <div className="rating">
                                        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
                                        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
                                        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
                                        <i><FontAwesomeIcon icon="fa-solid fa-star"/></i>
                                        <i><FontAwesomeIcon icon="fa-solid fa-star" className="deactivate"/></i>

                                    </div>
                                </div>
                                <div className="row options">
                                    <div className="row options_item">
                                        <span className="sel_icon">
                                            <i><FontAwesomeIcon icon="fa-solid fa-calendar" aria-hidden="true"/></i>
                                        </span>
                                        <input type="text" id="datepicker" placeholder="Select date"/>
                                    </div>
                                    <div className="row options_item">
                                        <div className="row options_select">
                                            <span className="sel_icon">
                                                <i><FontAwesomeIcon icon="fa-solid fa-user" aria-hidden="true"/></i>
                                            </span>
                                            <select id="ui-id-1">
                                                <option>2 adults</option>
                                                <option>3 adults</option>
                                                <option>4 adults</option>
                                                <option>5 adults</option>
                                            </select>
                                            <span tabIndex="0" id="ui-id-1-button" role="combobox" aria-expanded="false"
                                                  aria-autocomplete="list" aria-owns="ui-id-1-menu" aria-haspopup="true"
                                                  className="ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all"
                                                  aria-activedescendant="ui-id-8" aria-labelledby="ui-id-8"
                                                  aria-disabled="false">
                                                <span className="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s">
                                                </span>
                                                <span className="ui-selectmenu-text">2 adults</span></span>
                                        </div>

                                    </div>
                                    <div className="row price">$ 420</div>
                                </div>
                                <div className="add">
                                    <a href="" className="btn">Book tour</a>
                                </div>
                            </div>
                            <div className="row pick">
                        <div className="pick_l">
                            <strong>Pick up location</strong>
                            We are located at the Aerodromo La Juliana, Ctra. A474
                        </div>
                        <div className="pick_r">
                            <a href="#" target="_blank">Watch on google maps</a>
                        </div>
                        </div>
                    </div>

                    </div>
                    {/*product right block */}
                </div>
                {/*product top row*/}
                {/* accordion*/}
                <div className="row accordion">

                   {/*<ProductAccordion/>*/}

                </div>



                {/*accordion*/}

            </article>

            {/*Popular helicopter tours start */}
            <div className="catalog_item row">
                <div className="container">
                    <h3>Popular helicopter tours</h3>
                    <div className="row row-15">
                        {/*cat item*/}
                        <ProductCard />
                        <ProductCard/>
                        {/*cat item */}
                    </div>
                </div>

            </div>
            {/*Popular helicopter tours end */}
            <div className="container">
                <div className="message message--reviews">
                    <div className="message__information">
                        <span className="message__name"> Tour reviews (9)</span>
                        <div className="message__rating-block">
                            <div className="rating-stars ">
                                <ul id="stars">
                                    <li className="star" title="Poor" data-value="1">
                                        <i><FontAwesomeIcon icon={faStar}/></i></li>
                                    <li className="star" title="Fair" data-value="2">
                                        <i><FontAwesomeIcon icon={faStar}/></i></li>
                                    <li className="star" title="Good" data-value="3">
                                        <i><FontAwesomeIcon icon="fa fa-star fa-fw"/></i></li>
                                    <li className="star" title="Excellent" data-value="4">
                                        <i><FontAwesomeIcon icon="fa-solid fa-star fa-fw"/></i></li>
                                    <li className="star" title="WOW!!!" data-value="5">
                                        <i><FontAwesomeIcon icon="fa fa-star fa-fw"/></i></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="message__text">Hi, John! Could you please write a short review of this tour? It could
                        help us work better for our clients.</p>
                    <button className="message__button btn"> Write a review</button>
                </div>
                <div className="message">
                    <div className="message__information"><span className="message__name"> Benjamin Franklin</span><span
                        className="message__date"> 12.08.2019</span>
                        <div className="message__rating-block">
                            <div className="rating-stars ">
                                <ul id="stars">
                                    <li className="star" title="Poor" data-value="1">
                                        <i><FontAwesomeIcon icon={faStar}/></i></li>
                                    <li className="star" title="Fair" data-value="2">
                                        <i><FontAwesomeIcon icon={faStar}/></i></li>
                                    <li className="star" title="Good" data-value="3">
                                        <i><FontAwesomeIcon icon="fa fa-star fa-fw"/></i></li>
                                    <li className="star" title="Excellent" data-value="4">
                                        <i><FontAwesomeIcon icon="fa-solid fa-star fa-fw"/></i></li>
                                    <li className="star" title="WOW!!!" data-value="5">
                                        <i><FontAwesomeIcon icon="fa fa-star fa-fw"/></i></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="message__text">Join a pilot on a unique flight and share the cost with them, a nice
                        way to discover the city skyline aboard a private plane.</p></div>
                <div className="message">
                    <div className="message__information"><span className="message__name"> Benjamin </span><span
                        className="message__date"> 12.08.2019</span>
                        <div className="message__rating-block">
                            <div className="rating-stars ">
                                <ul id="stars">
                                    <li className="star" title="Poor" data-value="1">
                                        <i><FontAwesomeIcon icon={faStar} className="fa-fw"/></i></li>
                                    <li className="star" title="Fair" data-value="2">
                                        <i><FontAwesomeIcon icon={faStar}/></i></li>
                                    <li className="star" title="Good" data-value="3">
                                        <i><FontAwesomeIcon icon="fa fa-star fa-fw"/></i></li>
                                    <li className="star" title="Excellent" data-value="4">
                                        <i><FontAwesomeIcon icon="fa-solid fa-star fa-fw"/></i></li>
                                    <li className="star" title="WOW!!!" data-value="5">
                                        <i><FontAwesomeIcon icon="fa fa-star fa-fw"/></i></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="message__text">a nice way to discover the city skyline aboard a private plane.</p>
                </div>
                <div className="message">
                    <div className="message__information"><span className="message__name"> Max Zel</span><span
                        className="message__date"> 12.08.2019</span>
                        <div className="message__rating-block">
                            <div className="rating-stars ">
                                <ul id="stars">
                                    <li className="star hover" title="Poor" data-value="1">
                                        <i><FontAwesomeIcon icon={faStar} className="fa-fw"/></i></li>
                                    <li className="star hover" title="Fair" data-value="2">
                                        <i><FontAwesomeIcon icon={faStar}/></i></li>
                                    <li className="star hover" title="Good" data-value="3">
                                        <i><FontAwesomeIcon icon="fa fa-star fa-fw"/></i></li>
                                    <li className="star hover" title="Excellent" data-value="4">
                                        <i><FontAwesomeIcon icon="fa-solid fa-star fa-fw"/></i></li>
                                    <li className="star hover" title="WOW!!!" data-value="5">
                                        <i><FontAwesomeIcon icon="fa fa-star fa-fw"/></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="message__text">Nice</p></div>
                <div className="message">
                    <div className="message__information"><span className="message__name"> Benjamin Franklin</span><span
                        className="message__date"> 12.08.2019</span>
                        <div className="message__rating-block">
                            <div className="rating-stars ">
                                <ul id="stars">
                                    <li className="star" title="Poor" data-value="1">
                                        <i><FontAwesomeIcon icon={faStar} className="fa-fw"/></i></li>
                                    <li className="star" title="Fair" data-value="2">
                                        <i><FontAwesomeIcon icon={faStar}/></i></li>
                                    <li className="star" title="Good" data-value="3">
                                        <i><FontAwesomeIcon icon="fa fa-star fa-fw"/></i></li>
                                    <li className="star" title="Excellent" data-value="4">
                                        <i><FontAwesomeIcon icon="fa-solid fa-star fa-fw"/></i></li>
                                    <li className="star" title="WOW!!!" data-value="5">
                                        <i><FontAwesomeIcon icon="fa fa-star fa-fw"/></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="message__text">Join a pilot on a unique flight and share the cost with them, a nice
                        way to discover the city skyline aboard a private plane.</p></div>
            </div>
            {/*Other popular cities*/}
            <ul className="pagination">
                <li className="previous disabled"><a className=" " tabIndex="-1" role="button" aria-disabled="true"
                                                     aria-label="Previous page" rel="prev">&lt;</a></li>
                <li className="page-item disabled"><a rel="canonical" role="button" tabIndex="-1"
                                                      aria-label="Page 1 is your current page" aria-current="page">1</a>
                </li>
                <li className="page-item"><a rel="next" role="button" tabIndex="0" aria-label="Page 2">2</a></li>
                <li className="page-item"><a role="button" tabIndex="0" aria-label="Page 3">3</a></li>
                <li className="next"><a className="" tabIndex="0" role="button" aria-disabled="false"
                                        aria-label="Next page" rel="next">&gt;</a></li>
            </ul>
            {/*Other popular cities*/}
        </div>

    </div>
</main>
}
export default Product