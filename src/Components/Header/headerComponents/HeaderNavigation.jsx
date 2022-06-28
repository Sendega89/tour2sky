import "./headerNavigation.css"
import {NavLink} from "react-router-dom";


const HeaderNavigation = () => {
    return  <div className={"menu"}>
        <nav>
            <ul>
                <li><NavLink to="/catalog">Catalog</NavLink></li>
                <li><NavLink to="/balloning">Balloning</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/myAccount">My account</NavLink></li>
                <li><NavLink to="/checkout" href="#">Checkout</NavLink></li>
                <li className="drop-item" ><NavLink to="/404">Other</NavLink>
                    <ul className="drop-menu">
                        <li className="drop-menu__item"><NavLink to="/404" className="drop-menu__link" >Paragliding</NavLink></li>
                        <li className="drop-menu__item"><NavLink to="/404" className="drop-menu__link" >Hand Giding</NavLink></li>
                        <li className="drop-menu__item"><NavLink to="/product/1" className="drop-menu__link" >Product</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>


}
export default HeaderNavigation
