import ServiceStart from "./MainComponents/ServiceStart";
import Rectangle from "./MainComponents/Rectangle";
import About from "./MainComponents/About";
import Carousel from "../../../../assets/common/Carousel/Сarousel";
import img1 from "../../../../assets/img/rectangle.png";
import img2 from "../../../../assets/img/rectangle-copy-5.png";
import img3 from "../../../../assets/img/rectangle-copy-6.png";
import img4 from "../../../../assets/img/rectangle-copy-7.png";

const Main = () => {
    return <main className={"main"}>
        {/* Service start */}
        <ServiceStart/>
        {/* Service end */}
        <div className="container">
            <div className="row tabs">
                {/* Start Tabs Title */}
                <div className="tabs_l">
                    <h3>Top sights for balloing</h3>
                </div>
                {/* End Tabs Title */}
                <Carousel img1={img1}
                          img2={img2}
                          img3={img3}
                          img4={img4}/>

            </div>
        </div>
        {/* End Tabs Container */}

        {/* rectangle start */}
        <Rectangle/>
        {/* rectangle end */}

        {/* rectangle start */}
        <About/>
        {/* rectangle end */}
    </main>
}
export default Main