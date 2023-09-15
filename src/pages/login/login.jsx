import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../reducers/authSlice";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleLogin = () => {
        const userFromServer = {
            //TODO: Validar credenciales con backend
        }
        dispatch(login(userFromServer))
        navigate("/")
    }

    return (
        <div>
            <h1>Login Page</h1>
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
        </div>
    )
}

export default Login;