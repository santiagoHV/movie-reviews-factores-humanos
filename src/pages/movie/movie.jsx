import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import StarQualification from "../../components/StarQualification/StarQualification";

const Movie = () => {
    return (
        <>
            <Container className="movie-container">
                <Row>
                    <Col>
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
                    <Col>
                        <h1 tabIndex={1}>Titulo de pelicula</h1>
                        <StarQualification />
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

            </Container>
        </>
    )
}

export default Movie;