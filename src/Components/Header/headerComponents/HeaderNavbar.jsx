import React from "react";
import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo  from "../../../assets/img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderNavbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import "../../../TestingVerstca/font-awesome.css";
library.add(fas)


const HeaderNavbar = () => {
    return  <Navbar collapseOnSelect expand="lg" variant="light" className="navBarContainer" bg="menuNavbar">
        <Navbar.Brand href="#home">
            <img src={logo}
                 alt="Tour2Sky"
                 className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Catalog</Nav.Link>
                <Nav.Link href="#Balloning">Balloning</Nav.Link>
                <Nav.Link href="#Search">Search</Nav.Link>
                <Nav.Link href="#account">My account</Nav.Link>
                <Nav.Link href="#account">Checkout</Nav.Link>
                <NavDropdown className="rtn" title="Other" id="collapsible-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1">Paragliding</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Hand Giding</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Product</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Button className="buttonStyleMe btn btn-light">
                {/*<a href="#authorization" className="authorization" data-effect="mfp-zoom-in"></a>*/}
                    <FontAwesomeIcon className={"lock"} icon="fa fa-unlock-alt" aria-hidden="true"></FontAwesomeIcon>
                    <span>Authorization</span>

            </Button>
        </Navbar.Collapse>



    </Navbar>
}
export default HeaderNavbar