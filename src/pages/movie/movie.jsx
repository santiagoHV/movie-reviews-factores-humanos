import { useEffect, useState } from "react";
import "./movie.css";
import ReactStars from "react-rating-stars-component";
import { Col, Row, Container } from "react-bootstrap";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import NewReview from "../../components/NewReview/NewReview";
import { useParams, useNavigate } from "react-router-dom";

import { backend_url } from "../../constants";

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
    useEffect(() => {
        fetch(`${backend_url}/api/movies/${id}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                data.published ? setMovie(data) : navigate("/") 
            })
    }, [id, navigate])
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
                                    src={movie.image}
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
                    {movie.reviews.map(r => <ReviewBox
                        name={`${r.user.name} ${r.user.lastname}`}
                        qualification={r.rating}
                        review={r.comment}
                        profileImage={'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'}
                        key={r.id}
                    />)}
                    <NewReview
                        name={newReview.name}
                        profileImage={newReview.image}
                        key={newReview.id}
                    />
                </Container>
            ) : ''}
        </>
    )
}

export default Movie;
