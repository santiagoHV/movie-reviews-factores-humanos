import React from "react";
import "./movie.css";
import ReactStars from "react-rating-stars-component";
import { Col, Row, Container } from "react-bootstrap";
import StarQualification from "../../components/StarQualification/StarQualification";
import ReviewBox from "../../components/ReviewBox/ReviewBox";

const reviewsData = [
    {
        id: 1,
        name: "Jhon Doe",
        qualification: 3,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit."
    },
    {
        id: 2,
        name: "Jhon Doe",
        qualification: 4,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit."
    },
    {
        id: 3,
        name: "Jhon Doe",
        qualification: 5,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit."
    },
]

const Movie = () => {

    return (
        <>
            <Container className="movie-container">
                <Row className="mb-5">
                    <Col md={4}>
                        <figure>
                            <img
                                style={{width: 300 + 'px'}}
                                alt="Portada de la pelicula Avengers infinity war"
                                src="https://dvvy6louqcr7j.cloudfront.net/vista/HO00014494/heroPoster/Avengers-Infinity-War-plus-Endgame-double-feature.png"/>
                            <figcaption>
                                Imagen con la portada principal de avengers infinity war, salen todos los avengers
                            </figcaption>
                        </figure>
                    </Col>
                    <Col md={6}>
                        <h1 tabIndex={1}>Titulo de pelicula</h1>
                        <ReactStars 
                            count={5}
                            size={40}
                            edit={false}
                            value={4}
                            activeColor="#ffd700"
                        />
                        <p tabIndex={2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore illo reiciendis tempora debitis ipsum earum accusamus, recusandae qui, blanditiis animi sit perspiciatis iste corporis, suscipit ad beatae provident rem!
                        </p>
                        <div>
                            <ul>
                                <li tabIndex={3}>Director: </li>
                                <li tabIndex={4}>Año: </li>
                                <li tabIndex={5}>Género:</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                {reviewsData.map(review => <ReviewBox key={review.id}/>)}
            </Container>
        </>
    )
}

export default Movie;