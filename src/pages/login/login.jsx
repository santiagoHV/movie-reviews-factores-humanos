import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Form, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { login } from "../../reducers/authSlice";
import { showAlert } from "../../reducers/notificationSlice"
import { backend_url } from '../../constants'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false);
    const [fetching, setFetching] = useState(false)

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleLogin = () => {
        setFetching(true)
        fetchUser(formData.email, formData.password, formData.admin)
            .then(user => {
                const notification = {
                    style: 'success',
                    message: 'Se ha iniciado sesion'
                }
                const payload = {
                    user: user,
                    admin: user.role === 'admin' ? true : false,
                }
                dispatch(login(payload))
                navigate("/")
                dispatch(showAlert(notification))
            }).catch(error => {
                const notification = {
                    style: 'danger',
                    message: String(error)
                }
                dispatch(showAlert(notification))
            }).finally(()=>setFetching(false))
    }

    const fetchUser = async (email, password) => {
        const response = await fetch(`${backend_url}/api/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.status === 201) {
            const data = await response.json();
            return data;
        } else if (response.status === 400) {
            throw new Error('Usuario no encontrado');
        } else if (response.status === 401) {
            throw new Error('Contraseña incorrecta');
        } else {
            throw new Error('Error al iniciar sesión');
        }
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
                    <Form.Control type={showPassword ? 'text' : 'password'} className="form-control" id="login-password" autoComplete="current-password" onChange={event => setFormData({
                        ...formData,
                        password: event.target.value
                    })} />
                    <Button
                        variant="outline-secondary"
                        onClick={handlePasswordToggle}
                        className="mt-2"
                    >
                        {showPassword ? 'Ocultar' : 'Mostrar'}
                    </Button>
                </Form.Group>

                <Button type="button" className="btn btn-primary" onClick={handleLogin} disabled={fetching}>Iniciar Sesion</Button>
            </Form>
            <Form.Text muted>
                ¿Aún no tienes una cuenta? <Link to={"/register"}>Registrate</Link>
            </Form.Text>
        </Card>
    )
}

export default Login;