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
                <li className="drop-item" ><NavLink to="/404">Other</NavLink>
                    <ul className="drop-menu">
                        <li className="drop-menu__item"><NavLink to="/404" className="drop-menu__link" >Paragliding</NavLink></li>
                        <li className="drop-menu__item"><NavLink to="/404" className="drop-menu__link" >Hand Giding</NavLink></li>
                        <li className="drop-menu__item"><NavLink to="/404" className="drop-menu__link" >Product</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>


}
export default HeaderNavigation
