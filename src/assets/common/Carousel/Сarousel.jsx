import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";

import "../../../App.css";
import img1 from "../../img/rectangle.png";
import img2 from "../../img/rectangle-copy-5.png";
import img3 from "../../img/rectangle-copy-6.png";
import img4 from "../../img/rectangle-copy-7.png";

const Carousel = () => {
     const options = {
        loop: true,
        margin: 10,
        items: 3,
        autoplay: false,
    };
    return (
        <div className="the_best">
        <div className="row">
        <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
                <a href="#">
                    <img src={img1}
                         alt="item1"/>
                <span>Boston</span>
                </a>
            </div>
            <div>
                <a href="#">
                    <img src={img2}
                         alt="item2"/>
                <span>Dublin</span>
                </a>
            </div>
            <div>
                <a href="">
                    <img src={img3}
                    alt="item3"/>
                <span>Edinburgh</span></a>
            </div>
            <div>
                <a href=""> <img
                    src={img4}
                    alt="item4"
                />
                <span>San Diego</span></a>
            </div>
        </OwlCarousel>
        </div>
        </div>

    )
}
export default Carousel