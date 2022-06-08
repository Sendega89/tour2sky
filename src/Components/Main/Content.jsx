import OwlCarousel from "react-owl-carousel2";
import HeaderTitle from "./ContentComponents/HeaderTitle/HeaderTitle";
import "../../TestingVerstca/style.css";
import Main from "./ContentComponents/Main/Main";


const Content = () => {
    return <div className="content">
            {/* Header title start */}
   <HeaderTitle />
    {/*  Header title end */}

    {/*  Content start */}
    <Main />
    {/*  Content end */}
</div>


}
export default Content