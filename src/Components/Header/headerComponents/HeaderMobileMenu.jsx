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
            <Menu  width={'100%'} right isOpen={ false } >
                <nav className="nav" >

                    <div className="container_right_menu">

                        <div className="footer_menu">
                            <div className="logotype_light">
                                <img className="lozad is-loaded" src={logo} alt="Tour2Sky" src={logo} loaded="true"/>
                            </div>
                            <div id="dl-menu" className="dl-menuwrapper">
                                <ul className="dl-menu dl-menuopen">
                                    <li><a href="/">Home</a></li>
                                    <ul>
                                        <li><NavLink to="/Catalog">Catalog</NavLink></li>
                                        <li><NavLink to="/Balloning">Balloning</NavLink></li>
                                        <li><NavLink to="/Search">Search</NavLink></li>
                                        <li><NavLink to="/MyAccount">My account</NavLink></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                        <div className=" footer_item_social">
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-facebook"></FontAwesomeIcon></i></a>
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-twitter"></FontAwesomeIcon></i></a>
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-google-plus"></FontAwesomeIcon></i></a>
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-youtube"></FontAwesomeIcon></i></a>
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-vk"></FontAwesomeIcon></i></a>
                            <a href="#"><i><FontAwesomeIcon icon="fa-brands fa-yelp"></FontAwesomeIcon></i></a>
                        </div>
                        <div className="row menu_contact">
                            <ul>
                                <li><i><FontAwesomeIcon icon="fa fa-map-marker"></FontAwesomeIcon></i> <address>27 Castro St, Mountain View, CA 94043</address></li>
                                <li><i><FontAwesomeIcon icon="fa fa-phone"></FontAwesomeIcon></i> Phone: + 1 650 123-4000</li>
                                <li><i><FontAwesomeIcon icon="fa fa-envelope-o"></FontAwesomeIcon></i>owlthemesnet@gmail.com</li>
                                <li><i><FontAwesomeIcon icon="fa fa-clock-o"></FontAwesomeIcon></i> Mon–Fri 10:00 am–6:00 pm</li>
                                <li><i><FontAwesomeIcon icon="fa fa-clock-o"></FontAwesomeIcon></i> Sat–Sun 11:00 am– 4:00 pm</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Menu>
        );


}


