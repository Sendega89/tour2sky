import React from "react";
import "../../App.css";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../assets/common/Cards/ProductCard";
library.add(fas);



const Catalog = (props) => {


    return <div className="catalog">
        <div className="header_title">
            <div className="container">
                <div className="row">
                    <h1>Sierra Nevada Helicopter tours</h1>
                    <p>The best helicopter adventures in USA, Sierra Nevada. You will be as excited as it possible.
                        Professional pilots, experianced guides, best helicopter views ever. </p>
                </div>
            </div>
        </div>
        <div className="catalog_item row">
            <div className="container">
                {/*breadcrumbs*/}
                <div className="row breadcrumbs">
                    <a className="" href="/">Home</a>
                    <span>Catalog</span></div>
                {/* breadcrumbs*/}
                {/*Sidebar*/}
                <div className="sidebar">
                    {/*<SearchFilter/>*/}
                    <div className="popup-credit">
                        <div className="credit_block">
                            <a className="cancelComment" title="">
                                <FontAwesomeIcon icon="fa-solid fa-times" aria-hidden="true"/></a>
                            <div className="row wighet">
                                <h4>Filter by price</h4>
                                <div className="row wighet_row">
                                    <div id="slider-range"
                                         className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                        <div className="ui-slider-range ui-corner-all ui-widget-header"
                                             style={{left: "27%", width: "30.4%"}}>
                                        </div>
                                        <span tabIndex="0"
                                              className="ui-slider-handle ui-corner-all ui-state-default"
                                              style={{left: "27%"}}>

                                    </span>
                                        <span tabIndex="0"
                                              className="ui-slider-handle ui-corner-all ui-state-default"
                                              style={{left: "57.4%"}}>
                                    </span>
                                    </div>
                                    <div className="row price_slider">
                                        <input type="text" id="amount" readOnly=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="row wighet"><h4>Flight lenth</h4>
                                <div className="row wighet_row">
                                    <div id="slider_lenth"
                                         className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                        <div className="ui-slider-range ui-corner-all ui-widget-header"
                                             style={{left: "25%", width: "50%}"}}>
                                        </div>
                                        <span tabIndex="0"
                                              className="ui-slider-handle ui-corner-all ui-state-default"
                                              style={{left: "25%"}}>
                                    </span>
                                        <span tabIndex="0"
                                              className="ui-slider-handle ui-corner-all ui-state-default"
                                              style={{left: "75%"}}/>
                                    </div>
                                    <div className="row price_slider">
                                        <input type="text" id="amount_lenth" readOnly=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="row wighet">
                                <h4>Filter by Rating</h4>
                                <div className="row wighet_row">
                                    <div className="row checkbox_row">
                                        <div className="row checkbox_item">
                                            <label className="custom-big-checkbox">
                                                <input type="checkbox"
                                                       name="1" id="otkritka1"
                                                       className="align-self-center"/>
                                                <span className="custom-big-checkbox__checkbox">
                                        </span>
                                            </label>
                                            <span className="labeltext">5 star</span></div>
                                        <div className="row checkbox_item">
                                            <label className="custom-big-checkbox">
                                                <input type="checkbox" name="2" id="otkritka2"
                                                       className="align-self-center"/>
                                                <span className="custom-big-checkbox__checkbox">
                                        </span>
                                            </label>
                                            <span className="labeltext">4 star</span>
                                        </div>
                                        <div className="row checkbox_item"><label className="custom-big-checkbox"><input
                                            type="checkbox" name="3" id="otkritka3" className="align-self-center"/>
                                            <span className="custom-big-checkbox__checkbox">

                                            </span>
                                        </label>
                                            <span className="labeltext">3 star</span>
                                        </div>
                                        <div className="row checkbox_item">
                                            <label className="custom-big-checkbox">
                                            <input type="checkbox" name="4" id="otkritka4" className="align-self-center"/>
                                            <span className="custom-big-checkbox__checkbox">

                                            </span>
                                        </label>
                                            <span
                                                className="labeltext">2 star</span>
                                        </div>
                                        <div className="row checkbox_item"><label className="custom-big-checkbox">
                                            <input
                                                type="checkbox" name="5" id="otkritka5" className="align-self-center"/>
                                            <span
                                                className="custom-big-checkbox__checkbox">

                                        </span></label>
                                            <span className="labeltext">1 star</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row wighet"><h4>Top cities</h4>
                                <div className="row wighet_row">
                                    <div className="filter_links"><a href="#">Accra</a><a href="#">Addis Ababa</a><a
                                        href="#">Boston</a><a href="#">Cali</a><a href="#">Dallas</a><a
                                        href="#">Hangzhou</a><a href="#">Kuala Lumpur</a><a href="#">Mumbai</a><a
                                        href="#">San Jose</a><a href="#">Taipei</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<SliderRangeRC/>*/}
                </div>

                <div className="catalog_r">
                    <div className="row cat_top"><h4>2 helicopter tours found</h4>
                        <div className="short"><select>
                            <option value="by_price">Sort by price</option>
                            <option value="by_rating">Sort by rating</option>
                            <option value="by_popular">Sort by popular</option>
                            <option value="by_name">Sort by name</option>
                        </select></div>
                    </div>
                    <div className="row row-15">
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                    <div className="row">
                        <ul className="pagination">
                            <li className="previous disabled"><a className=" " tabIndex="-1" role="button"
                                                                 aria-disabled="true" aria-label="Previous page"
                                                                 rel="prev">&lt;</a></li>
                            <li className="page-item disabled"><a rel="canonical" role="button" tabIndex="-1"
                                                                  aria-label="Page 1 is your current page"
                                                                  aria-current="page">1</a></li>
                            <li className="next disabled"><a className=" " tabIndex="-1" role="button"
                                                             aria-disabled="true" aria-label="Next page"
                                                             rel="next">&gt;</a></li>
                        </ul>
                    </div>
                    <article className="row cat_text"><p>Tourism means people traveling for fun. It includes activities
                        such as sightseeing and camping. People who travel for fun are called "tourists". Places where
                        many tourists stay are called "resorts". Places that people go to for tourism are called tourist
                        destinations.</p><p>Tourism can bring damage to the local area, and/or the tourists. Litter,
                        scuba-diving and deforestation are problems for popular places such as St. Lucia, Hawaii and
                        others. Scuba-diving can damage coral reefs which are home to hundreds of species of sea
                        animals. Tourism means people traveling for fun. It includes activities such as sightseeing and
                        camping. People who travel for fun are called "tourists". </p></article>
                </div>

            </div>
        </div>
    </div>

}
export default Catalog