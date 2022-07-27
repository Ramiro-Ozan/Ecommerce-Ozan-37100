import { Link, NavLink } from 'react-router-dom';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from './Cartwidget/Cartwidget';

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/'>Ecommerce OZAN</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/category/shirts'>Shirts</NavLink>
                        <NavLink to='/category/boots'>Boots</NavLink>
                        <NavLink to='/category/perfume'>Perfumes</NavLink>
                    </Nav>
                    <Nav>
                    <NavLink to='/category/signIn'>Sign In</NavLink>
                        <NavLink to='/category/SignUp'>Sign Up</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                    <Cartwidget />
                </Container>
                </Navbar>
        </>
    )
}

export default NavBar