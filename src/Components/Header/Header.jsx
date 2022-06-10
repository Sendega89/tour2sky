import Logo from "./headerComponents/Logo";
import HeaderNavigation from "./headerComponents/HeaderNavigation";
import HeaderAuthorization from "./headerComponents/HeaderAuthorization";
import s from "./Header.module.css"
import MobileMenu from "../MobileMenu/MobileMenu";




const Header = () => {
    return <header id="myHeader" className="">
        {/* Header bottom start */}
        <div className=" header">
            <div className="container">
                <div className={`${s.myHeader}`}>
                    {/* LOGO start */}
                   <Logo />
                    {/*LOGO end */}

                    {/* NAVIGATION start */}
                   <HeaderNavigation/>
                    {/* NAVIGATION end */}

                    {/* account not login */}
                   <HeaderAuthorization />
                    {/* account not login */}

                    {/* Mobile Menu start */}
                    <MobileMenu/>
                    {/*<MobileMenu />*/}
                    {/* Mobile Menu end */}
                </div>
            </div>
        </div>
        {/* Header bottom end */}
    </header>

}
export default Header