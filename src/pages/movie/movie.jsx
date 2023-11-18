import { useEffect, useState } from "react";
import "./movie.css";
import ReactStars from "react-rating-stars-component";
import { Col, Row, Container } from "react-bootstrap";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import NewReview from "../../components/NewReview/NewReview";
import { useParams } from "react-router-dom";

import { backend_url } from "../../constants";

const movieDemo = {
    title: "El Silencio de los Corderos",
    description: "Un agente del FBI se une a un brillante pero perturbado psicólogo para atrapar a un asesino en serie conocido como 'Buffalo Bill'.",
    image: "https://es.web.img2.acsta.net/r_1280_720/medias/nmedia/18/74/29/15/19757760.jpg",
    director: "Jonathan Demme",
    year: 1991,
    category: "Thriller",
    qualification: 4
}

const reviewsData = [
    {
        id: 1,
        user: {
            name: "Jhoe",
            lastname: "Doe"
        },
        rating: 2,
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.",
        image: "https://img.asmedia.epimg.net/resizer/QMMtnAP2cuFTYMZRJYUa-dNRgDI=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/R5WXEXV3SVFWPFYUBVE2W234FA.jpg",
    },
]

const newReview = {
    id: 4,
    name: "Alma Marcela Gozo",
    image:
        "https://th.bing.com/th/id/OIP.3qpmiW3xheSmoUrlOzpWtQHaHa?pid=ImgDet&w=1600&h=1600&rs=1",
};

const Movie = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    useEffect(() => {
        fetch(`${backend_url}/api/movies/${id}`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setMovie(data)
            })
    }, [id])
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
                                    <li tabIndex={5}>Género: {movie.category}</li>
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
