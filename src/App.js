import './App.css';
import "./font-awesome.css";
import "./responsice.css";
import Content from "./Components/Main/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeaderNavbar from "./Components/Header/headerComponents/HeaderMobileMenu";
import {Route,Routes} from "react-router-dom";
import Catalog from "./Pages/Catalog/Catalog";
import Search from "./Pages/Search/Search";
import Balloning from "./Pages/Balloning/Balloning";
import Page404 from "./Pages/Page404/Page404";
import MyAccount from "./Pages/MyAccount/MyAccount";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
    return (
        <div className="wrapper" id="App">
            <HeaderNavbar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
            <div id="page-wrap" className={"headerMenu"}>
                <Header/>
            <div className="content">
                <Routes>
                <Route path="/"
                       element={ <Content/>}/>
                <Route path="/Catalog"
                       element={ <Catalog isOpen={false}/>}/>
                    <Route path="/Balloning"
                           element={ <Balloning isOpen={true}/>}/>
                <Route path="/Search"
                       element={ <Search/>}/>
                    <Route path="/MyAccount"
                       element={ <MyAccount/>}/>
                    <Route path="/Checkout"
                       element={ <Checkout/>}/>

                <Route path="/404"
                       element={<Page404/>}/>
                </Routes>
            </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
