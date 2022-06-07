import "./header.css"
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import  logo from "../../assets/headerImage/Object.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./font-awesome.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./responsice.css";


const Header = () => {
    return <div className="wrapper">
    <header id="myHeader" className="">

             {/*Header bottom start*/}
            <div className="row header">
                <div className="container">
                    <div className="row">
                        {/* LOGO start */}
                        <div className="logo">
                            <a href="/"><img className="lozad" src={logo} alt="Tour2Sky"/></a>
                        </div>
                       {/* LOGO end */}
                       {/* NAVIGATION start */}
                        <div className="menu">
                            <nav>
                                <ul>
                                    <li><a href="#">Air</a></li>
                                    <li><a href="#">Balloning</a></li>
                                    <li><a href="#">Helicopter tours</a></li>
                                    <li><a href="#">Skydiving</a></li>
                                    <li className="drop-item"><a href="#">Other</a>
                                        <ul className="drop-menu">
                                            <li className="drop-menu__item"><a className="drop-menu__link"
                                                                               href="#">Paragliding</a></li>
                                            <li className="drop-menu__item"><a className="drop-menu__link" href="#">Hand
                                                Giding</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                         {/*NAVIGATION end*/}

                     {/*   acaunt not login */}
                        <div className="header_login no_login">
                            <div className="login_drop popup">
                                <a href="#authorization" className="authorization" data-effect="mfp-zoom-in">
                                    <span><FontAwesomeIcon icon={["fa","fa-lock"]}  aria-hidden="true"/>Authorization</span>
                                </a>
                            </div>
                        </div>
                     {/* acaunt not login

                       acaunt logged in*/}
                        <div class="header_login">
                            <div class="login_drop">
                                <span><FontAwesomeIcon icon="fa fa-user" aria-hidden="true"/>Personal account</span>
                                <ul>
                                    <li><a href="/settings.php">Account settings</a></li>
                                    <li><a href="/bookings.php">Bookings</a></li>
                                    <li><a href="/wishlist.php">Wishlist</a></li>
                                    <li><a href="#">Sign Out</a></li>
                                </ul>
                            </div>
                        </div>
                       {/*   acaunt logged in */}


                       {/* Mobile Menu start */}
                        <nav className="nav" id="menu_right_sidebar">
                            <div className="menu-right-button open-button"><FontAwesomeIcon className="fa fa-bars"/></div>
                            <div className="container_right_menu">
                                <span className="close-button"><FontAwesomeIcon className="fa fa-times"/></span>
                                <div className="row footer_menu">

                                    <div className="row logotype_light">
                                        <img className="lozad is-loaded" data-src="img/logo.png" alt="Tour2Sky"
                                             src={logo} data-loaded="true"/>
                                    </div>
                                    <div id="dl-menu" className="dl-menuwrapper">
                                        <ul className="dl-menu dl-menuopen">
                                            <li><a href="/">Home</a></li>
                                            <li>
                                                <a href="/aboutus.php">About Us</a>
                                                <ul className="dl-submenu">
                                                    <li><a href="/aboutus.php">About Us Page</a></li>
                                                    <li><a href="/ourdentists.php">Our Dentists</a></li>
                                                    <li><a href="/ourstaff.php">Our Staff</a></li>
                                                    <li><a href="/testimonials.php">Testimonials</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/service.php">Services</a>
                                                <ul className="dl-submenu">
                                                    <li><a href="/service_page.php">Services Page</a></li>
                                                    <li><a href="/service_page.php">Cosmetic Dentistry</a></li>
                                                    <li><a href="/service_page.php">General Dentistry</a></li>
                                                    <li><a href="/service_page.php">Restorations</a></li>
                                                    <li><a href="/service_page.php">Orthodontics</a></li>
                                                    <li><a href="/service_page.php">Oral Surgery</a></li>
                                                    <li><a href="/service_page.php">Pediatric Dentistry</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/blog.php">Blog</a>
                                                <ul className="dl-submenu">
                                                    <li><a href="/blog.php">Blog Default</a></li>
                                                    <li><a href="/blog_full_width.php">Blog Full Width</a></li>
                                                    <li><a href="/blog_grid.php">Blog Grid</a></li>
                                                    <li><a href="/blog_list.php">Blog List</a></li>
                                                    <li><a href="/blog_post.php">Blog Post</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/elements.php">Elements</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row footer_item_social">
                                    <a href="#"><FontAwesomeIcon icon="fab fa-facebook" /></a>
                                    <a href="#"><FontAwesomeIcon icon="fa fa-twitter"/></a>
                                    <a href="#"><FontAwesomeIcon icon="fa fa-google-plus"/></a>
                                    <a href="#"><FontAwesomeIcon icon="fa fa-youtube"/></a>
                                    <a href="#"><FontAwesomeIcon icon="fa fa-vk"/></a>
                                    <a href="#"><FontAwesomeIcon icon="fa fa-yelp"/></a>
                                </div>
                                <div className="row menu_contact">
                                    <ul>
                                        <li><FontAwesomeIcon icon="fa fa-map-marker"/>
                                            <address>27 Castro St, Mountain View, CA 94043</address>
                                        </li>
                                        <li><FontAwesomeIcon icon="fa fa-phone"/> Phone: + 1 650 123-4000</li>
                                        <li><FontAwesomeIcon icon="fa fa-envelope-o"/>owlthemesnet@gmail.com</li>
                                        <li><FontAwesomeIcon icon="fa fa-clock-o"/> Mon–Fri 10:00 am–6:00 pm</li>
                                        <li><FontAwesomeIcon icon="fa fa-clock-o"/> Sat–Sun 11:00 am– 4:00 pm</li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                     {/* Mobile Menu end*/}

                    </div>
                </div>
            </div>

            {/* Header bottom end */}
        </header>
        {/*HEADER end*/}
    </div>
}
export default Header

/*
const  HeaderTest = () => {

    return <Navbar collapseOnSelect expand="lg"  variant="light" className="navContainer">

        <Navbar.Brand href="#home">
            <Logo alt="logo" width="58" height="78" className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="mr-auto">
                <Nav.Link href="#Catalog">Catalog</Nav.Link>
                <Nav.Link href="#pricing">Balloning</Nav.Link>
                <Nav.Link href="#Balloning">Search</Nav.Link>
                <Nav.Link href="#account">My account</Nav.Link>
                <Nav.Link href="#Checkout">Checkout</Nav.Link>

                <NavDropdown title="Other" id="collasible-nav-dropdown" class="text-dark">
                    <NavDropdown.Item href="#action/3.1" >Paragliding</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Hand Giding</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Product</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <div className="header_login no_login">
                <div className="login_drop ">
                    <div className="authorization"><span>
                            <i className="fa fa-unlock-alt" aria-hidden="true"></i>Authorization</span>
                    </div>
                </div>
            </div>
        </Navbar.Collapse>


    </Navbar>
}*/
