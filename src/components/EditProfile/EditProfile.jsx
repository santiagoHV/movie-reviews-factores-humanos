import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { backend_url } from '../../constants';
import { useDispatch } from 'react-redux';
import { showAlert } from "../../reducers/notificationSlice"

function EditProfile({ nombre, apellido, fechaNacimiento, correo, id, token }) {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    nombre,
    apellido,
    fechaNacimiento,
    correo,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSaveChanges = async () => {
    const data = {
      name: formValues.nombre,
      lastname: formValues.apellido,
      birthdate: formValues.fechaNacimiento,
      email: formValues.correo
    }
    const response = await fetch(`${backend_url}/api/users/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    let alert = null
    if (response.ok) {
      alert = {
        style: 'success',
        message: 'Información actualizada'
      }
      window.location.reload()
    } else {
      alert = {
        style: 'danger',
        message: 'Error al actualizar'
      }
    }
    dispatch(showAlert(alert))
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Editar información personal
      </Button>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar información personal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="nombre"
                value={formValues.nombre}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellido"
                name="apellido"
                value={formValues.apellido}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFechaNacimiento">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                name="fechaNacimiento"
                value={formValues.fechaNacimiento}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCorreo">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="correo"
                value={formValues.correo}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProfile;
