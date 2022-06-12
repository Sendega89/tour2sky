import './App.css';
import "./font-awesome.css"
import Content from "./Components/Main/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeaderNavbar from "./Components/Header/headerComponents/HeaderMobileMenu";


function App() {
    return (
        <div className="wrapper" id="App">
            <HeaderNavbar pageWrapId={"page-wrap"} outerContainerId={"App"}/>
            <div id="page-wrap" className={"headerMenu"}>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
