import { useState } from "react";
import { Navbar, Container, Nav, Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import appName from "../../assets/appName.svg";
import './Navbar.css';
import { useEffect } from "react";
import { backend_url } from '../../constants'

const NavBar = () => {
    const navigate = useNavigate()
    const { user, isAuthenticated, isAdmin } = useSelector(state => state.auth)
    const [userId, setUserId] = useState()
    const [searchTerms, setSearchTerms] = useState("")
    useEffect(() => {
        const fetchUserId = async (email) => {
            try {
                const response = await fetch(`${backend_url}/api/users/getId/${email}`)
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                setUserId(data.id)
            }
            catch (e) {
                console.log(e);
            }
        }
        user ? user.email ? (fetchUserId(user.email)) : null : null
    }, [user])
    const [expanded, setExpanded] = useState(false);
    const toggleNavbar = () => {
        setExpanded(!expanded);
    };
    const handleSearch = async (e) => {
        e.preventDefault()
        navigate(`search?terms=${encodeURIComponent(searchTerms)}`)
    }

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
                            {
                                isAuthenticated && userId ? (<Nav.Link as={Link} to={`/profile/${userId}`}>Perfil</Nav.Link>) : ''
                            }
                        </div>
                        <div id="navbar-alt-content">
                            <Form onSubmit={handleSearch}>
                                <Row>
                                    <Col xs="auto">
                                        <Form.Control
                                            type="text"
                                            placeholder="Titulos, generos"
                                            onChange={(e) => setSearchTerms(e.target.value)}
                                        />
                                    </Col>
                                    <Col xs="auto">
                                        <Button type="submit">Buscar</Button>
                                    </Col>
                                </Row>
                            </Form>
                            {isAuthenticated && isAdmin ? (<Nav.Link as={Link} to={"/admin"}>Portal de administración</Nav.Link>) : (<></>)}
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
