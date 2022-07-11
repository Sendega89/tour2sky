import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import s  from './Carousel.module.css'
//import "../../../App.css";
import img1 from "../../img/rectangle.png";
import img2 from "../../img/rectangle-copy-5.png";
import img3 from "../../img/rectangle-copy-6.png";
import img4 from "../../img/rectangle-copy-7.png";
import {NavLink} from "react-router-dom";


const Carousel = () => {

     const options = {
        loop: true,
        margin: 10,
        items: 3,
        autoplay: false,
         width:"100%",
         height:"100%"
    };
    return (
        <div className="the_best">
        <div className="row">
        <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
                <NavLink to="/">
                    <img src={img1}
                         className={s.carouselImg}
                         alt="item1"/>
                <span>Boston</span>
                </NavLink>
            </div>
            <div>
                <NavLink to="/">
                    <img src={img2}
                         className={s.carouselImg}
                         alt="item2"/>
                <span>Dublin</span>
                </NavLink>
            </div>
            <div>
                <NavLink to="/">
                    <img src={img3}
                         className={s.carouselImg}
                    alt="item3"/>
                <span>Edinburgh</span></NavLink>
            </div>
            <div>
                <NavLink  to="/"> <img
                    className={s.carouselImg}
                    src={img4}
                    alt="item4"
                />
                <span>San Diego</span></NavLink>
            </div>
        </OwlCarousel>
        </div>
        </div>

    )
}
export default Carousel