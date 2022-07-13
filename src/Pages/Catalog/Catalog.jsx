import React, {useEffect, useState} from "react";
import "../../App.css";
import "../../responsice.css";
import "../../index.css";
import s from "./Catalog.module.css";
import 'rc-slider/assets/index.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from "@fortawesome/free-solid-svg-icons";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {NavLink} from "react-router-dom";
import "rc-slider/assets/index.css";
import './Catalog.module.css';
import PaginatorContainer from "../../assets/common/Pagination/PaginatorContainer";
import ProductCards from "../../assets/common/Cards/ProductCards";
import {Helmet} from "react-helmet-async";
library.add(fas);



const Catalog = (props) => {

    const page = props.pagination.current_page || 1;
    const [minPrice,setMinPrice] = useState([20]);
    const [maxPrice,setMaxPrice] = useState([200]);
    const [minTime,setMinTime] = useState([10]);
    const [maxTime,setMaxTime] = useState([200]);
    const [sort,setSort] = useState("")
    const [rating, setRating] = useState( [1]);



    useEffect(()=> {
        props.getFilteredCatalog({minPrice,maxPrice,minTime,maxTime,sort,rating,page})

    },[minPrice,maxPrice,minTime,maxTime,sort,rating])

    const changeSelect = (e) => {
        setSort(e.target.value)
    }
    const changeCheckBox =(e) => {
        /*setRating([+e.target.id])*/
        let newArray = [...rating,+e.target.id];
        if (rating.includes(+e.target.id)) {
            newArray = newArray.filter(day => day !== +e.target.id);
        }
        setRating(
            newArray
        );
    }




    return <>

        <Helmet>
            <title>Tour2sky-catalog</title>
        </Helmet>
    <div className="catalog">

        <div className="header_title">
            <div className="container">
                <div className="row">
                    <h1>Sierra Nevada Helicopter tours</h1>
                    <p>The best helicopter adventures in USA, Sierra Nevada. You will be as excited as it possible.
                        Professional pilots, experianced guides, best helicopter views ever. </p>
                </div>
            </div>
        </div>
        <div className="catalog_item row wighet">
            <div className="container">
                {/*breadcrumbs*/}
                <div className="row breadcrumbs">
                    <NavLink className="" to="/">Home</NavLink>
                    <span>Catalog</span>
                </div>
                {/* breadcrumbs*/}
                {/*Sidebar*/}
                <div className="sidebar">
                    <NavLink className="pp-credit-block-button" to="/">
                        <svg className="button-icon fill-secondary"
                             width="17"
                             height="17"
                             aria-hidden="true"
                             role="img"
                             viewBox="0 0 24 24">
                            <path d="M9.6 5.2c-.4-1.3-1.7-2-3-1.6-.8.2-1.5.9-1.7 1.6H3v1.5h1.9C5.3 8.1 6.7 8.8 8 8.4c.8-.2 1.4-.9 1.7-1.7H21V5.2H9.6zM12 15.5c-1.1 0-2 .7-2.4 1.8H3v1.5h6.7c.4 1.3 1.8 2.1 3.1 1.7.8-.2 1.4-.9 1.7-1.7H21v-1.5h-6.6c-.3-1.1-1.3-1.8-2.4-1.8zM16.8 9.5c-1.1 0-2 .7-2.4 1.8H3v1.5h11.4c.4 1.3 1.8 2.1 3.1 1.7.8-.2 1.4-.9 1.7-1.7H21v-1.5h-1.9c-.3-1.1-1.3-1.8-2.3-1.8z"/>
                        </svg>
                        Filter</NavLink>
                    {/*<SearchFilter/>*/}
                    <div className="popup-credit">
                        <div className="credit_block ">
                            <NavLink to="/" className="cancelComment" title="">
                                <FontAwesomeIcon icon="fa-solid fa-times" /></NavLink>
                            <div className="row wighet">
                                <h4>Filter by price</h4>
                                <div className="row wighet_row">
                                    <Slider range
                                            onChange={(value)=> {
                                            setMaxPrice(value[1]);
                                            setMinPrice(value[0])}}
                                            step={10}
                                            trackStyle={{
                                                backgroundImage: "linear-gradient(272deg,#3cc,#2980b9)",
                                                padding:"3px",
                                            }}
                                            dotStyle={{
                                                backgroundColor: "#ffffff",
                                                cursor: "pointer",
                                                }}
                                            handleStyle={{
                                                /*position: "absolute",*/
                                                width: "16px",
                                                height: "16px",
                                                boxShadow:" 0 3px 4px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)",
                                                backgroundColor: "white",
                                                cursor: "pointer",
                                            }}
                                            /* marks={{
                                    100: `$ 100`,
                                    500: `$ 500`
                                }}*/
                                            min={20}
                                            max={200}
                                            defaultValue={[20, 200]}
                                            tipFormatter={value =>`$ ${value}`}
                                            tipProps={{
                                                placement: "bottom",
                                                visible: true,}}/>
                                <div className={s.infoSliderPanel}>
                                    <div className={s.info_L}>${minPrice}</div>
                                    <div className={s.info_R}>${maxPrice}</div>
                                 </div>
                                </div>

                            </div>
                            <div className="row wighet">
                                <h4>Flight lenth</h4>
                                <div className="row wighet_row">
                                    <Slider range
                                            onChange={(value)=> {
                                                setMaxTime(value[1]);
                                                setMinTime(value[0])}}
                                            step={10}
                                            trackStyle={{
                                                backgroundImage: "linear-gradient(272deg,#3cc,#2980b9)",
                                                padding:"3px"}}
                                            dotStyle={{
                                                backgroundColor: "#ffffff",
                                                cursor: "pointer",}}
                                            handleStyle={{
                                                width: "16px",
                                                height: "16px",
                                                boxShadow:" 0 3px 4px 0 rgba(10, 31, 68, 0.1), 0 0 1px 0 rgba(10, 31, 68, 0.08)",
                                                backgroundColor: "white",
                                                cursor: "pointer"}}
                                            /* marks={{
                                100: `$ 100`,
                                500: `$ 500`
                            }}*/
                                            min={10}
                                            max={200}
                                            defaultValue={[10, 200]}
                                            tipFormatter={value =>`$ ${value}`}
                                            tipProps={{
                                                placement: "bottom",
                                                visible: true,}}/>
                                    <div className={s.infoSliderPanel}>
                                        <div className={s.info_L}>{minTime} min</div>
                                        <div className={s.info_R}>{maxTime} min</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row wighet">
                                <h4>Filter by Rating</h4>
                                <div className="row wighet_row">
                                    <div className="row checkbox_row">
                                        <div className="row checkbox_item">
                                            <label className="custom-big-checkbox">
                                                <input type="checkbox" id="5" value={5}
                                                       className="align-self-center" onChange={changeCheckBox}
                                                />
                                                <span className="custom-big-checkbox__checkbox">
                                                </span>
                                            </label>
                                            <span className="labeltext">5 star</span>
                                        </div>
                                        <div className="row checkbox_item">
                                            <label className="custom-big-checkbox">
                                                <input type="checkbox" id="4" value={4}
                                                       className="align-self-center" onChange={changeCheckBox}/>
                                                <span className="custom-big-checkbox__checkbox">
                                                </span>
                                            </label>
                                            <span className="labeltext">4 star</span>
                                        </div>
                                        <div className="row checkbox_item">
                                            <label className="custom-big-checkbox">
                                            <input type="checkbox" name="3" id="3" value={3}
                                                   className="align-self-center" onChange={changeCheckBox} />
                                            <span className="custom-big-checkbox__checkbox">
                                            </span>
                                            </label>
                                            <span className="labeltext">3 star</span>
                                        </div>
                                        <div className="row checkbox_item">
                                            <label className="custom-big-checkbox">
                                            <input type="checkbox" id="2" value={2}
                                                   className="align-self-center" onChange={changeCheckBox}/>
                                            <span className="custom-big-checkbox__checkbox">
                                            </span>
                                            </label>
                                            <span className="labeltext">2 star</span>
                                        </div>
                                        <div className="row checkbox_item">
                                            <label className="custom-big-checkbox">
                                            <input type="checkbox" id="1" value={1}
                                                  readOnly checked
                                                   className="align-self-center" />
                                            <span className="custom-big-checkbox__checkbox">
                                            </span>
                                            </label>
                                            <span className="labeltext">1 star</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row wighet">
                                <h4>Top cities</h4>
                                <div className="row wighet_row">
                                    <div className="filter_links">
                                        <NavLink to="#">Accra</NavLink>
                                        <NavLink to="#">Addis Ababa</NavLink>
                                        <NavLink to="#">Boston</NavLink>
                                        <NavLink to="#">Cali</NavLink>
                                        <NavLink to="#">Dallas</NavLink>
                                        <NavLink to="#">Hangzhou</NavLink>
                                        <NavLink to="#">Kuala Lumpur</NavLink>
                                        <NavLink to="#">Mumbai</NavLink>
                                        <NavLink to="#">San Jose</NavLink>
                                        <NavLink to="#">Taipei</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="catalog_r">
                    <div className="row cat_top">
                        <h4>{props.pagination.total} helicopter tours found</h4>
                        <div className="short">
                            <select onChange={changeSelect}>
                            <option value="price">Sort by price</option>
                            <option value="rating">Sort by rating</option>
                            <option value="popular">Sort by popular</option>
                            <option value="name">Sort by name</option>

                        </select>
                        </div>
                    </div>
                    <div className="row row-15">
                        <ProductCards productCards={props.productCards.data}
                                      addRemoveWishlist={props.addRemoveWishlist}
                                      getProductItemView={props.getProductItemView}
                                      isAuth={props.isAuth}
                                      token={props.token}
                        isFavoriteItem={props.isFavoriteItem}/>
                    </div>
                    <div className="row">
                        <PaginatorContainer totalItemCount={props.pagination.total}
                                       pageSize={props.pagination.count}
                                       currentPage={props.pagination.current_page}
                                       totalPages={props.pagination.total_pages}
                                       links={props.pagination.links}
                        />
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
    </>
}
export default Catalog