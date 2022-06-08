import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from  "../../../../../assets/img/rectangle.png";
import img2 from  "../../../../../assets/img/rectangle-copy-5.png";
import img3 from  "../../../../../assets/img/rectangle-copy-6.png";
import img4 from  "../../../../../assets/img/rectangle-copy-7.png";


const Carousel = () => {
     const options = {
        loop: true,
        margin: 10,
        items: 3,
        autoplay: false
    };
    return (
        <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
                <img
                    src={img1}
                    alt="road"
                />
                <span>Boston</span>
            </div>
            <div className="item">
                <img
                    src={img2}
                    alt="road4"
                />
                <span>Dublin</span>
            </div>
            <div className="item">
                <img
                    src={img3}
                    alt="sunrise"
                />
                <span>Edinburgh</span>
            </div>
            <div className="item">
                <img
                    src={img4}
                    alt="road2"
                />
                <span>San Diego</span>
            </div>
        </OwlCarousel>


    /*<div className="tab_content" id="tab1">
        <div className="row">
            <OwlCarousel className="owl_best owl-carousel owl-theme">
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle.png"/>
                        <span>Boston</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-5.png"/>
                        <span>Dublin</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-6.png"/>
                        <span>Edinburgh</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-7.png"/>
                        <span>San Diego</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle.png"/>
                        <span>Boston</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-5.png"/>
                        <span>Dublin</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-6.png"/>
                        <span>Edinburgh</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-7.png"/>
                        <span>San Diego</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle.png"/>
                        <span>Boston</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-5.png"/>
                        <span>Dublin</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-6.png"/>
                        <span>Edinburgh</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-7.png"/>
                        <span>San Diego</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle.png"/>
                        <span>Boston</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-5.png"/>
                        <span>Dublin</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-6.png"/>
                        <span>Edinburgh</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-7.png"/>
                        <span>San Diego</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle.png"/>
                        <span>Boston</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-5.png"/>
                        <span>Dublin</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-6.png"/>
                        <span>Edinburgh</span>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <img src="../assets/img/rectangle-copy-7.png"/>
                        <span>San Diego</span>
                    </a>
                </div>
            </OwlCarousel>
        </div>

    </div>*/
    )
}
export default Carousel