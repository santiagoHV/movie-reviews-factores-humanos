import React from "react";
import "./movie.css";
import ReactStars from "react-rating-stars-component";
import { Col, Row, Container } from "react-bootstrap";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import NewReview from "../../components/NewReview/NewReview";

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
        name: "Jhon Doe",
        qualification: 2,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.",
        image: "https://img.asmedia.epimg.net/resizer/QMMtnAP2cuFTYMZRJYUa-dNRgDI=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/R5WXEXV3SVFWPFYUBVE2W234FA.jpg",
    },
    {
        id: 2,
        name: "Marta Rosa",
        qualification: 4,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.",
        image: "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg",
    },
    {
        id: 3,
        name: "Alan Brito",
        qualification: 5,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.",
        image: "https://i0.wp.com/lamiradafotografia.es/wp-content/uploads/2014/07/simpson-rock.jpg",
    },
]

const newReview = {
  id: 4,
  name: "Alma Marcela Gozo",
  qualification: 5,
  review:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.",
  image:
    "https://th.bing.com/th/id/OIP.3qpmiW3xheSmoUrlOzpWtQHaHa?pid=ImgDet&w=1600&h=1600&rs=1",
};

const Movie = () => {
    return (
        <Container className="movie-container">
            <Row className="mb-5">
                <Col md={4}>
                    <figure>
                        <img
                            style={{ width: 300 + 'px' }}
                            alt={`Portada de la película ${movieDemo.title}`}
                            src={movieDemo.image}
                        />
                        <figcaption>
                            {`Portada de la película ${movieDemo.title}`}
                        </figcaption>
                    </figure>
                </Col>
                <Col md={6}>
                    <h1 tabIndex={1}>{movieDemo.title}</h1>
                    <ReactStars
                        count={5}
                        size={40}
                        edit={false}
                        value={movieDemo.qualification}
                        activeColor="#ffd700"
                    />
                    <p tabIndex={2}>{movieDemo.description}</p>
                    <div>
                        <ul>
                            <li tabIndex={3}>Director: {movieDemo.director}</li>
                            <li tabIndex={4}>Año: {movieDemo.year}</li>
                            <li tabIndex={5}>Género: {movieDemo.category}</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            {reviewsData.map(r => <ReviewBox
                name={r.name}
                qualification={r.qualification}
                review={r.review}
                profileImage={r.image}
                key={r.id}
            />)}
            <NewReview
                name={newReview.name}
                profileImage={newReview.image}
                key={newReview.id}
            />
        </Container>
    )
}

export default Movie;
