import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Button } from "react-bootstrap"

import { backend_url } from '../../constants'
import LoadingIcon from "../../components/loadingIcon/loadingIcon"

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
                <main style={{margin:"50px 4%"}}>
                    {console.log(movie)}
                    <h2>{movie.title}</h2>
                    <img src={movie.image} alt={movie.title} width={300} />
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
                        <strong>Genero:</strong> {movie.categories.map(category => category.name).join(', ')}
                    </p>
                    <Button onClick={() => {
                        publishMovie()
                        navigate("/admin")
                    }}>Aprobar</Button>
                </main>
            ) : <LoadingIcon/>}
        </>
    )
}

export default AproveMovie