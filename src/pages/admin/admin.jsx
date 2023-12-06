import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Form } from "react-bootstrap"
import ListDisplayer from "../../components/ListDisplayer/ListDisplayer"
import { backend_url } from '../../constants'
import LoadingIcon from "../../components/loadingIcon/loadingIcon"


const Admin = () => {

    const navigate = useNavigate()

    const { isAuthenticated, isAdmin, user } = useSelector(state => state.auth)
    if (!isAuthenticated | !isAdmin) {
        navigate("/")
    }
    const [movies, setMovies] = useState()
    const [users, setUsers] = useState()
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`${backend_url}/api/movies/admin/unpublished`, {
            method: 'GET',
            headers: {
                'x-access-token': user.token
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
    }, [user.token])

    useEffect(() => {
        fetch(`${backend_url}/api/users`)
            .then(response => response.json())
            .then(data => {
                const formatedUsers = data.map((user) => {
                    return {
                        name: `${user.name} ${user.lastname}`,
                        url: `/profile/${user.id}`
                    }
                })
                setUsers(formatedUsers)
            })
    }, [user.token])

    return (
        <>
            <section>
                <Form>
                    <Form.Group>
                        <Form.Label>Buscar</Form.Label>
                        <Form.Control onChange={(e) => setSearch(e.target.value)} />
                    </Form.Group>
                </Form>
            </section>
            {movies ? (
                <>
                    <section>
                        <h2>Peliculas por aprobar</h2>
                        <ListDisplayer elements={movies.filter(movie => {
                            return movie.status == 'pending' && movie.name.toLowerCase().includes(search.toLowerCase())
                        })} />
                    </section>
                    <section>
                        <h2>Peliculas rechazadas</h2>
                        <ListDisplayer elements={movies.filter(movie => {
                            return movie.status == 'rejected' && movie.name.toLowerCase().includes(search.toLowerCase())
                        })} />
                    </section>
                </>
            ) : <LoadingIcon />}
            {users ? (
                <section>
                    <h2>Usuarios</h2>
                    <ListDisplayer elements={users.filter(user => {
                        return user.name.toLowerCase().includes(search.toLowerCase())
                    })} />
                </section>
            ) : null}

        </>
    )
}
export default Admin