import "./headerNavigation.css"


const HeaderNavigation = () => {
    return  <div className={"menu"}>
        <nav>
            <ul>
                <li><a href="#">Catalog</a></li>
                <li><a href="#">Balloning</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">My account</a></li>
                <li><a href="#">Checkout</a></li>
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
