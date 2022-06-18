import Logo from "./headerComponents/Logo";
import HeaderNavigation from "./headerComponents/HeaderNavigation";
import HeaderAuthorization from "./headerComponents/HeaderAuthorization";
import s from "./Header.module.css"



const Header = () => {
    return <header id="myHeader" className="">
        {/* Header bottom start */}
        <div className="row header">
            <div className="container">
                <div className="row">
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

                </div>
            </div>
            </div>
        </div>
        {/* Header bottom end */}
    </header>

}
export default Header