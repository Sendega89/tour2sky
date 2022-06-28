import HeaderTitle from "./ContentComponents/HeaderTitle/HeaderTitle";
import Main from "./ContentComponents/Main/Main";



const Content = () => {
    return <div className="contentHome">
            {/* Header title start */}
   <HeaderTitle />
    {/*  Header title end */}

    {/*  Content start */}
    <Main />
    {/*  Content end */}
</div>


}
export default Content