import { useEffect, useState } from "react";
import "./movie.css";
import ReactStars from "react-rating-stars-component";
import { Col, Row, Container } from "react-bootstrap";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import NewReview from "../../components/NewReview/NewReview";
import { useParams, useNavigate } from "react-router-dom";
import LoadingIcon from "../../components/loadingIcon/loadingIcon"
import { backend_url } from "../../constants";
import poster from '../../assets/poster-placeholder.png'
import { useSelector } from "react-redux";

const newReview = {
    id: 4,
    name: "Alma Marcela Gozo",
    image:
        "https://th.bing.com/th/id/OIP.3qpmiW3xheSmoUrlOzpWtQHaHa?pid=ImgDet&w=1600&h=1600&rs=1",
};

const Movie = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [imageSrc, setImageSrc] = useState('')
    const user = useSelector(state => state.auth.user)
    const [userData, setUserData] = useState()
    useEffect(() => {
        fetch(`${backend_url}/api/movies/${id}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                data.published ? setMovie(data) : navigate("/")
                setImageSrc(data.image)
            })
    }, [id, navigate])
    const handleImageError = () => {
        setImageSrc(poster)
    }
    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await fetch(`${backend_url}/api/users/${user.id}`)
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                setUserData(data)
            }
            catch (e) {
                console.log(e);
            }
        }
        if (user) { getUserData() }
    }, [user])
    const generateUserImage = async (name, lastname) => {
        try {
            const response = await fetch(`https://ui-avatars.com/api/?name=${name}+${lastname}&background=random&size=64`, {
                method: 'GET',
            })
            const blob = await response.blob()
            const url = URL.createObjectURL(blob)
            return url
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            {movie ? (
                <Container className="movie-container">
                    <Row className="mb-5">
                        <Col md={4}>
                            <figure>
                                <img
                                    style={{ width: 300 + 'px' }}
                                    alt={`Portada de la película ${movie.title}`}
                                    src={imageSrc}
                                    onError={handleImageError}
                                />
                                <figcaption>
                                    {`Portada de la película ${movie.title}`}
                                </figcaption>
                            </figure>
                        </Col>
                        <Col md={6}>
                            <h1 tabIndex={1}>{movie.title}</h1>
                            <ReactStars
                                count={5}
                                size={40}
                                edit={false}
                                value={movie.qualification}
                                activeColor="#ffd700"
                            />
                            <p tabIndex={2}>{movie.description}</p>
                            <div>
                                <ul>
                                    <li tabIndex={3}>Director: {movie.director}</li>
                                    <li tabIndex={4}>Año: {movie.year}</li>
                                    <li tabIndex={5}>Género: {movie.categories.map(category => category.name).join(', ')}</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    {movie.reviews ? (movie.reviews.map(r => <ReviewBox
                        name={`${r.user.name} ${r.user.lastname}`}
                        qualification={r.rating}
                        review={r.comment}
                        profileImage={generateUserImage(r.user.name, r.user.lastname)}
                        key={r.id}
                        id={r.user.id}
                    />)) : <LoadingIcon />}
                    {userData ? (
                        <NewReview
                            name={`${userData.name} ${userData.lastname}`}
                            profileImage={generateUserImage(userData.name, userData.lastname)}
                            id={userData.id}
                        />
                    ) : <LoadingIcon />}
                </Container>
            ) : <LoadingIcon />}
        </>
    )
}

export default Movie;
