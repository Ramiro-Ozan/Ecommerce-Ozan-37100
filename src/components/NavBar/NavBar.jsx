import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartwidget from './Cartwidget/Cartwidget';

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Ecommerce OZAN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#aboutUs">About Us</Nav.Link>
                        <NavDropdown title="Accesories" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Shoes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Perfumes</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#signUp">Sign Up</Nav.Link>
                        <Nav.Link eventKey={2} href="#signIn">Sign in</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Cartwidget />
                </Container>
                </Navbar>
        </>
    )
}

export default NavBar