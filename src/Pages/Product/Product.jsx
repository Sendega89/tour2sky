import "../../App.css";
import "../../rating.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import RatingTour2Sky from "../../assets/common/Rating/RatingTour2Sky";
import ProductAccordion from "../../assets/common/Accordion/ProductAccordion";
import SlickSlider from "./SlickSlider";
import Paginator from "../../assets/common/Pagination/Paginator";
import { NavLink} from "react-router-dom";
import ProductCards from "../../assets/common/Cards/ProductCards";




const Product = (props) => {

    return <main>
        <div className="container">
            <div className="row">
                {/*breadcrumbs */}
                <div className="row breadcrumbs">
                    <NavLink to="#">Home page </NavLink>
                    <NavLink to="#">Balloning</NavLink>
                    <span>{props.productItemInfo.name}</span>
                </div>
                {/*breadcrumbs*/}
                <article>
                    <div className="product_title row">
                        <i><FontAwesomeIcon icon="fa-solid fa-bookmark"/></i>
                        <h1>{props.productItemInfo.name}</h1>
                    </div>
                    {/*product top row */}
                    <div className="row product_top">
                        {/*product left block */}
                        <div className="col-2 product_l">
                          <SlickSlider />
                        </div>
                        {/*product left block*/}

                        {/*product right block*/}
                        <div className="col-2 product_r">
                            <div className="product_r_vn">
                                <div className="row product_r_top">
                                    <div className="row">
                                        <div className="time">
                                            <i><FontAwesomeIcon icon="fa-solid fa-clock" aria-hidden="true"/></i>
                                            <span>{props.productItemInfo.duration} min</span>
                                        </div>
                                        <RatingTour2Sky rating={props.productItemInfo.rating}/>
                                    </div>
                                    <div className="row options">
                                        <div className="row options_item">
                                        <span className="sel_icon">
                                            <i><FontAwesomeIcon icon="fa-solid fa-calendar" aria-hidden="true"/></i>
                                        </span>
                                            <input type="text" id="datepicker" placeholder="Select date" className="hasDatepicker"/>
                                            {/*<TextField sx={{borderRadius: "26px"}}
                                                id="date"
                                                label="Select date"
                                                type="date"
                                                defaultValue="2022-05-24"
                                                className={"textFieldSelectDate"}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />*/}
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
                                                {/*  <span tabIndex="0" id="ui-id-1-button" role="combobox"
                                                      aria-expanded="false" aria-autocomplete="list"
                                                      aria-owns="ui-id-1-menu" aria-haspopup={true}
                                                      className="ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all"
                                                      aria-activedescendant="ui-id-8" aria-labelledby="ui-id-8"
                                                      aria-disabled={false}>
                                                  <span className="ui-selectmenu-icon ui-icon ui-icon-triangle-1-s"></span>
                                                </span>*/}
                                              </div>
                                        </div>
                                        <div className="row price">
                                            ${props.productItemInfo.price}
                                        </div>
                                    </div>
                                    <div className="add">
                                        <NavLink to="" className="btn">Book tour</NavLink>
                                    </div>
                                </div>
                                <div className="row pick">
                                    <div className="pick_l">
                                        <strong>Pick up location</strong>
                                        We are located at the {props.productItemInfo.city.name}
                                    </div>
                                    <div className="pick_r">
                                        <NavLink to={props.productItemInfo.city.link} target="_blank">Watch on google maps</NavLink>
                                    </div>
                                </div>
                            </div>
                    </div>
                        {/*product right block */}
                    </div>
                    {/*product top row*/}
                    {/* accordion*/}
                        <ProductAccordion/>
                    {/*accordion*/}

                </article>

                {/*Popular helicopter tours start */}
                <div className="catalog_item row">
                    <div className="container">
                        <h3>Popular helicopter tours</h3>
                        <div className="row row-15">
                            {/*cat item*/}
                            <ProductCards productCards={props.productCards.data}
                                          addRemoveWishlist={props.addRemoveWishlist}
                                          getProductItemView={props.getProductItemView}
                                          isAuth={props.isAuth}
                                          token={props.token}/>
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
                                    <RatingTour2Sky/>
                                </div>
                            </div>
                        </div>
                        <p className="message__text">Hi, John! Could you please write a short review of this tour? It
                            could
                            help us work better for our clients.</p>
                        <button className="message__button btn"> Write a review</button>
                    </div>
                    <div className="message">
                        <div className="message__information"><span
                            className="message__name"> Benjamin Franklin</span><span
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
                        <p className="message__text">Join a pilot on a unique flight and share the cost with them, a
                            nice
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
                        <div className="message__information"><span
                            className="message__name"> Benjamin Franklin</span><span
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
                        <p className="message__text">Join a pilot on a unique flight and share the cost with them, a
                            nice
                            way to discover the city skyline aboard a private plane.</p></div>
                </div>
                {/*Other popular cities*/}
                <Paginator totalUsersCount={2}
                           pageSize={1}
                           currentPage={1}/>
            </div>

        </div>
    </main>
}
export default Product