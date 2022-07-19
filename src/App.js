import './App.css';
import "./font-awesome.css";
import "./responsice.css";
import s from "./App.module.css";
import Content from "./Components/Main/Content";
import Footer from "./Components/Footer/Footer";
import HeaderNavbar from "./Components/Header/headerComponents/HeaderMobileMenu";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import Balloning from "./Pages/Balloning/Balloning";
import Page404 from "./Pages/Page404/Page404";
import MyAccountContainer from "./Pages/MyAccount/PersonalInfoContainer";
import AuthContainer from "./Profiles/AuthContainer";
import { useState} from "react";
import HeaderContainer from "./Components/Header/HeaderContainer";
import CatalogContainer from "./Pages/Catalog/CatalogContainer";
import ProductContainer from "./Pages/Product/ProductContainer";
import CreateAccountContainer from "./Profiles/CreateAccountContainer";
import MyWishlistContainer from "./Pages/MyAccount/MyWishlist/MyWishlistContainer";
import SearchContainer from "./Pages/Search/SearchContainer";
import BookingsContainer from "./Pages/MyAccount/MyBookings/BookingsContainer";
import OrderContainer from "./Pages/Order/OrderContainer";
import AdminContainer from "./Profiles/Admin/AdminContainer";



function App() {
    const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);
    /*const toggleHamburger = () => {
        setIsHamburgerOpened((prev) => !prev);
    };*/
    const closeHamburger = () => {
        setIsHamburgerOpened(false);
    };

    return (<div className={s.testContainer}>
        <div className="wrapper" id="App">
            <HeaderNavbar closeHamburger={closeHamburger}
                          isHamburgerOpened={isHamburgerOpened}
                          pageWrapId={"page-wrap"}
                          outerContainerId={"App"}/>
            <div id="page-wrap" className={"headerMenu"}>

                <HeaderContainer />

                <Routes>
                    <Route exact path="/"
                           element={<Content/>}/>
                    <Route path="catalog"
                           element={<CatalogContainer/>}/>
                    <Route path="balloning"
                           element={ <Balloning/>}/>
                    <Route path="search"
                           element={<SearchContainer/>}/>
                    <Route path="/myAccount"
                           element={<MyAccountContainer/>}/>
                    <Route path="/wishlist"
                           element={<MyWishlistContainer />}/>
                    <Route path="bookings"
                           element={<BookingsContainer />}/>
                    <Route path="order"
                           element={<OrderContainer />}/>
                    <Route path="authorization"
                           element={<AuthContainer/>}/>
                    <Route path="create"
                           element={<CreateAccountContainer/>}/>
                    <Route path="404"
                           element={<Page404/>}/>
                    <Route path="product/:itemId"
                           element={<ProductContainer/>}/>
                    <Route path="admin_cabinet/*"
                           element={<AdminContainer/>}/>
                </Routes>
            </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App
