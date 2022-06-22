import './App.css';
import "./font-awesome.css";
import "./responsice.css";
import Content from "./Components/Main/Content";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeaderNavbar from "./Components/Header/headerComponents/HeaderMobileMenu";
import {Route, Routes} from "react-router-dom";
import Catalog from "./Pages/Catalog/Catalog";
import Search from "./Pages/Search/Search";
import Balloning from "./Pages/Balloning/Balloning";
import Page404 from "./Pages/Page404/Page404";
import Checkout from "./Pages/Checkout/Checkout";
import Authorization from "./Profiles/Authorization";
import Product from "./Pages/Product/Product";
import MyWishlist from "./Pages/MyAccount/MyWishlist/MyWishlist";
import MyBookings from "./Pages/MyAccount/MyBookings/MyBookings";
import MyAccountContainer from "./Pages/MyAccount/MyAccountContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import CreateAccount from "./Profiles/CreateAccount";
import AuthContainer from "./Profiles/AuthContainer";


function App() {


    return (
        <div className="wrapper" id="App">
            <HeaderNavbar isOpen={true}  pageWrapId={"page-wrap"} outerContainerId={"App"}/>
            <div id="page-wrap" className={"headerMenu"}>
                <Header/>
                <Routes>
                    <Route path="/"
                           element={<Content/>}/>
                    <Route path="/Catalog"
                           element={<Catalog/>}/>
                    <Route path="/Balloning"
                           element={<Balloning/>}/>
                    <Route path="/Search"
                           element={<Search/>}/>
                    <Route path="/MyAccount"
                           element={<MyAccountContainer/>}/>
                    <Route path="/wishlist"
                           element={<MyWishlist/>}/>
                    <Route path="/bookings"
                           element={<MyBookings/>}/>
                    <Route path="/Checkout"
                           element={<Checkout/>}/>
                    <Route path="/authorization"
                           element={<AuthContainer/>}/>
                    <Route path="/create"
                           element={<CreateAccount/>}/>
                    <Route path="/404"
                           element={<Page404/>}/>
                    <Route path="/product/1"
                           element={<Product/>}/>
                </Routes>

                <Footer/>
            </div>
        </div>
    );
}

export default compose(
    connect())(App);
