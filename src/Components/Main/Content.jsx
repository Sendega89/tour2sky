import HeaderTitle from "./ContentComponents/HeaderTitle/HeaderTitle";
import Main from "./ContentComponents/Main/Main";
import {Helmet} from "react-helmet-async";




const Content = () => {

    return <div className="contentHome">
        <Helmet>
            <title>Tour2sky - Home</title>
            <meta name="description" content="Tour2sky-home" />
        </Helmet>
            {/* Header title start */}
   <HeaderTitle />
    {/*  Header title end */}

    {/*  Content start */}
    <Main />
    {/*  Content end */}
</div>


}
export default Content