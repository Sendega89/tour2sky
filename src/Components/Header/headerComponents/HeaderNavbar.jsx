import React from "react";
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown,Offcanvas} from "react-bootstrap";
import   "./HeaderNavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Logo from "./Logo";
import HeaderAuthorization from "./HeaderAuthorization";

library.add(fas)


const HeaderNavbar = () => {
    return  <>
    {['xl'].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} className="mb-3">

                <Navbar.Brand href="#"><Logo/></Navbar.Brand>


            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end">

                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3 menu">

                            <nav>
                            <ul>
                            <Nav.Link href="#action1"><li><a href="#">Catalog</a></li></Nav.Link>
                            <Nav.Link href="#action2"><li><a href="#">Balloning</a></li></Nav.Link>
                            <Nav.Link href="#action2"><li><a href="#">Search</a></li></Nav.Link>
                            <Nav.Link href="#action2"><li><a href="#">My account</a></li></Nav.Link>
                            <Nav.Link href="#action2"><li className="drop-item" ><a href="#">Other</a>
                                <ul className="drop-menu">
                                    <li className="drop-menu__item"><a className="drop-menu__link" href="#">Paragliding</a></li>
                                    <li className="drop-menu__item"><a className="drop-menu__link" href="#">Hand Giding</a></li>
                                    <li className="drop-menu__item"><a className="drop-menu__link" href="#">Product</a></li>
                                </ul>
                            </li>  </Nav.Link>
                            </ul>
                            </nav>







                                {/*<NavDropdown.Divider />*/}
                        </Nav>
                        < HeaderAuthorization />
                    </Offcanvas.Body>

                </Navbar.Offcanvas>

        </Navbar>
    ))}
</>
}
export default HeaderNavbar