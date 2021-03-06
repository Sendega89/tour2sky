import ServiceStart from "./MainComponents/ServiceStart";
import Rectangle from "./MainComponents/Rectangle";
import About from "./MainComponents/About";
import Carousel from "../../../../assets/common/Carousel/Сarousel";



const Main = () => {
    return <main>
        {/* Service start */}
        <ServiceStart/>
        {/* Service end */}
        <div className="container">
            <div className="row tabs">
                {/* Start Tabs Title */}
                <div className="tabs_l">
                    <h3>Top sights for balloning</h3>
                </div>
                {/* End Tabs Title */}
                    <Carousel />

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