import './App.css';
import "./font-awesome.css"
import Content from "./Components/Main/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeaderNavbar from "./Components/Header/headerComponents/HeaderMobileMenu";
import {Route,Routes} from "react-router-dom";
import Catalog from "./Pages/Catalog/Catalog";
import Search from "./Pages/Search/Search";
import Balloning from "./Pages/Balloning/Balloning";

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
                       element={ <Catalog/>}/>
                <Route path="/Search"
                       element={ <Search/>}/>
                <Route path="/Balloning"
                       element={ <Balloning/>}/>
                </Routes>
            </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
