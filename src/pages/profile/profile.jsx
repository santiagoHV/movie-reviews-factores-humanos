import React from "react";
import { Container, Row , Col} from "react-bootstrap";
import ReviewBox from "../../components/ReviewBox/ReviewBox";

const reviewsData = [
    {
        id: 1,
        name: "Jhon Doe",
        qualification: 4,
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
        qualification: 4,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit."
    },
]

const Profile = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img />
                </Col>
                <Col>
                    <h1>Jhon Doe</h1>
                    <div>
                        <ul>
                            <li tabIndex={3}>Director: </li>
                            <li tabIndex={4}>Año: </li>
                            <li tabIndex={5}>Género:</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <h2>Mis reseñas</h2>
            {reviewsData.map(review => <ReviewBox key={review.id}/>)}
        </Container>
    )
}

export default Profile;