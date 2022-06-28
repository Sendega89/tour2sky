import React from "react";
import   "./HeaderMobileMenu.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { slide as Menu } from 'react-burger-menu';
import { fab } from '@fortawesome/free-brands-svg-icons';
import logo from "../../../assets/img/logo.png";
import {NavLink} from "react-router-dom";


library.add(fab);



export default props => {

        return (
            // Pass on our props
            <Menu width={"100%"} right {...props}  >
                <nav className="nav" >
                    <div className="container_right_menu">

                        <div className="footer_menu">
                            <div className="row headerMobileMenuLogo">
                                <img className="lozad is-loaded"  alt="Tour2Sky" src={logo}/>
                            </div>
                            <div id="dl-menu" className="dl-menuwrapper">
                                <ul className="dl-menu dl-menuopen">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <ul>
                                        <li><NavLink to="/catalog">Catalog</NavLink></li>
                                        <li><NavLink to="/balloning">Balloning</NavLink></li>
                                        <li><NavLink to="/search" >Search</NavLink></li>
                                        <li><NavLink to="/myAccount">My account</NavLink></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className=" footer_item_social">
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-facebook"/></i></a>
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-twitter"/></i></a>
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-google-plus"/></i></a>
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-youtube"/></i></a>
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-vk"/></i></a>
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-yelp"/></i></a>
                        </div>
                        <div className="row menu_contact">
                            <ul>
                                <li><i><FontAwesomeIcon icon="fa fa-map-marker"/></i> <address>27 Castro St, Mountain View, CA 94043</address></li>
                                <li><i><FontAwesomeIcon icon="fa fa-phone"/></i> Phone: + 1 650 123-4000</li>
                                <li><i><FontAwesomeIcon icon="fa-solid fa-envelope"/></i>owlthemesnet@gmail.com</li>
                                <li><i><FontAwesomeIcon icon="fa-solid fa-clock"/></i> Mon–Fri 10:00 am–6:00 pm</li>
                                <li><i><FontAwesomeIcon icon="fa-solid fa-clock"/></i> Sat–Sun 11:00 am– 4:00 pm</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Menu>
        );


}


