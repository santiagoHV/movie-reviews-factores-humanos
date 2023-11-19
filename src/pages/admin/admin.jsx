import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import ListDisplayer from "../../components/ListDisplayer/ListDisplayer"

import { backend_url } from '../../constants'
import { useState } from "react"
import LoadingIcon from "../../components/loadingIcon/loadingIcon"


const Admin = () => {

    const navigate = useNavigate()

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const isAdmin = useSelector(state => state.auth.isAdmin)
    if (!isAuthenticated | !isAdmin) {
        navigate("/")
    }
    const token = useSelector(state => state.auth.user.token)
    const [movies, setMovies] = useState()

    useEffect(() => {
        fetch(`${backend_url}/api/movies/admin/unpublished`, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }
        })
            .then((response) => response.json())
            .then((unpublishedMovies) => {
                const formatedMovies = unpublishedMovies.map((movie) => {
                    return {
                        name: movie.title,
                        url: `/admin/movie/${movie.id}`
                    }
                })
                setMovies(formatedMovies)
            })
    }, [token])

    return (
        <>
            {movies ? (
                <section>
                    <h2>Peliculas por aprobar</h2>
                    <ListDisplayer elements={movies} />
                </section>
            ) : <LoadingIcon />}
        </>
    )
}
export default Admin