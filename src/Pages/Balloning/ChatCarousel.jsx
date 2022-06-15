import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import oval from "../../assets/img/oval.png"
import rewiev from "../../assets/img/review_icon.png"
import "./../../App.css";

const ChatCarousel = () => {
    const options = {
        loop: true,
        items: 1,
        /*autoplay: false,*/
    };
    return (
        <OwlCarousel className="owl_faq owl-carousel owl-theme" {...options}>
            <div className="item">
                <div className="row review">
                    <div className="row review_top">
                        <div className="review_top_l"><img src={oval}/></div>
                        <div className="review_top_r">How to be ready?</div>
                    </div>
                    <div className="row review_niz">
                        <div className="review_niz_l">Just prepare all your warm clothes and be ready to
                            film your «best ever» flight. Althow please, double check your flight time
                            and
                            come a bit earlier to have possibility to listen for our short instructions
                        </div>
                        <div className="review_niz_r"><img src={rewiev}/></div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="row review">
                    <div className="row review_top">
                        <div className="review_top_l"><img src={oval}/></div>
                        <div className="review_top_r">Ola olo ololo?</div>
                    </div>
                    <div className="row review_niz">
                        <div className="review_niz_l">Just prepare all your warm clothes and be ready to
                            film your «best ever» flight. Althow please, double check your flight time
                            and
                            come a bit earlier to have possibility to listen for our short instructions
                        </div>
                        <div className="review_niz_r"><img src={rewiev}/></div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="row review">
                    <div className="row review_top">
                        <div className="review_top_l"><img src={oval}/></div>
                        <div className="review_top_r">How to be ready?</div>
                    </div>
                    <div className="row review_niz">
                        <div className="review_niz_l">Just prepare all your warm clothes and be ready to
                            film your «best ever» flight. Althow please, double check your flight time
                            and
                            come a bit earlier to have possibility to listen for our short instructions
                        </div>
                        <div className="review_niz_r"><img src={rewiev}/></div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}
export default ChatCarousel

