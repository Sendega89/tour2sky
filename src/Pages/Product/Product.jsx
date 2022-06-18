import "../../App.css";
import "../../rating.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../assets/common/Cards/ProductCard";
import Rating from "../../assets/common/Rating/Rating";
import ProductAccordion from "../../assets/common/Accordion/ProductAccordion";
import SlickSlider from "./SlickSlider";
import {TextField} from "@mui/material";

const Product = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
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
                        <div className="row product_l">
                          <SlickSlider />

                        </div>
                        {/*product left block*/}

                        {/*product right block*/}
                        <div className="row product_r">
                            <div className="product_r_vn">
                                <div className="row product_r_top">
                                    <div className="row">
                                        <div className="time">
                                            <i><FontAwesomeIcon icon="fa-solid fa-clock" aria-hidden="true"/></i>
                                            <span>4h of flight</span>
                                        </div>
                                        <Rating/>
                                    </div>
                                    <div className="row options">
                                        <div className="row options_item">
                                        {/*<span className="sel_icon">
                                            <i><FontAwesomeIcon icon="fa-solid fa-calendar" aria-hidden="true"/></i>
                                        </span>*/}
                                            <TextField sx={{borderRadius: "26px"}}
                                                id="date"
                                                label="Select date"
                                                type="date"
                                                defaultValue="2022-05-24"
                                                className={"textFieldSelectDate"}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            {/*<input type="date" id="datepicker" placeholder="Select date"/>*/}
                                        </div>
                                        <div className="row options_item">
                                            <div className="options_select row">
                                            <span className="sel_icon">
                                                <i><FontAwesomeIcon icon="fa-solid fa-user" aria-hidden="true"/></i>
                                            </span>
                                                <select id="ui-id-1">
                                                    <option>2 adults</option>
                                                    <option>3 adults</option>
                                                    <option>4 adults</option>
                                                    <option>5 adults</option>
                                                </select>
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
                        <ProductAccordion/>
                    </div>
                    {/*accordion*/}

                </article>

                {/*Popular helicopter tours start */}
                <div className="catalog_item row">
                    <div className="container">
                        <h3>Popular helicopter tours</h3>
                        <div className="row row-15">
                            {/*cat item*/}
                            <ProductCard/>
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
                                    {/*<ul id="stars">
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

                                </ul>*/}
                                    <Rating/>
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
                <ul className="pagination">
                    <li className="previous disabled"><a className=" " tabIndex="-1" role="button" aria-disabled="true"
                                                         aria-label="Previous page" rel="prev">&lt;</a></li>
                    <li className="page-item disabled"><a rel="canonical" role="button" tabIndex="-1"
                                                          aria-label="Page 1 is your current page"
                                                          aria-current="page">1</a>
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