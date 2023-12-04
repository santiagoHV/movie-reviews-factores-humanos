import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Card } from 'react-bootstrap'

import LoadingIcon from '../../components/loadingIcon/loadingIcon'
import { showAlert } from '../../reducers/notificationSlice'
import { backend_url } from "../../constants"

const EditMovie = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { user } = useSelector(state => state.auth)
    const { id } = useParams()

    const [movieData, setMovieData] = useState({
        title: null,
        director: null,
        description: null,
        clasification: null,
        year: null,
        image: null,
        categories: []
    })
    useEffect(() => {
        fetch(`${backend_url}/api/movies/${id}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                data.categories = data.categories.map(category => `${category.MovieCategory.categoryId}`)
                setMovieData(data)
            })
    }, [id, navigate])

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch(`${backend_url}/api/categories`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => setCategories(data))
    }, [setCategories])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const notification = {
            style: "",
            message: ""
        }
        const response = await fetch(`${backend_url}/api/movies/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.token
            },
            body: JSON.stringify(movieData)
        })

        if (response.ok) {
            notification.style = 'success'
            notification.message = 'Película actualizada'
        } else {
            notification.style = 'danger'
            notification.message = 'Error al actualizar película'
        }
        dispatch(showAlert(notification))
        navigate(`/admin/movie/${id}`)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setMovieData({
            ...movieData,
            [name]: value
        })
    }
    const addCategory = (event) => {
        const { name, checked } = event.target
        let updated_categories = movieData.categories
        if (checked && !movieData.categories.includes(name)) {
            updated_categories = [...updated_categories, name]
        } else if (!checked && movieData.categories.includes(name)) {
            updated_categories = updated_categories.filter((category) => category !== name)
        }
        setMovieData({
            ...movieData,
            categories: updated_categories
        })
    }

    if (categories.length > 0 && movieData.title) return (
        <Card style={{ maxWidth: '700px', margin: '50px auto', padding: '50px' }}>
            <Card.Title className='nm-title'>Editar Pelicula</Card.Title>
            <Form className='form-conteiner-nm' onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="nm-title">Titulo</Form.Label>
                    <Form.Control type="text" className="form-control" id="nm-title" name='title' onChange={handleChange} required value={movieData.title} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="nm-description">Descripción / Sinopsis</Form.Label>
                    <Form.Control as="textarea" maxLength={300} name='description' onChange={handleChange} required value={movieData.description} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="nm-year">Año de lanzamiento</Form.Label>
                    <Form.Control type="number" min='1900' max='2023' className="form-control" id="nm-year" name='year' onChange={handleChange} required value={movieData.year} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="nm-director">Director</Form.Label>
                    <Form.Control type="text" className="form-control" id="nm-director" name='director' onChange={handleChange} required value={movieData.director} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Generos</Form.Label>
                    {categories.map((category, index) => {
                        if (category.name != null) return <Form.Check key={index} type='checkbox' label={category.name} name={category.id} onChange={addCategory} checked={movieData.categories.includes(`${category.id}`)} />
                    })}
                </Form.Group>
                <Form.Group>
                    <Form.Label className="form-label" htmlFor="nm-image">Imagen de portada</Form.Label>
                    <Form.Control type="text" className="form-control" id="nm-image" name='image' onChange={handleChange} required value={movieData.image} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Clasificación</Form.Label>
                    <Form.Select name='clasification' onChange={handleChange} required value={movieData.clasification||'G'}>
                        <option value='G'>G - Todas las edades</option>
                        <option value='PG'>PG - Se sugiere la compañía de un adulto</option>
                        <option value='PG-13'>PG-13 - No apto para menores de 13 años</option>
                        <option value='R'>R - Contiene material para adultos</option>
                        <option value='NC-17' selected>NC-17 - Solo adultos</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Text id="textApprovalPolicy" style={{ textAlign: 'justify' }}>
                        La película propuesta estará sujeta a aprobación por parte de los administradores del sistema. Este proceso puede demorar hasta 48 horas. Agradecemos tu paciencia y colaboración.
                    </Form.Text>
                </Form.Group>
                <Form.Group className='text-center'>
                    <Button type="submit" className="btn btn-primary btn-nm-add">
                        Actualizar
                    </Button>
                    <Button variant='secondary' onClick={() => navigate(`/admin/movie/${id}`)}>Cancelar</Button>
                </Form.Group>
            </Form>
        </Card>
    )
    return <LoadingIcon />
}

export default EditMovie