import React from "react";
import "../../App.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import itemImage from "../../assets/img/p1.jpg";
import Card from "../../assets/common/Cards/Card";

library.add(fab,fas);

const Catalog = (props) => {

    return <div className="balloningWrapper">
        <div className="catalog">
            <div className="row header_title">
                <h1>Sierra Nevada Helicopter tours</h1>
                <p>The best helicopter adventures in USA, Sierra Nevada. You will be as excited as it possible. Professional pilots, experianced guides, best helicopter views ever. </p>
            </div>
        </div>
    <main>

         {/*catalog start*/}
        <div className="catalog_item row">
            <div className="container">
                {/* breadcrumbs */}
                <div className="row breadcrumbs">
                    <a href="/">Home page</a>
                    <span>Catalog</span>
                </div>


                {/*<nav aria-label="breadcrumb">
                    <ol className="breadcrumbs">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Catalog</li>
                    </ol>
                </nav>*/}


                 {/*breadcrumbs

                 catalog row */}
                <div className="row catalog_row">
                     {/*Sidebar*/}
                    <div className="sidebar">

                        <a className="pp-credit-block-button" href="#" onclick="return false">
                            <svg className="button-icon fill-secondary" width="17" height="17" aria-hidden="true" role="img" viewBox="0 0 24 24"><path d="M9.6 5.2c-.4-1.3-1.7-2-3-1.6-.8.2-1.5.9-1.7 1.6H3v1.5h1.9C5.3 8.1 6.7 8.8 8 8.4c.8-.2 1.4-.9 1.7-1.7H21V5.2H9.6zM12 15.5c-1.1 0-2 .7-2.4 1.8H3v1.5h6.7c.4 1.3 1.8 2.1 3.1 1.7.8-.2 1.4-.9 1.7-1.7H21v-1.5h-6.6c-.3-1.1-1.3-1.8-2.4-1.8zM16.8 9.5c-1.1 0-2 .7-2.4 1.8H3v1.5h11.4c.4 1.3 1.8 2.1 3.1 1.7.8-.2 1.4-.9 1.7-1.7H21v-1.5h-1.9c-.3-1.1-1.3-1.8-2.3-1.8z"></path></svg>
                            Filter</a>
                        <div className="popup-credit">
                            <div className="credit_block">
                                <a className="cancelComment" title=""><i><FontAwesomeIcon icon="fa-solid fa-times" aria-hidden="true"></FontAwesomeIcon></i></a>

                                {/* price slider */}
                                <div className="row wighet">
                                    <h4>Filter by price</h4>
                                    <div className="row wighet_row">
                                        <div id="slider-range"></div>
                                        <div className="row price_slider">
                                            <i><FontAwesomeIcon><input type="text" id="amount" readonly /></FontAwesomeIcon></i>
                                        </div>
                                    </div>
                                </div>
                               {/*  price slider

                                 lenth slider */}
                                <div className="row wighet">
                                    <h4>Flight lenth</h4>
                                    <div className="row wighet_row">
                                        <div id="slider_lenth"></div>
                                        <div className="row price_slider">
                                            <i><FontAwesomeIcon><input type="text" id="amount_lenth" readonly /></FontAwesomeIcon></i>
                                        </div>
                                    </div>
                                </div>
                                {/* lenth slider

                                 Rating */}
                                <div className="row wighet">
                                    <h4>Filter by Rating</h4>
                                    <div className="row wighet_row">

                                        <div className="row checkbox_row">
                                            <div className="row checkbox_item">
                                                <label className="custom-big-checkbox">
                                                    <i><FontAwesomeIcon><input type="checkbox" name="1" id="otkritka1" className="align-self-center"/></FontAwesomeIcon></i>
                                                        <span className="custom-big-checkbox__checkbox"></span>
                                                </label>
                                                <span className="labeltext">5 star</span>
                                            </div>
                                            <div className="row checkbox_item">
                                                <label className="custom-big-checkbox">
                                                    <i><FontAwesomeIcon><input type="checkbox" name="2" id="otkritka2" className="align-self-center"/></FontAwesomeIcon></i>
                                                        <span className="custom-big-checkbox__checkbox"></span>
                                                </label>
                                                <span className="labeltext">4 star</span>
                                            </div>
                                            <div className="row checkbox_item">
                                                <label className="custom-big-checkbox">
                                                    <i><FontAwesomeIcon><input type="checkbox" name="3" id="otkritka3" className="align-self-center"/></FontAwesomeIcon></i>
                                                        <span className="custom-big-checkbox__checkbox"></span>
                                                </label>
                                                <span className="labeltext">3 star</span>
                                            </div>
                                            <div className="row checkbox_item">
                                                <label className="custom-big-checkbox">
                                                    <i><FontAwesomeIcon><input type="checkbox" name="4" id="otkritka4" className="align-self-center"/></FontAwesomeIcon></i>
                                                        <span className="custom-big-checkbox__checkbox"></span>
                                                </label>
                                                <span className="labeltext">2 star</span>
                                            </div>

                                            <div className="row checkbox_item">
                                                <label className="custom-big-checkbox">
                                                    <i><FontAwesomeIcon><input type="checkbox" name="5" id="otkritka5" className="align-self-center"/></FontAwesomeIcon></i>
                                                        <span className="custom-big-checkbox__checkbox"></span>
                                                </label>
                                                <span className="labeltext">1 star</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 {/*Rating */}

                               {/*  lenth slider*/}
                                <div className="row wighet">
                                    <h4>Top cities</h4>
                                    <div className="row wighet_row">
                                        <div className="filter_links">
                                            <a href="#">Accra</a>
                                            <a href="#">Addis Ababa</a>
                                            <a href="#">Boston</a>
                                            <a href="#">Cali</a>
                                            <a href="#">Dallas</a>
                                            <a href="#">Hangzhou</a>
                                            <a href="#">Kuala Lumpur</a>
                                            <a href="#">Mumbai</a>
                                            <a href="#">San Jose</a>
                                            <a href="#">Taipei</a>
                                        </div>
                                    </div>
                                </div>
                                 {/*length slider */}
                            </div>
                        </div>
                    </div>
                 {/*

                     cat right */}
                    <div className="catalog_r">

                        <div className="row cat_top">
                            <h4>1 helicopter tours found</h4>
                            <div className="short">
                                <select>
                                    <option>Sort by price</option>
                                    <option>Sort by rating</option>
                                    <option>Sort by popular</option>
                                </select>
                            </div>
                        </div>

                        <div className="row row-15">
                            {/* cat item */}
                            {/*<div className="cat_item">
                                <div className="cat_item_vn row">
                                    <div className="cat_item_img"><a href="#"><img src={itemImage} alt={"item"} /></a></div>
                                    <div className="cat_item_center">
                                        <div className="cat_item_title row">
                                            <i><FontAwesomeIcon icon="fa-solid fa-bookmark" aria-hidden="true"></FontAwesomeIcon></i>
                                            <a href="#">Tour2Sky VIP: NYC Helicopter Flight and Statue of Liberty Cruise</a>
                                        </div>
                                        <div className="cat_item_price row">
                                            <div className="item_price">$ 420</div>
                                            <div className="rating">
                                                <i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                                                <i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                                                <i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                                                <i><FontAwesomeIcon icon="fa-solid fa-star"></FontAwesomeIcon></i>
                                                <i><FontAwesomeIcon icon="fa-solid fa-star deactivate"></FontAwesomeIcon></i>
                                            </div>
                                        </div>
                                        <div className="cat_item_desk">
                                            This is short tour description, can be few rows of text
                                        </div>
                                    </div>
                                    <div className="cat_item_details">
                                        <a href="#">Buy</a>
                                    </div>
                                </div>
                            </div>*/}
                            <Card />
                            {/* cat item*/}
                        </div>




                        {/* pagination */}
                        <div className="row pagination">
                            <ul className={"pagination"}>
                                <li className={"previos disabled"}><a href="#">1</a></li>
                                <li className={"page-item "}><span className="active">2</span></li>

                            </ul>
                        </div>
                         {/*pagination*/}

                        <article className="row cat_text">
                            <p>Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". Places where many tourists stay are called "resorts". Places that people go to for tourism are called tourist destinations.</p>
                            <p>Tourism can bring damage to the local area, and/or the tourists. Litter, scuba-diving and deforestation are problems for popular places such as St. Lucia, Hawaii and others. Scuba-diving can damage coral reefs which are home to hundreds of species of sea animals. Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". </p>
                        </article>


                     {/*cat right */}

                </div>
                 {/*catalog row */}

            </div>
        </div>
          {/*catalog end */}
        </div>
    </main>
      {/*Main end */}
</div>

}
export default Catalog