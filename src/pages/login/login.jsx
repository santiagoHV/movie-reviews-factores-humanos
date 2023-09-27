import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Form, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { login } from "../../reducers/authSlice";
import { showAlert } from "../../reducers/notificationSlice"

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleLogin = () => {
        fetchUser(formData.email, formData.password)
            .then(user => {
                const notification = {
                    style: 'success',
                    message: 'Se ha iniciado sesion'
                }
                dispatch(login(user))
                navigate("/")
                dispatch(showAlert(notification))
            }).catch(error => {
                const notification = {
                    style: 'danger',
                    message: String(error)
                }
                dispatch(showAlert(notification))
            })
    }

    const fetchUser = (email, password) => {
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
        return delay(150)
            .then(() => {
                return (email != '' && password != '') ? { status: 201, user: { email: email, token: 'token' } } : { status: 400, message: 'Usuario no encontrado' }
            })
            .then((response) => {
                if (response.status === 201) {
                    return response.user
                } else if (response.status === 400) {
                    throw new Error("Usuario no encontrado")
                } else {
                    throw new Error("Error en la solicitud")
                }
            })
    }

    return (
        <Card style={{ maxWidth: '400px', margin: '50px auto', padding: '50px' }}>
            <Card.Title style={{ marginBottom: '20px' }}>Iniciar Sesion</Card.Title>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className="form-label" htmlFor="login-email">Correo electronico</Form.Label>
                    <Form.Control type="email" className="form-control" id="login-email" autoComplete="username" onChange={event => setFormData({
                        ...formData,
                        email: event.target.value
                    })} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="form-label" htmlFor="login-password">Contraseña</Form.Label>
                    <Form.Control type="password" className="form-control" id="login-password" autoComplete="current-password" onChange={event => setFormData({
                        ...formData,
                        password: event.target.value
                    })} />
                </Form.Group>
                <Button type="button" className="btn btn-primary" onClick={handleLogin}>Iniciar Sesion</Button>
            </Form>
            <Link to={"/admin"}>¿Eres administrador?</Link>
        </Card>
    )
}

export default Login;