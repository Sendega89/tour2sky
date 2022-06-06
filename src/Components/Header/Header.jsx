import "./header.css"
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/Object.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return <div className="header__container">
        <Navbar collapseOnSelect expand="lg"  variant="light" className="navContainer">

                <Navbar.Brand href="#home">
                    <Logo alt="logo" width="58" height="78" className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link href="#Catalog">Catalog</Nav.Link>
                        <Nav.Link href="#pricing">Balloning</Nav.Link>
                        <Nav.Link href="#Balloning">Search</Nav.Link>
                        <Nav.Link href="#account">My account</Nav.Link>
                        <Nav.Link href="#Checkout">Checkout</Nav.Link>

                        <NavDropdown title="Other" id="collasible-nav-dropdown" class="text-dark">
                            <NavDropdown.Item href="#action/3.1" >Paragliding</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Hand Giding</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Product</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className="header_login no_login">
                        <div className="login_drop ">
                            <div className="authorization"><span>
                            <i className="fa fa-unlock-alt" aria-hidden="true"></i>Authorization</span>
                            </div>
                        </div>
                    </div>
                </Navbar.Collapse>


        </Navbar>
    </div>

}
export default Header