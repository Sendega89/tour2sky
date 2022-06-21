import logo from "../../assets/img/logo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const MobileMenu = () => {
    return <nav className="nav" id="menu_right_sidebar">
        <div className="menu-right-button open-button">
            <i><FontAwesomeIcon icon="fa fa-bars"/></i>
        </div>
        <div className="container_right_menu">
            <span className="close-button">
                <i><FontAwesomeIcon icon="fa fa-times"/></i>
            </span>
            <div className="row footer_menu">

                <div className="row logotype_light">
                    <img className="lozad is-loaded" src={logo} alt="Tour2Sky" src={logo} loaded={true}/>
                </div>
                <div id="dl-menu" className="dl-menuwrapper">
                    <ul className="dl-menu dl-menuopen">
                        <li><a href="/">Home</a></li>
                        <li>
                            <a href="/">About Us</a>
                            <ul className="dl-submenu">
                                <li><a href="#">About Us Page</a> </li>
                                <li><a href="#">Our Dentists</a></li>
                                <li><a href="#">Our Staff</a></li>
                                <li><a href="#">Testimonials</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">Services</a>
                            <ul className="dl-submenu">
                                <li><a href="/">Services Page</a></li>
                                <li><a href="/">Cosmetic Dentistry</a></li>
                                <li><a href="/">General Dentistry</a></li>
                                <li><a href="/">Restorations</a></li>
                                <li><a href="/">Orthodontics</a></li>
                                <li><a href="/">Oral Surgery</a></li>
                                <li><a href="/">Pediatric Dentistry</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                            <ul className="dl-submenu">
                                <li><a href="/">Blog Default</a></li>
                                <li><a href="/">Blog Full Width</a></li>
                                <li><a href="/">Blog Grid</a></li>
                                <li><a href="/">Blog List</a></li>
                                <li><a href="/">Blog Post</a></li>
                            </ul>
                        </li>
                        <li><a href="/">Elements</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="row footer_item_social">
                <a href="#"><i><FontAwesomeIcon icon="fa fa-facebook"/></i></a>
                <a href="#"><i><FontAwesomeIcon icon="fa fa-twitter"/></i></a>
                <a href="#"><i><FontAwesomeIcon icon="fa fa-google-plus"/></i></a>
                <a href="#"><i><FontAwesomeIcon icon="fa fa-youtube"/></i></a>
                <a href="#"><i><FontAwesomeIcon icon="fa fa-vk"/></i></a>
                <a href="#"><i><FontAwesomeIcon icon="fa fa-yelp"/></i></a>
            </div>
            <div className="row menu_contact">
                <ul>
                    <li><i><FontAwesomeIcon icon="fa fa-map-marker"/></i> <address>27 Castro St, Mountain View, CA 94043</address></li>
                    <li><i><FontAwesomeIcon icon="fa fa-phone"/></i> Phone: + 1 650 123-4000</li>
                    <li><i><FontAwesomeIcon icon="fa fa-envelope-o"/></i>owlthemesnet@gmail.com</li>
                    <li><i><FontAwesomeIcon icon="fa fa-clock-o"/></i> Mon–Fri 10:00 am–6:00 pm</li>
                    <li><i><FontAwesomeIcon icon="fa fa-clock-o"/></i> Sat–Sun 11:00 am– 4:00 pm</li>
                </ul>
            </div>
        </div>
    </nav>
}
export default MobileMenu