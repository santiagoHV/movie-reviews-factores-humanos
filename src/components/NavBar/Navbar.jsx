import { useState } from "react";
import './Navbar.css';
import { Navbar, Container, Nav, Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import appName from "../../assets/appName.svg";

const NavBar = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const isAdmin = useSelector(state => state.auth.isAdmin)
    const [expanded, setExpanded] = useState(false);
    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src={logo}
                        width="45"
                        height="45"
                        alt="Logo"
                    />&ensp;
                    <img
                        src={appName}
                        width="120"
                        height="45"
                        alt="App Name"
                    />
                </Navbar.Brand>
                <Navbar.Toggle onClick={toggleNavbar} />
                <Navbar.Collapse>
                    <Nav>
                        <div id="navbar-main-content">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Perfil</Nav.Link>
                        </div>
                        <div id="navbar-alt-content">
                            <Form>
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control
                                            type="text"
                                            placeholder="Titulos, generos"
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button type="submit">Buscar</Button>
                                    </Col>
                                </Row>
                            </Form>
                            {isAuthenticated&&isAdmin ? (<Nav.Link as={Link} to={"/admin"}>Portal de administración</Nav.Link>) : (<></>)}
                            {isAuthenticated ? (
                                <Nav.Link as={Link} to="/logout">Cerrar Sesión</Nav.Link>
                            ) : (
                                <Nav.Link as={Link} to="/login">Iniciar Sesión</Nav.Link>
                            )}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
