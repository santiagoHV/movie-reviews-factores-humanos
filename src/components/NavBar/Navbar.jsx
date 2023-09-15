import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from "react-redux";

const NavBar = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Movie Reviews</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {isAuthenticated ? (
                            <a href="/logout">Logout</a>
                        ) : (
                            <a href="/login">Login</a>
                        )}
                    </Navbar.Text>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar;