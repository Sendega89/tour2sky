import "../../TestingVerstca/style.css"
import Logo from "./headerComponents/Logo";
import HeaderNavigation from "./headerComponents/HeaderNavigation";
import HeaderAuthorization from "./headerComponents/HeaderAuthorization";
import s from "./Header.module.css";
//import MobileMenu from "./headerComponents/MobileMenu";


const Header = () => {
    return <header id="myHeader" >
        {/* Header bottom start */}
        <div className="row header">
            <div className="container">
                <div className={s.row}>
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
                    {/*<MobileMenu />*/}
                    {/* Mobile Menu end */}
                </div>
            </div>
        </div>
        {/* Header bottom end */}
    </header>

}
export default Header