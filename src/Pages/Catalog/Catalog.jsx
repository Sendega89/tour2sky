import React from "react";
import "../../App.css"
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../assets/common/Cards/ProductCard";
import SearchFilter from "../../assets/common/SideBar/SearchFilter";
import '../../font-awesome.css';
library.add(fab, fas);

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
                    <SearchFilter/>
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
                        {/*<div className="cat_item">
                            <div className="cat_item_vn row">
                                <div className="cat_item_img"><a product="[object Object]" href="/product/1"><img
                                    src="img/p1.jpg"/></a></div>
                                <div className="cat_item_center">
                                    <div className="cat_item_title row"><i className="fa fa-bookmark"
                                                                           aria-hidden="true"></i><a
                                        product="[object Object]" href="/product/1">Tour2Sky VIP: NYC Helicopter Flight
                                        and Statue of Liberty Cruise</a></div>
                                    <div className="cat_item_price">
                                        <div className="item_price"><span>from</span> $ 420</div>
                                        <div className="rating-container">
                                            <div className="rating"><i className="fa fa-star"></i><i
                                                className="fa fa-star"></i><i className="fa fa-star"></i><i
                                                className="fa fa-star"></i><i className="fa fa-star deactivate"></i>
                                            </div>
                                            <div className="item_date"><i
                                                className="fa fa-clock-o"></i><span>30 minutes</span></div>
                                        </div>
                                    </div>
                                    <div className="cat_item_desk">This is short tour description, can be few rows of
                                        text
                                    </div>
                                </div>
                                <div className="cat_item_details"><a href="/product/1">Buy</a></div>
                            </div>
                        </div>
                        <div className="cat_item">
                            <div className="cat_item_vn row">
                                <div className="cat_item_img"><a product="[object Object]" href="/product/2"><img
                                    src="img/p1.jpg"/></a></div>
                                <div className="cat_item_center">
                                    <div className="cat_item_title row"><i className="fa fa-bookmark-o"
                                                                           aria-hidden="true"></i><a
                                        product="[object Object]" href="/product/2">Orlando</a></div>
                                    <div className="cat_item_price">
                                        <div className="item_price"><span>from</span> $ 120</div>
                                        <div className="rating-container">
                                            <div className="rating"><i className="fa fa-star"></i><i
                                                className="fa fa-star deactivate"></i><i
                                                className="fa fa-star deactivate"></i><i
                                                className="fa fa-star deactivate"></i><i
                                                className="fa fa-star deactivate"></i></div>
                                            <div className="item_date"><i
                                                className="fa fa-clock-o"></i><span>30 minutes</span></div>
                                        </div>
                                    </div>
                                    <div className="cat_item_desk">This is short tour description, can be few rows of
                                        text
                                    </div>
                                </div>
                                <div className="cat_item_details"><a href="/product/2">Buy</a></div>
                            </div>
                        </div>*/}
                        <ProductCard />
                        <ProductCard />
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