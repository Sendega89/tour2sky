//import "./owl.carousel.min.css";
import "./main.css";
import "./style.css";
import "./rating.css";
import "./font-awesome.css";
import "./jquery-ui.css";
import "./responsice.css";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css"
import React from "react";
import logo from "../assets/img/logo.png";
import footerLogo from "../assets/img/footer_logo.png";


const TestCode =() => {
    return (
    <div className="wrapper">
            {/* HEADER start */}
                <header id="myHeader" className="">
            {/* Header bottom start */}
                    <div className="row header">
                        <div className="container">
                            <div className="row">
            {/* LOGO start */}
                                <div className="logo">
                                    <a href="/"><img className="lozad" src={logo} alt="Tour2Sky"/></a>
                                </div>
            {/*LOGO end */}

            {/* NAVIGATION start */}
                                <div className="menu">
                                    <nav>
                                        <ul >
                                            <li><a href="#">Catalog</a></li>
                                            <li><a href="#">Balloning</a></li>
                                            <li><a href="#">Search</a></li>
                                            <li><a href="#">My account</a></li>
                                            <li><a href="#">Checkout</a></li>
                                            <li className="drop-item" ><a href="#">Other</a>
                                                <ul className="drop-menu">
                                                    <li className="drop-menu__item"><a className="drop-menu__link" href="#">Paragliding</a></li>
                                                    <li className="drop-menu__item"><a className="drop-menu__link" href="#">Hand Giding</a></li>
                                                    <li className="drop-menu__item"><a className="drop-menu__link" href="#">Product</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
            {/* NAVIGATION end */}


            {/* account not login */}
                                <div className="header_login no_login">
                                    <div className="login_drop popup">
                                        <a href="#authorization" className="authorization" data-effect="mfp-zoom-in">
                                            <span><i className="fa fa-unlock-alt" aria-hidden="true"></i>Authorization</span>
                                        </a>
                                    </div>
                                </div>
            {/* account not login */}

            {/* account logged in
                                <div className="header_login">
                                    <div className="login_drop">
                                        <span><i className="fa fa-user" aria-hidden="true"></i>Personal account</span>
                                        <ul>
                                            <li><a href="/settings.php">Account settings</a></li>
                                            <li><a href="/bookings.php">Bookings</a></li>
                                            <li><a href="/wishlist.php">Wishlist</a></li>
                                            <li><a href="#">Sign Out</a></li>
                                        </ul>
                                    </div>
                                </div>
                                account logged in */}

            {/* Mobile Menu start */}
                                <nav className="nav" id="menu_right_sidebar">
                                    <div className="menu-right-button open-button"><i className="fa fa-bars"></i></div>
                                    <div className="container_right_menu">
                                        <span className="close-button"><i className="fa fa-times"></i></span>
                                        <div className="row footer_menu">

                                            <div className="row logotype_light">
                                                <img className="lozad is-loaded" src="" alt="Tour2Sky" src="" loaded="true"/>
                                            </div>
                                            <div id="dl-menu" className="dl-menuwrapper">
                                                <ul className="dl-menu dl-menuopen">
                                                    <li><a href="/">Home</a></li>
                                                    <li>
                                                        <a href="/aboutus.php">About Us</a>
                                                        <ul className="dl-submenu">
                                                            <li><a href="/aboutus.php">About Us Page</a> </li>
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
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-google-plus"></i></a>
                                            <a href="#"><i className="fa fa-youtube"></i></a>
                                            <a href="#"><i className="fa fa-vk"></i></a>
                                            <a href="#"><i className="fa fa-yelp"></i></a>
                                        </div>
                                        <div className="row menu_contact">
                                            <ul>
                                                <li><i className="fa fa-map-marker"></i> <address>27 Castro St, Mountain View, CA 94043</address></li>
                                                <li><i className="fa fa-phone"></i> Phone: + 1 650 123-4000</li>
                                                <li><i className="fa fa-envelope-o"></i>owlthemesnet@gmail.com</li>
                                                <li><i className="fa fa-clock-o"></i> Mon–Fri 10:00 am–6:00 pm</li>
                                                <li><i className="fa fa-clock-o"></i> Sat–Sun 11:00 am– 4:00 pm</li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
            {/* Mobile Menu end */}

                            </div>
                        </div>
                    </div>
            {/* Header bottom end */}
                </header>
            {/* HEADER end */}
            {/* content start */}
                <div className="content">        {/* Header title start */}
                    <div className="header_title">
                        <div className="container">
                            <div className="row">
                                <h1>Discover your <br />perfect tour now!</h1>
                                <div className="row header_search">
                                    <div id="tabs">
                                        <form>
                                            <div>
                                                <div className="header_search_flex">
                                                    <div>
                                                        <label >Air tours</label>
                                                        <input type="text" placeholder="Enter city, region or country" />
                                                    </div>
                                                    <div>
                                                        <label >Our activities</label>
                                                        <select>
                                                            <option value="all">All</option>
                                                            <option value="Ballon rides">Ballon rides</option>
                                                            <option value="Ballon rides">Helicopter tours</option>
                                                        </select>
                                                    </div>

                                                </div>

                                                <button>Search</button>
                                            </div>
                                        </form>
                                    </div>
            {/* <div id="tabs">
                                         <form>
                                             <input type="radio" name="tabs" id="toggle-tab1" checked="checked" />
                                             <label for="toggle-tab1">Air tours</label>
                                             <input type="radio" name="tabs" id="toggle-tab2" />
                                             <label for="toggle-tab2">Ballon rides</label>
                                             <input type="radio" name="tabs" id="toggle-tab3" />
                                             <label for="toggle-tab3">Helicopter tours</label>
                                             <input type="radio" name="tabs" id="toggle-tab4" />
                                             <label for="toggle-tab4">Skydiving</label>
                                             <input type="radio" name="tabs" id="toggle-tab5" />
                                             <label for="toggle-tab5">Paragliding</label>

                                             <div id="tab1" className="tab">
                                                 <input type="text" className="input_search" placeholder="Enter city, region or country" />
                                                 <button>Search</button>
                                             </div>
                                             <div id="tab2" className="tab">
                                                 <input type="text" className="input_search" placeholder="Enter city, region or country" />
                                                 <button>Search2</button>
                                             </div>
                                             <div id="tab3" className="tab">
                                                 <input type="text" className="input_search" placeholder="Enter city, region or country" />
                                                 <button>Search3</button>
                                             </div>
                                             <div id="tab4" className="tab">
                                                 <input type="text" className="input_search" placeholder="Enter city, region or country" />
                                                 <button>Search4</button>
                                             </div>
                                             <div id="tab5" className="tab">
                                                 <input type="text" className="input_search" placeholder="Enter city, region or country" />
                                                 <button>Search5</button>
                                             </div>
                                         </form>
                                     </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
            {/*  Header title end */}

            {/*  Main start */}
                    <main>
            {/* Service start */}
                        <div className="row services section">
                            <div className="container">
                                <div className="row_title">
                                    <h3>How Tour2Sky works</h3>
                                    <p>Tour2Sky searches any city, town, landmark, attraction or address across the globe with thousands of multi-modal routes to easily get you from A to B.</p>
                                </div>
                                <div className="row row-15">
            {/* Service item start */}
                                    <div className="services_item">
                                        <div className="services_item_vn">
                                            <div className="services_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58">
                                                    <path fill="#2980B9" fill-rule="nonzero" d="M0 24.333c0-3.676 2.956-6.666 6.59-6.666.057 0 .109.015.165.017.76-3.807 4.309-6.684 8.292-6.684 1.09 0 2.124.226 3.077.616a21.741 21.741 0 0 0-1.43 7.717c0 4.315 1.5 8.162 3.306 11.667H6.59C2.956 31 0 28.01 0 24.333zM44 1c8.048 2.143 14 9.554 14 18.229 0 6.956-4.632 12.71-7.767 18.771h-5.66c1.334-6.646 3.137-12.084 3.137-18.771C47.71 13.3 46.428 5.59 44 1zm-4.5-1C41.743 0 45 9.596 45 19.057 45 25.64 43.015 30.923 41.578 38h-4.156C35.988 30.943 34 25.624 34 19.057 34 9.597 37.257 0 39.5 0zm9.067 41c-.61 1.662-.996 3.451-.996 5.179v1.689h1.715c.947 0 1.714.755 1.714 1.688 0 .933-.767 1.689-1.714 1.689H47.57v1.689c0 2.793-2.307 5.066-5.142 5.066H35.57c-2.836 0-5.142-2.273-5.142-5.066v-1.689h-1.715A1.7 1.7 0 0 1 27 49.556a1.7 1.7 0 0 1 1.714-1.688h1.715v-1.69c0-1.727-.386-3.516-.997-5.178h3.6c.502 1.631.825 3.423.825 5.179v1.689h10.285v-1.69c0-1.755.323-3.547.826-5.178h3.599zM20 19.229C20 10.554 25.952 3.143 34 1c-2.428 4.591-3.71 12.301-3.71 18.229 0 6.686 1.797 12.096 3.137 18.771h-5.66C24.646 31.965 20 26.189 20 19.229z"/>
                                                </svg>
                                            </div>
                                            <span className="services_num">1200</span>
                                            <span className="services_item_desc">Hot Air Balloon Rides</span>
                                        </div>
                                    </div>
            {/* Service item end */}
            {/* Service item start */}
                                    <div className="services_item">
                                        <div className="services_item_vn">
                                            <div className="services_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="40" viewBox="0 0 59 40">
                                                    <path fill="#2980B9" fill-rule="nonzero" d="M40 37.5V35h-7c-5.599 0-8.513-6.213-10.853-11.208l-.08-.167c-1.664-1.869-8.576-3.77-13.17-4.68a5.097 5.097 0 0 1-1.936 1.616 1.26 1.26 0 0 1-.093.25l-1.25 2.499c-.213.422-.645.69-1.118.69H3.25C2.56 24 2 23.44 2 22.75v-2.5c0-.11.014-.215.04-.316C.803 18.932 0 17.319 0 15.5c0-1.374.458-2.63 1.215-3.593L.059 7.923c-.19-.656.091-1.371.643-1.646l2.356-1.166c.566-.283 1.225-.008 1.5.622l1.969 4.528c1.403.495 2.537 1.653 3.096 3.139h17.912l4.588-5.006c.233-.25.548-.394.877-.394h3.714c.468 0 .897.289 1.105.745l1.955 4.263C50.519 13.343 59 23.601 59 27.667c0 .1-.01.196-.03.29.02.094.03.192.03.293 0 3.672-3.395 6.484-8 6.732V37.5h1.847c.886-.143 3.264-.803 3.847-1.86a1.222 1.222 0 0 1 1.676-.48c.593.337.805 1.097.473 1.7-1.337 2.425-5.371 3.062-5.827 3.127l-2.887.002a.76.76 0 0 1-.258 0l-8.772.004a.76.76 0 0 1-.198 0L28.231 40C27.55 40 27 39.44 27 38.75s.551-1.25 1.23-1.25H40zm2 0h7V35h-7v2.5zM35.032 3A1.757 1.757 0 0 1 35 2.667V1.333C35 .597 35.448 0 36 0s1 .597 1 1.333v1.334c0 .115-.011.226-.032.333H57.75c.69 0 1.25.672 1.25 1.5S58.44 6 57.75 6h-44.5C12.56 6 12 5.328 12 4.5S12.56 3 13.25 3h21.782zM56.34 26.9c-1.127-2.865-7.2-10.34-15.603-11.16l2.292 8.274c.477 1.725 1.906 2.886 3.56 2.886h9.751z"/>
                                                </svg>
                                            </div>
                                            <span className="services_num">1200</span>
                                            <span className="services_item_desc">Hellicopter rides</span>
                                        </div>
                                    </div>
            {/* Service item end */}
            {/* Service item start */}
                                    <div className="services_item">
                                        <div className="services_item_vn">
                                            <div className="services_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
                                                    <path fill="#2980B9" fill-rule="nonzero" d="M37.175 17.221a2.913 2.913 0 0 0 .69-2.916c-.324-1.038-1.166-1.779-2.2-1.936l-9.202-1.395a1.207 1.207 0 0 1-.905-.687l-4.114-8.702C20.983.608 20.045 0 19 0c-1.044 0-1.981.608-2.443 1.585l-4.114 8.702c-.175.371-.514.628-.906.687L2.336 12.37c-1.034.156-1.877.898-2.2 1.936a2.913 2.913 0 0 0 .689 2.916l6.657 6.773c.284.289.414.705.347 1.112l-1.57 9.564c-.14.842.072 1.66.594 2.306.81 1.006 2.227 1.313 3.359.692l8.228-4.516a1.186 1.186 0 0 1 1.12 0l8.23 4.516c.4.22.827.331 1.267.331.805 0 1.567-.373 2.091-1.023a2.871 2.871 0 0 0 .594-2.306l-1.57-9.564a1.291 1.291 0 0 1 .346-1.112l6.657-6.774z"/>
                                                </svg>
                                            </div>
                                            <span className="services_num">1000</span>
                                            <span className="services_item_desc">Big Air Tours</span>
                                        </div>
                                    </div>
            {/* Service item end */}
            {/* Service item start */}
                                    <div className="services_item">
                                        <div className="services_item_vn">
                                            <div className="services_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="60" viewBox="0 0 59 60">
                                                    <path fill="#2980B9" fill-rule="nonzero" d="M42.5 37c-3.038 0-5.5-2.686-5.5-6s2.462-6 5.5-6 5.5 2.686 5.5 6-2.462 6-5.5 6zm14.882-5.639c1.285.482 1.94 1.926 1.462 3.225L54.81 45.55a2.485 2.485 0 0 1-2.326 1.634c-.247 0-.497-.038-.744-.116l-7.596-2.408-11.228 8.831c-.022.02-.04.044-.063.063l-6.884 5.61a3.694 3.694 0 0 1-4.665.01l-6.395-5.17-.775.23a3.71 3.71 0 0 1-3.955-1.252L.82 41.208a3.786 3.786 0 0 1 .574-5.286 3.7 3.7 0 0 1 5.233.58l7.8 9.812.177-.054c.006 0 .011-.002.016-.004l5.476-1.626 8.512-4.896-3.547-1.124a2.492 2.492 0 0 1-1.535-1.396 2.53 2.53 0 0 1 .045-2.087l4.653-9.711a2.472 2.472 0 0 1 3.315-1.164 2.517 2.517 0 0 1 1.154 3.348l-3.401 7.098 21.688 6.875 3.212-8.733a2.477 2.477 0 0 1 3.191-1.478zM51 23.957V8.043C51 7.468 51.448 7 52 7s1 .468 1 1.043v15.914c0 .575-.448 1.043-1 1.043s-1-.468-1-1.043zm-2-7c0 .576-.447 1.043-1 1.043-.552 0-1-.467-1-1.043V1.043C47 .467 47.448 0 48 0s1 .467 1 1.043v15.914zm-36 3.086c0-.576.448-1.043 1-1.043s1 .467 1 1.043v15.914c0 .577-.448 1.043-1 1.043s-1-.466-1-1.043V20.043zm3-6c0-.576.448-1.043 1-1.043s1 .467 1 1.043v15.914c0 .576-.448 1.043-1 1.043s-1-.467-1-1.043V14.043z"/>
                                                </svg>
                                            </div>
                                            <span className="services_num">900</span>
                                            <span className="services_item_desc">Skydiving places</span>
                                        </div>
                                    </div>
            {/* Service item end */}
                                </div>
                            </div>
                        </div>
            {/* Service end */}

            {/* Start Tabs The Best */}
                        <div className="the_best section">
            {/* Start Tabs Container */}
                            <div className="container">
                                <div className="row tabs">
            {/* Start Tabs Title */}
                                    <div className="tabs_l row">
                                        <h3>The best cities for flights</h3>
                                        <div className="scrol row">
                                            <ul>
                                                <li><a href="#tab1">Air tours</a></li>
                                                <li><a href="#tab2">Ballon rides</a></li>
                                                <li><a href="#tab3">Helicopter tours</a></li>
                                                <li><a href="#tab4">Skydiving</a></li>
                                                <li><a href="#tab5">Paragliding</a></li>
                                            </ul>
                                        </div>
                                    </div>
            {/* End Tabs Title */}

            {/* Start tab1 content */}
                                    <div className="tab_content" id="tab1">
                                        <div className="row">
                                            <div className="owl_best owl-carousel owl-theme">
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-5.png" />
                                                        <span>Dublin</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-6.png" />
                                                        <span>Edinburgh</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-7.png" />
                                                        <span>San Diego</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-5.png" />
                                                        <span>Dublin</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-6.png" />
                                                        <span>Edinburgh</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-7.png" />
                                                        <span>San Diego</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-5.png" />
                                                        <span>Dublin</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-6.png" />
                                                        <span>Edinburgh</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-7.png" />
                                                        <span>San Diego</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-5.png" />
                                                        <span>Dublin</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-6.png" />
                                                        <span>Edinburgh</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-7.png" />
                                                        <span>San Diego</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-5.png" />
                                                        <span>Dublin</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-6.png" />
                                                        <span>Edinburgh</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle-copy-7.png" />
                                                        <span>San Diego</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            {/* End tab1 content */}

            {/* Start tab2 content */}
                                    <div className="tab_content" id="tab2">
                                        <div className="row">
                                            <div className="owl_best owl-carousel owl-theme">
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            {/* End tab2 content */}

            {/* Start tab3 content */}
                                    <div className="tab_content" id="tab3">
                                        <div className="row">
                                            <div className="owl_best owl-carousel owl-theme">
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            {/* End tab3 content */}

            {/* Start tab4 content */}
                                    <div className="tab_content" id="tab4">
                                        <div className="row">
                                            <div className="owl_best owl-carousel owl-theme">
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            {/* End tab4 content */}

            {/* Start tab5 content */}
                                    <div className="tab_content" id="tab5">
                                        <div className="row">
                                            <div className="owl_best owl-carousel owl-theme">
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                                <div className="item">
                                                    <a href="#">
                                                        <img src="../assets/img/rectangle.png" />
                                                        <span>Boston</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            {/* End tab5 content */}
                                </div>
                            </div>
            {/* End Tabs Container */}
                        </div>
            {/* End Tabs The Best*/}

            {/* rectangle start */}
                        <div className="row rectangle section">
                            <div className="container">
                                <div className="row_title row_title_white">
                                    <h3>Subscribe to the newsletter</h3>
                                    <p>Tour2Sky searches any city, town, landmark, attraction or address across the globe with thousands of multi-modal routes to easily get you from A to B.</p>
                                </div>
                                <div className="row header_search">
                                    <input type="text" className="input_search" placeholder="Entet your e-mail" />
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
            {/* rectangle end */}

            {/* rectangle start */}
                        <div className="articles-wrapper">
                            <div className="article">
                                <h2 className="article__title"> About Tour2Sky</h2>
                                <article className="article__content">
                                    <p>Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". Places where many tourists stay are called "resorts". Places that people go to for tourism are called tourist destinations.</p>
                                    <p>Tourism can bring damage to the local area, and/or the tourists. Litter, scuba-diving and deforestation are problems for popular places such as St. Lucia, Hawaii and others. Scuba-diving can damage coral reefs which are home to hundreds of species of sea animals. Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". </p>
                                    <p>Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". Places where many tourists stay are called "resorts". Places that people go to for tourism are called tourist destinations.</p>
                                    <p>Tourism can bring damage to the local area, and/or the tourists. Litter, scuba-diving and deforestation are problems for popular places such as St. Lucia, Hawaii and others. Scuba-diving can damage coral reefs which are home to hundreds of species of sea animals. Tourism means people traveling for fun. It includes activities such as sightseeing and camping. People who travel for fun are called "tourists". </p>
                                </article>
                            </div>
                        </div>
            {/* rectangle end */}
                    </main>
            {/*  Main end */}
                </div>
            {/* Wrapper End */}



            {/* content end */}
            {/* Footer start */}
        <footer>
            <div className="container">
                <div className="row">
                    <div className="footer_l">
            {/* Start footer_logo */}
                        <a href="/" className="footer_logo">
                            <img className="lozad" src={footerLogo} alt="Tour2Sky" />
                        </a>
            {/* End footer_logo */}
                        <div className="soc">
                            <span>Socials:</span>
                            <div className="row">
                                <a href="https://www.facebook.com/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                        <g fill="none" fill-rule="evenodd">
                                            <rect width="40" height="40" fill="#295DB9" rx="8"/>
                                            <path fill="#FFF" fill-rule="nonzero" d="M24.586 9.004L21.947 9c-2.964 0-4.88 2.028-4.88 5.168v2.383h-2.652a.422.422 0 0 0-.415.428v3.453c0 .236.186.428.415.428h2.653v8.712c0 .236.185.428.415.428h3.46c.23 0 .416-.192.416-.428V20.86h3.101c.23 0 .415-.192.415-.428l.001-3.453a.436.436 0 0 0-.121-.302.408.408 0 0 0-.294-.126H21.36v-2.02c0-.97.224-1.464 1.449-1.464h1.777a.422.422 0 0 0 .415-.429V9.433a.422.422 0 0 0-.414-.429z"/>
                                        </g>
                                    </svg>
                                </a>
                                <a href="https://www.youtube.com/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                        <g fill="none" fill-rule="evenodd">
                                            <rect width="40" height="40" fill="#C82424" rx="8"/>
                                            <path fill="#FFF" fill-rule="nonzero" d="M33.83 11.717C32.749 10.497 30.749 10 26.93 10H13.07c-3.906 0-5.94.53-7.018 1.828C5 13.094 5 14.958 5 17.54v4.92c0 5 1.248 7.54 8.07 7.54h13.86c3.311 0 5.146-.439 6.333-1.515C34.481 27.38 35 25.58 35 22.46v-4.92c0-2.722-.081-4.598-1.17-5.823zm-9.57 8.962l-6.294 3.116a1.01 1.01 0 0 1-.95-.028.908.908 0 0 1-.466-.784V16.77c0-.32.176-.617.465-.784.29-.166.649-.177.949-.03l6.294 3.096c.32.158.521.47.522.813 0 .341-.2.655-.52.813z"/>
                                        </g>
                                    </svg>
                                </a>
                                <a href="https://instagram.com/" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                        <g fill="none" fill-rule="evenodd">
                                            <rect width="40" height="40" fill="#F57749" rx="8"/>
                                            <path fill="#FFF" fill-rule="nonzero" d="M28 10H12c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm-8 6c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm-7.5 12c-.3 0-.5-.2-.5-.5V19h2.1c-.1.3-.1.7-.1 1 0 3.3 2.7 6 6 6s6-2.7 6-6c0-.3 0-.7-.1-1H28v8.5c0 .3-.2.5-.5.5h-15zM28 14.5c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.5v-2c0-.3.2-.5.5-.5h2c.3 0 .5.2.5.5v2z"/>
                                        </g>
                                    </svg>
                                </a>
                                <a href="https://twitter.com/?lang=ru" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                        <g fill="none" fill-rule="evenodd">
                                            <rect width="40" height="40" fill="#33A2CC" rx="8"/>
                                            <path fill="#FFF" fill-rule="nonzero" d="M31.916 12.366a9.64 9.64 0 0 1-2.827.796 5.051 5.051 0 0 0 2.164-2.793 9.775 9.775 0 0 1-3.129 1.227A4.853 4.853 0 0 0 24.531 10c-2.719 0-4.924 2.262-4.924 5.05 0 .395.044.781.128 1.15-4.091-.21-7.72-2.221-10.147-5.277a5.112 5.112 0 0 0-.666 2.539c0 1.752.87 3.299 2.19 4.203a4.83 4.83 0 0 1-2.23-.634v.063c0 2.447 1.697 4.488 3.948 4.953a4.869 4.869 0 0 1-1.297.177 4.61 4.61 0 0 1-.927-.094c.627 2.008 2.445 3.468 4.598 3.508a9.72 9.72 0 0 1-6.114 2.159c-.397 0-.789-.025-1.174-.07A13.663 13.663 0 0 0 15.462 30c9.057 0 14.008-7.696 14.008-14.37l-.017-.654a9.975 9.975 0 0 0 2.463-2.61z"/>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="footer_c">
                        <div className="f_mail">Email us: <a href="mailto:info@tour2sky.com">info@tour2sky.com</a></div>
                        <div className="row">
                            <div className="f_pay">
                                <a href="#" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="34" viewBox="0 0 56 34">
                                        <g fill="none" fill-rule="evenodd">
                                            <rect width="56" height="34" fill="#2F3337" rx="6"/>
                                            <path fill="#2394BC" fill-rule="nonzero" d="M23.478 11L21.65 22.976h2.92L26.397 11h-2.92zm8.808 4.878c-1.02-.53-1.646-.889-1.646-1.432.012-.493.529-1 1.682-1a4.861 4.861 0 0 1 2.175.444l.265.125.397-2.506a7.042 7.042 0 0 0-2.62-.493c-2.884 0-4.915 1.579-4.927 3.838-.024 1.667 1.453 2.592 2.56 3.147 1.129.569 1.513.938 1.513 1.444-.012.776-.913 1.134-1.754 1.134-1.165 0-1.79-.184-2.74-.617l-.385-.184-.408 2.604c.686.32 1.947.604 3.257.618 3.064 0 5.058-1.555 5.084-3.963.01-1.32-.77-2.332-2.453-3.159zm10.36-4.84h-2.26c-.696 0-1.225.21-1.526.963l-4.338 10.975h3.065l.844-2.376h3.428l.438 2.386H45l-2.355-11.949zm-3.365 7.164c.059.006 1.176-3.88 1.176-3.88l.89 3.88H39.28zM19.21 11l-2.861 8.137-.312-1.605c-.529-1.851-2.187-3.863-4.038-4.863l2.62 10.295h3.09l4.59-11.963h-3.09V11z"/>
                                            <path fill="#EFC75E" fill-rule="nonzero" d="M15.075 12.63c-.21-.965-.876-1.616-1.782-1.63h-4.25L9 11.234c3.315.97 6.097 3.957 7 6.766l-.925-5.37z"/>
                                        </g>
                                    </svg>
                                </a>
                                <a href="#" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="94" height="34" viewBox="0 0 94 34">
                                        <g fill="none" fill-rule="evenodd">
                                            <rect width="94" height="34" fill="#2F3337" rx="6"/>
                                            <g fill-rule="nonzero">
                                                <path fill="#139AD6" d="M66.098 12.153h-3.721c-.22 0-.438.23-.548.46l-1.532 10.143c0 .23.11.346.328.346h1.97c.22 0 .329-.116.329-.346l.438-2.881c0-.23.218-.461.547-.461h1.204c2.517 0 3.94-1.268 4.268-3.804.22-1.037 0-1.96-.437-2.535-.657-.577-1.642-.922-2.846-.922m.438 3.803c-.22 1.383-1.204 1.383-2.19 1.383h-.656l.438-2.65c0-.116.11-.231.328-.231h.219c.657 0 1.313 0 1.642.46.219.116.219.462.219 1.038"/>
                                                <g fill="#FFF">
                                                    <path d="M38.742 11.86h-3.803c-.224 0-.447.234-.56.468l-1.565 10.305c0 .234.112.352.336.352h1.789c.224 0 .447-.235.56-.469l.447-2.81c0-.235.223-.469.559-.469h1.23c2.573 0 4.027-1.288 4.362-3.864.224-1.054 0-1.99-.447-2.576-.671-.586-1.566-.937-2.908-.937m.447 3.864c-.224 1.405-1.23 1.405-2.237 1.405h-.559l.447-2.693c0-.117.112-.234.336-.234h.224c.67 0 1.342 0 1.677.468.112.117.224.469.112 1.054M50.262 15.607h-1.79c-.112 0-.335.117-.335.234l-.112.586-.112-.234c-.447-.586-1.23-.82-2.125-.82-2.013 0-3.803 1.64-4.138 3.864-.224 1.171.112 2.225.67 2.928.56.702 1.343.937 2.35.937 1.677 0 2.572-1.054 2.572-1.054l-.112.585c0 .234.112.352.336.352h1.677c.224 0 .448-.235.56-.469l1.006-6.558c-.112-.117-.335-.35-.447-.35m-2.573 3.746c-.223 1.054-1.006 1.874-2.125 1.874-.559 0-1.006-.234-1.23-.468-.224-.352-.336-.82-.336-1.406.112-1.054 1.007-1.873 2.014-1.873.559 0 .894.234 1.23.468.335.351.447.937.447 1.405"/>
                                                </g>
                                                <path fill="#139AD6" d="M77.577 15.607h-1.798c-.112 0-.337.117-.337.234l-.112.586-.112-.234c-.45-.586-1.236-.82-2.135-.82-2.022 0-3.82 1.64-4.157 3.864-.224 1.171.113 2.225.674 2.928.562.702 1.348.937 2.36.937 1.685 0 2.584-1.054 2.584-1.054l-.113.585c0 .234.113.352.337.352h1.685c.225 0 .45-.235.562-.469l1.011-6.558c-.112-.117-.224-.35-.45-.35m-2.583 3.746c-.225 1.054-1.011 1.874-2.135 1.874-.561 0-1.01-.234-1.235-.468-.225-.352-.337-.82-.337-1.406.112-1.054 1.01-1.873 2.022-1.873.561 0 .898.234 1.236.468.449.351.561.937.449 1.405"/>
                                                <path fill="#FFF" d="M60.015 15.695H58.12c-.223 0-.334.118-.446.237l-2.452 4.027-1.115-3.79c-.111-.237-.223-.356-.557-.356h-1.783c-.223 0-.335.237-.335.474l2.007 6.278-1.895 2.843c-.112.237 0 .592.223.592h1.783c.223 0 .334-.118.446-.237l6.13-9.357c.335-.356.112-.711-.111-.711"/>
                                                <path fill="#139AD6" d="M79.572 12.435L78.026 23.07c0 .237.11.355.331.355h1.546c.22 0 .441-.237.552-.473L82 12.553c0-.236-.11-.354-.331-.354h-1.766c-.11-.118-.221 0-.331.236"/>
                                                <path fill="#FFF" d="M24.836 8.415C24.054 7.472 22.603 7 20.594 7h-5.58c-.335 0-.67.354-.782.708L12 23.156c0 .354.223.59.446.59h3.46l.893-5.779v.236c.112-.354.447-.707.782-.707h1.674c3.237 0 5.692-1.416 6.474-5.307v-.354c-.112 0-.112 0 0 0 .111-1.533-.112-2.476-.893-3.42"/>
                                                <path fill="#139AD6" d="M25.654 11.83v.35c-.777 3.956-3.218 5.236-6.435 5.236h-1.665c-.333 0-.665.35-.776.698l-1.11 7.099c0 .232.111.465.444.465h2.885c.333 0 .665-.233.665-.582v-.116l.555-3.608v-.232c0-.35.333-.582.666-.582h.444c2.773 0 4.993-1.164 5.547-4.655.222-1.396.111-2.676-.554-3.49a1.153 1.153 0 0 0-.666-.582"/>
                                                <path fill="#3CC" d="M24.77 11.54c-.109 0-.218-.117-.328-.117-.11 0-.219 0-.328-.118-.438-.119-.876-.119-1.423-.119h-4.268c-.11 0-.219 0-.328.119a.658.658 0 0 0-.329.59l-.875 6.14v.236c.11-.354.438-.708.766-.708h1.642c3.173 0 5.58-1.417 6.347-5.314 0-.118 0-.236.11-.354-.22-.118-.329-.236-.548-.236-.328-.118-.328-.118-.438-.118"/>
                                            </g>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                            <div className="f_link">
                                <a href="#">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer_r">
                        <ul>
                            <li><a href="#">Link to information</a></li>
                            <li><a href="#">Usefull short link</a></li>
                            <li><a href="#">Link to information</a></li>
                            <li><a href="#">Usefull short link</a></li>
                        </ul>
                        <ul>
                            <li><a href="#">Link to information</a></li>
                            <li><a href="#">Usefull short link</a></li>
                            <li><a href="#">Link to information</a></li>
                            <li><a href="#">Usefull short link</a></li>
                        </ul>
                    </div>


                </div>
            </div>
        </footer>
    </div>
)
}

export default TestCode