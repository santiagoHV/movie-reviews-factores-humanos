import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Card, Form, Button, FormCheck } from 'react-bootstrap'

import { showAlert } from "../../reducers/notificationSlice"
import { login } from "../../reducers/authSlice";

import { backend_url } from '../../constants'


const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        birthdate: "",
        contract: false
    })

    const handleRegister = () => {
        if (formData.name == "" | formData.lastname == "" | formData.email == "" | formData.birthdate == "") {
            const notification = {
                style: 'danger',
                message: 'Datos invalidos'
            }
            dispatch(showAlert(notification))
            return
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email.match(emailRegex)) {
            const notification = {
                style: 'danger',
                message: 'Correo electronico invalido'
            }
            dispatch(showAlert(notification))
            return
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$&.:,;\-_(){}+$]).{8,}$/gm
        if (!formData.password.match(passwordRegex)) {
            const notification = {
                style: 'danger',
                message: 'Contraseña invalida'
            }
            dispatch(showAlert(notification))
            return
        }
        const dateRegex = /^(200[0-5]|19\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
        if (!formData.birthdate.match(dateRegex)) {
            const notification = {
                style: 'danger',
                message: 'Fecha de nacimiento invalida'
            }
            dispatch(showAlert(notification))
            return
        }
        if (!formData.contract) {
            const notification = {
                style: 'danger',
                message: 'Acepte los terminos y condiciones para continuar'
            }
            dispatch(showAlert(notification))
            return
        }
        fetchUser(formData.name, formData.lastname, formData.email, formData.password, formData.birthdate)
            .then(user => {
                const notification = {
                    style: 'success',
                    message: 'Se ha iniciado sesion'
                }
                const payload = {
                    user: user,
                    admin: false,
                }
                dispatch(login(payload))
                navigate("/")
                dispatch(showAlert(notification))
                dispatch(showAlert(notification))
            }).catch(error => {
                const notification = {
                    style: 'danger',
                    message: String(error)
                }
                dispatch(showAlert(notification))
            })
    }

    const fetchUser = async (name, lastname, email, password, birthdate) => {
        const solicitud = {
            method: 'POST',
            body: {
                "email": email,
                "password": password,
                "name": name,
                "lastname": lastname,
                "birthdate": birthdate,
                "role": "user"
            }
        }
        console.log(solicitud);
        
        const response = await fetch(`${backend_url}/api/auth/signup`, {
            method: 'POST',
            body: solicitud.body
        })
        if (response.status === 200) {
            const data = await response.json()
            return data
        } else if (response.status === 400) {
            throw new Error("El email ya esta registrado")
        } else {
            throw new Error("Error al registrarse")
        }
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
                    <Form.Text id="passwordHelpBlock" muted>
                        La contraseña debe tener por lo menos 8 carácters y contener por lo menos una mayúscula, una minúscula, un digito y un carácter especial
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="register-email">Fecha de nacimiento</Form.Label>
                    <Form.Control type="date" className="form-control" id="register-birthdate" autoComplete="birthdate" onChange={event => setFormData({
                        ...formData,
                        birthdate: event.target.value
                    })} />
                </Form.Group>
                <Form.Check>
                    <FormCheck.Input type={'checkbox'} onChange={event => setFormData({
                        ...formData,
                        contract: !formData.contract
                    })} />
                    <FormCheck.Label>Acepto los {<Link to={"/policies"}>terminos y condiciones</Link>}</FormCheck.Label>
                </Form.Check>
                <Button type="button" className="btn btn-primary" onClick={handleRegister}>Registrarse</Button>
            </Form>
        </Card>
    )
}

export default Register