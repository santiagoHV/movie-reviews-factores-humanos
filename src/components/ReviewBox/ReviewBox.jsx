import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ReactStars from "react-rating-stars-component";
import StarQualification from "../StarQualification/StarQualification"

const ReviewBox = () => {
    return (
        <Container>
            <Row>
                <Col sm={2} >
                    <img src=""/>
                </Col>
                <Col sm={10}>
                    <h3>Jhon Doe</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.</p>
                    <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={4}
                        activeColor="#ffd700"
                    />,
                </Col>
            </Row>
        </Container>
    )
}

export default ReviewBox