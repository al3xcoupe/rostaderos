import * as React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import '../App.css'

function NavBarResponsive() {
    return (
        <Navbar className="navbar1" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Link 1</Nav.Link>
                        <Nav.Link href="#pricing">Link 2</Nav.Link>
                        <Nav.Link href="#pricing">Link 3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBarResponsive;