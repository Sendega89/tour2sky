import logo from "../../assets/img/logo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const MobileMenu = () => {
    return <nav className="nav" id="menu_right_sidebar">
        <div className="menu-right-button open-button"><i><FontAwesomeIcon icon="fa fa-bars"></FontAwesomeIcon></i></div>
        <div className="container_right_menu">
            <span className="close-button"><i><FontAwesomeIcon icon="fa fa-times"></FontAwesomeIcon></i></span>
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
                                <li><a href="#">About Us Page</a> </li>
                                <li><a href="#">Our Dentists</a></li>
                                <li><a href="#">Our Staff</a></li>
                                <li><a href="#">Testimonials</a></li>
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
                <a href="#"><i><FontAwesomeIcon icon="fa fa-facebook"></FontAwesomeIcon></i></a>
                <a href="#"><i><FontAwesomeIcon icon="fa fa-twitter"></FontAwesomeIcon></i></a>
                <a href="#"><i><FontAwesomeIcon icon="fa fa-google-plus"></FontAwesomeIcon></i></a>
                <a href="#"><i><FontAwesomeIcon icon="fa fa-youtube"></FontAwesomeIcon></i></a>
                <a href="#"><i><FontAwesomeIcon icon="fa fa-vk"></FontAwesomeIcon></i></a>
                <a href="#"><i><FontAwesomeIcon icon="fa fa-yelp"></FontAwesomeIcon></i></a>
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
}
export default MobileMenu