import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../App.css";
const SearchFilter = () => {
    const slideRangeStyleOll = {
        left: "20%",
        width: "60%"
    }
    const slideRangeStyleLeft1 = {
        left: "20%"
    }
    const slideRangeStyleLeft2 = {
        left: "80%"
    }
    return <>
        <div className="pp-credit-block-button">
            <svg className="button-icon fill-secondary" width="17" height="17" aria-hidden="true" role="img"
                 viewBox="0 0 24 24">
                <path
                    d="M9.6 5.2c-.4-1.3-1.7-2-3-1.6-.8.2-1.5.9-1.7 1.6H3v1.5h1.9C5.3 8.1 6.7 8.8 8 8.4c.8-.2 1.4-.9 1.7-1.7H21V5.2H9.6zM12 15.5c-1.1 0-2 .7-2.4 1.8H3v1.5h6.7c.4 1.3 1.8 2.1 3.1 1.7.8-.2 1.4-.9 1.7-1.7H21v-1.5h-6.6c-.3-1.1-1.3-1.8-2.4-1.8zM16.8 9.5c-1.1 0-2 .7-2.4 1.8H3v1.5h11.4c.4 1.3 1.8 2.1 3.1 1.7.8-.2 1.4-.9 1.7-1.7H21v-1.5h-1.9c-.3-1.1-1.3-1.8-2.3-1.8z"></path>
            </svg>
            Filter
        </div>
        <div className="popup-credit">
            <div className="credit_block"><a className="cancelComment" title="">
                <i><FontAwesomeIcon icon="fa-solid fa-times" aria-hidden="true"></FontAwesomeIcon></i></a>
                <div className="row wighet"><h4>Filter by price</h4>
                    <div className="row wighet_row">
                        <div id="slider-range"className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                            <div className="ui-slider-range ui-corner-all ui-widget-header" style={slideRangeStyleOll}>
                            </div>
                            <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={slideRangeStyleLeft1}>
                                              </span>
                            <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={slideRangeStyleLeft2}>
                                             </span>
                        </div>
                        <div className="row price_slider"><input type="text" id="amount" readOnly=""/></div>
                    </div>
                </div>
                <div className="row wighet"><h4>Flight lenth</h4>
                    <div className="row wighet_row">
                        <div id="slider_lenth"
                             className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                            <div className="ui-slider-range ui-corner-all ui-widget-header"style={slideRangeStyleOll}>
                                 </div>
                            <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default"style={slideRangeStyleLeft1}>
                            </span>
                                  <span tabIndex="0" style={slideRangeStyleLeft2}></span>
                        </div>
                        <div className="row price_slider"><input type="text" id="amount_lenth" readOnly=""/>
                        </div>
                    </div>
                </div>
                <div className="row wighet"><h4>Filter by Rating</h4>
                    <div className="row wighet_row">
                        <div className="row checkbox_row">
                            <div className="row checkbox_item"><label className="custom-big-checkbox"><input
                                type="checkbox" name="1" id="otkritka1" className="align-self-center"/><span
                                className="custom-big-checkbox__checkbox"></span></label><span
                                className="labeltext">5 star</span></div>
                            <div className="row checkbox_item"><label className="custom-big-checkbox"><input
                                type="checkbox" name="2" id="otkritka2" className="align-self-center"/>
                                <span className="custom-big-checkbox__checkbox"></span>
                            </label><span
                                className="labeltext">4 star</span></div>
                            <div className="row checkbox_item"><label className="custom-big-checkbox"><input
                                type="checkbox" name="3" id="otkritka3" className="align-self-center"/>
                                <span className="custom-big-checkbox__checkbox"></span>
                            </label><span

                                className="labeltext">3 star</span></div>
                            <div className="row checkbox_item"><label className="custom-big-checkbox"><input
                                type="checkbox" name="4" id="otkritka4" className="align-self-center"/><span
                                className="custom-big-checkbox__checkbox"></span></label><span
                                className="labeltext">2 star</span></div>
                            <div className="row checkbox_item"><label className="custom-big-checkbox"><input
                                type="checkbox" name="5" id="otkritka5" className="align-self-center"/><span
                                className="custom-big-checkbox__checkbox"></span></label><span
                                className="labeltext">1 star</span></div>
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
    </>
}
export default SearchFilter