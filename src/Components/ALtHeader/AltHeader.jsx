import Logo from "../Header/headerComponents/Logo";
import s from "../Header/Header.module.css";
import HeaderAuthorization from "../Header/headerComponents/HeaderAuthorization";
import HeaderNavbar from "../Header/headerComponents/HeaderMobileMenu";


const Header = () => {
    return <header id="myHeader" className="">
        {/* Header bottom start */}
        <div className=" header">
            <div className="container">
                <div className={`${s.myHeader}`}>
                    {/* LOGO start */}
                    {/*<Logo/>*/}
                    {/*LOGO end */}

                    {/* NAVIGATION start */}



                    {/*<HeaderNavbar/>*/}
                    {/* NAVIGATION end */}

                    {/* account not login */}
                   {/* <HeaderAuthorization/>*/}
                    {/* account not login */}

                    {/* Mobile Menu start */}

                    {/*<MobileMenu />*/}
                    {/* Mobile Menu end */}
                </div>
            </div>
        </div>
        {/* Header bottom end */}
    </header>

}
export default Header