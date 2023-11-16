import { Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './NewMovie.css';

const NewMovie = () => {

    return (
        <Card style={{ maxWidth: '700px', margin: '50px auto', padding: '50px' }}>
            <Card.Title className='nm-title'>Nueva Pelicula</Card.Title>
            <Form className='form-conteiner-nm'>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="nm-title">Titulo</Form.Label>
                    <Form.Control type="text" className="form-control" id="nm-title" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="nm-description">Descripción / Sinopsis</Form.Label>
                    <Form.Control as="textarea" maxLength={240}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="nm-year">Año de lanzamiento</Form.Label>
                    <Form.Control type="number" className="form-control" id="nm-year" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="nm-director">Director</Form.Label>
                    <Form.Control type="text" className="form-control" id="nm-director" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="nm-genre">Género Cinematográfico</Form.Label>
                    <Form.Control type="text" className="form-control" id="nm-genre" />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="nm-image">Imagen de portada</Form.Label>
                    <Form.Control type="text" className="form-control" id="nm-image" />
                </Form.Group>
                <Form.Group>
                    <Form.Text id="textApprovalPolicy" style={{ textAlign: 'justify' }}>
                        La película propuesta estará sujeta a aprobación por parte de los administradores del sistema. Este proceso puede demorar hasta 48 horas. Agradecemos tu paciencia y colaboración.
                    </Form.Text>
                </Form.Group>
                <Form.Group className='text-center'>
                    <Link to="/movie">
                        <Button type="button" className="btn btn-primary btn-nm-add">
                            Agregar
                        </Button>
                    </Link>
                </Form.Group>
            </Form>
        </Card>
    )
}

export default NewMovie