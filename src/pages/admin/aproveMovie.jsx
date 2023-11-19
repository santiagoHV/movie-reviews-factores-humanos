import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Button } from "react-bootstrap"

import { backend_url } from '../../constants'

const AproveMovie = () => {

    const navigate = useNavigate()

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const isAdmin = useSelector(state => state.auth.isAdmin)
    if (!isAuthenticated | !isAdmin) {
        navigate("/")
    }

    const token = useSelector(state => state.auth.user.token)
    const { id } = useParams()
    const [movie, setMovie] = useState()

    useEffect(() => {
        fetch(`${backend_url}/api/movies/${id}`, {
            method: 'GET'
        }).then((response) => response.json())
            .then((data) => {
                console.log(data.published);
                data.published ? navigate("/admin") : setMovie(data)
            })
    }, [id, navigate])

    const publishMovie = () => {
        fetch(`${backend_url}/api/movies/admin/publish/${id}`, {
            method: 'PUT',
            headers: {
                'x-access-token': token
            }
        })
    }

    return (
        <>
            {movie ? (
                <main>
                    {console.log(movie)}
                    <h2>{movie.title}</h2>
                    <img src={movie.image} alt={movie.title} height={400} />
                    <p>
                        <strong>Director:</strong> {movie.director}
                    </p>
                    <p>
                        <strong>Descripción:</strong> <p>{movie.description}</p>
                    </p>
                    <p>
                        <strong>Año:</strong> {movie.year}
                    </p>
                    <p>
                        <strong>Clasificación:</strong> {movie.clasification}
                    </p>
                    <Button onClick={() => {
                        publishMovie()
                        navigate("/admin")
                    }}>Aprobar</Button>
                </main>
            ) : ''}
        </>
    )
}

export default AproveMovie