import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import s from "./Carousel.module.css"
import "../../../App.css";


const Carousel = (props) => {
     const options = {
        loop: true,
        margin: props.margin,
        items: props.items,
        autoplay: false,
    };
    return (
        <OwlCarousel className={`owl-theme ${s.theme}`} {...options}>
            <div className={`item ${s.item}`}>
                <img
                    src={props.img1}
                    alt="item1"
                />
                <span>Boston</span>
            </div>
            <div className={`item ${s.item}`}>
                <img
                    src={props.img2}
                    alt="item2"
                />
                <span>Dublin</span>
            </div>
            <div className={`item ${s.item}`}>
                <img
                    src={props.img3}
                    alt="item3"
                />
                <span>Edinburgh</span>
            </div>
            <div className={`item ${s.item}`}>
                <img
                    src={props.img4}
                    alt="item4"
                />
                <span>San Diego</span>
            </div>
        </OwlCarousel>
    )
}
export default Carousel