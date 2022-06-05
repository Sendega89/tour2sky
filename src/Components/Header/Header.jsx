import s from "./Header.module.css"
import logo from "../../assets/logoHeader.svg"
const Header = () => {
    return <div className={s.header}>
        <div className="header-logo">
                <img src={logo} alt="logoImage"/>
        </div>
        <div className={s.navigation}>
            <ul className={s.navigation_block}>
                <li className={s.navigation_item}>Catalog</li>
                <li className="navigation_item">Balloning</li>
                <li className="navigation_item">Search</li>
                <li className="navigation_item">My account</li>
                <li className="navigation_item">Checkout</li>
                <li className="navigation_item">Other</li>
            </ul>
        </div>
        <div className="avtorization">
            <button className="avtorirazation_button">Avtorization</button>
        </div>
    </div>

}
export default Header