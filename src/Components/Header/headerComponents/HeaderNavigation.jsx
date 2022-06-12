import "./headerNavigation.css"
import {NavLink} from "react-router-dom";


const HeaderNavigation = () => {
    return  <div className={"menu"}>
        <nav>
            <ul>
                <li><NavLink to="/Catalog">Catalog</NavLink></li>
                <li><NavLink to="/Balloning">Balloning</NavLink></li>
                <li><NavLink to="/Search">Search</NavLink></li>
                <li><NavLink to="/MyAccount">My account</NavLink></li>
                <li><NavLink to="/Checkout" href="#">Checkout</NavLink></li>
                <li className="drop-item" ><a href="#">Other</a>
                    <ul className="drop-menu">
                        <li className="drop-menu__item"><a className="drop-menu__link" href="#">Paragliding</a></li>
                        <li className="drop-menu__item"><a className="drop-menu__link" href="#">Hand Giding</a></li>
                        <li className="drop-menu__item"><a className="drop-menu__link" href="#">Product</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>


}
export default HeaderNavigation
