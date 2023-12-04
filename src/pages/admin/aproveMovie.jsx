import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Button } from "react-bootstrap"

import { backend_url } from '../../constants'
import LoadingIcon from "../../components/loadingIcon/loadingIcon"
import poster from '../../assets/poster-placeholder.png'

const AproveMovie = () => {
    const navigate = useNavigate()

    const { isAuthenticated, isAdmin, user } = useSelector(state => state.auth)
    const token = user.token
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [imageSrc, setImageSrc] = useState('')

    if (!isAuthenticated | !isAdmin) {
        navigate("/")
    }

    useEffect(() => {
        fetch(`${backend_url}/api/movies/${id}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                data.published ? navigate("/admin") : setMovie(data)
                setImageSrc(data.image)
            })
    }, [id, navigate])

    const publishMovie = async (aproved) => {
        if (aproved) {
            await fetch(`${backend_url}/api/movies/admin/publish/${id}`, {
                method: 'PUT',
                headers: {
                    'x-access-token': token
                }
            })
        } else {
            await fetch(`${backend_url}/api/movies/admin/reject/${id}`, {
                method: 'PUT',
                headers: {
                    'x-access-token': token
                }
            })
        }
        navigate("/admin")
    }

    const handleImageError = () => {
        setImageSrc(poster)
    }

    return (
        <>
            {movie ? (
                <main style={{ margin: "50px 4%" }}>
                    <h2>{movie.title}</h2>
                    <img src={imageSrc} alt={movie.title} width={300} onError={handleImageError} />
                    <section>
                        <strong>Director:</strong> {movie.director}<br/>
                        <strong>Descripción:</strong> {movie.description}<br/>
                        <strong>Año:</strong> {movie.year}<br/>
                        <strong>Genero:</strong> {movie.categories.map(category => category.name).join(', ')}<br/>
                        <strong>Clasificación:</strong> {movie.clasification}<br/>
                    </section>
                    <Button variant="primary" onClick={() => { publishMovie(true) }}>Aprobar</Button>
                    <Button variant="danger" onClick={() => { publishMovie(false) }}>Rechazar</Button>
                    <Button variant="secondary" onClick={() => { navigate(`/admin/edit/movie/${id}`) }}>Editar</Button>
                </main>
            ) : <LoadingIcon />}
        </>
    )
}

export default AproveMovie