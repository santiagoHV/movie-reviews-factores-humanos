import React from "react";
import './Navbar.css'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    return (
        <Navbar className="bg-body-tertiary navbar">
            <Container>
                <Navbar.Brand as={Link} to="/">Movie Reviews</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        {isAuthenticated ? (
                            <Nav.Link as={Link} to="/logout">Cerrar Sesion</Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="/login">Iniciar Sesion</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar;