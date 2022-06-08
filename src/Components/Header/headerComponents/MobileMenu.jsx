import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../../../assets/img/logo.png";



const MobileMenu = () => {
    return  <nav className="nav" id="menu_right_sidebar">
        <div className="menu-right-button open-button"><FontAwesomeIcon icon="fa fa-bars"></FontAwesomeIcon></div>
        <div className="container_right_menu">
            <span className="close-button"><FontAwesomeIcon icon="fa fa-times"></FontAwesomeIcon></span>
            <div className="row footer_menu">

                <div className="row logotype_light">
                    <img className="lozad is-loaded" src={logo} alt="Tour2Sky" src={logo} loaded="true"/>
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
                <a href="#"><FontAwesomeIcon icon="fa fa-facebook"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon="fa fa-twitter"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon="fa fa-google-plus"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon="fa fa-youtube"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon="fa fa-vk"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon="fa fa-yelp"></FontAwesomeIcon></a>
            </div>
            <div className="row menu_contact">
                <ul>
                    <li><FontAwesomeIcon icon="fa fa-map-marker"></FontAwesomeIcon> <address>27 Castro St, Mountain View, CA 94043</address></li>
                    <li><FontAwesomeIcon icon="fa fa-phone"></FontAwesomeIcon> Phone: + 1 650 123-4000</li>
                    <li><FontAwesomeIcon icon="fa fa-envelope-o"></FontAwesomeIcon>owlthemesnet@gmail.com</li>
                    <li><FontAwesomeIcon icon="fa fa-clock-o"></FontAwesomeIcon> Mon–Fri 10:00 am–6:00 pm</li>
                    <li><FontAwesomeIcon icon="fa fa-clock-o"></FontAwesomeIcon> Sat–Sun 11:00 am– 4:00 pm</li>
                </ul>
            </div>
        </div>
    </nav>


}
export default MobileMenu