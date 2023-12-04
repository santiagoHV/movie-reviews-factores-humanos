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
                        status: movie.status,
                        url: `/admin/movie/${movie.id}`
                    }
                })
                setMovies(formatedMovies)
            })
    }, [token])

    if (movies) return (
        <>
            <section>
                <h2>Peliculas por aprobar</h2>
                <ListDisplayer elements={movies.filter(movie => movie.status == 'pending')} />
            </section>
            <section>
                <h2>Peliculas rechazadas</h2>
                <ListDisplayer elements={movies.filter(movie => movie.status == 'rejected')} />
            </section>
        </>
    )
    return <LoadingIcon />
}
export default Admin