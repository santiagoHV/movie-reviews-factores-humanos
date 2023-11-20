import { Link } from "react-router-dom";
import "./NewReview.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const NewReview = ({ name, qualification, review, profileImage, isMovie }) => {
  const toLink = isMovie ? "/movie" : "/profile";

  return (
    <Container className="mb-4 style-resena">
      <Row>
        <Col sm={2} className="user-image-container">
          <Link to={toLink}>
            <img src={profileImage} alt="Foto de perfil" />
          </Link>
        </Col>
        <Col sm={10}>
          <Link to={toLink} className="userName">
            <h3>{name}</h3>
          </Link>
          <textarea
            className="textarea-comment"
            maxLength="240"
            placeholder="Escriba su comentario aquí..."
            required
          />
          <div className="start">
            <ReactStars
              count={5}
              size={24}
              edit={true}
              value={qualification}
              activeColor="#ffd700"
            />
            <Button type="submit" className="btnComment">Subir comentario</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewReview;
