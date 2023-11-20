import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Button } from "react-bootstrap"

import { backend_url } from '../../constants'
import LoadingIcon from "../../components/loadingIcon/loadingIcon"
import poster from '../../assets/poster-placeholder.png'

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
    const [imageSrc, setImageSrc] = useState('')

    useEffect(() => {
        fetch(`${backend_url}/api/movies/${id}`, {
            method: 'GET'
        }).then((response) => response.json())
            .then((data) => {
                data.published ? navigate("/admin") : setMovie(data)
                setImageSrc(data.image)
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

    const handleImageError = () => {
        setImageSrc(poster)
    }

    return (
        <>
            {movie ? (
                <main style={{ margin: "50px 4%" }}>
                    <h2>{movie.title}</h2>
                    <img src={imageSrc} alt={movie.title} width={300} onError={handleImageError}/>
                    <section>
                        <strong>Director:</strong> {movie.director}
                    </section>
                    <section>
                        <strong>Descripción:</strong> {movie.description}
                    </section>
                    <section>
                        <strong>Año:</strong> {movie.year}
                    </section>
                    <section>
                        <strong>Genero:</strong> {movie.categories.map(category => category.name).join(', ')}
                    </section>
                    <Button onClick={() => {
                        publishMovie()
                        navigate("/admin")
                    }}>Aprobar</Button>
                </main>
            ) : <LoadingIcon />}
        </>
    )
}

export default AproveMovie