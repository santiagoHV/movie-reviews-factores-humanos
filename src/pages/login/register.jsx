import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Form, Button } from 'react-bootstrap'

import { backend_url } from '../../constants'

const Register = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        birthdate: ""
    })

    const handleRegister = () => {

    }

    const fetchUser = async (name, lastname, email, password, birthdate) => {
        const data = await fetch(`${backend_url}/api/auth/signup`,{
            method: 'POST',
            body:{
                "email": email,
                "password": password,
                "name": name,
                "lastname": lastname,
                "birthdate": birthdate,
                "role": "admin"
            }
        })
    }

    return (
        <Card style={{ maxWidth: '400px', margin: '50px auto', padding: '50px' }}>
            <Card.Title style={{ marginBottom: '20px' }}>Registro</Card.Title>
            <Form>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="register-name">Nombre</Form.Label>
                    <Form.Control type="text" className="form-control" id="register-name" onChange={event => setFormData({
                        ...formData,
                        name: event.target.value
                    })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="register-lastname">Apellido</Form.Label>
                    <Form.Control type="text" className="form-control" id="register-lastname" onChange={event => setFormData({
                        ...formData,
                        lastname: event.target.value
                    })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="register-email">Correo electronico</Form.Label>
                    <Form.Control type="email" className="form-control" id="register-email" autoComplete="email" onChange={event => setFormData({
                        ...formData,
                        email: event.target.value
                    })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="register-email">Contraseña</Form.Label>
                    <Form.Control type="password" className="form-control" id="register-password" autoComplete="password" onChange={event => setFormData({
                        ...formData,
                        password: event.target.value
                    })} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="register-email">Fecha de nacimiento</Form.Label>
                    <Form.Control type="date" className="form-control" id="register-birthdate" autoComplete="birthdate" onChange={event => setFormData({
                        ...formData,
                        birthdate: event.target.value
                    })} />
                </Form.Group>
                <Button type="button" className="btn btn-primary" onClick={handleRegister}>Registrarse</Button>
            </Form>
        </Card>
    )
}

export default Register