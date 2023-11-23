import { Link } from "react-router-dom";
import "./NewReview.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { backend_url } from "../../constants";
import { useSelector } from "react-redux";

const NewReview = ({ name, profileImage, userId, movieId }) => {
  const token = useSelector(state=>state.auth.user.token)
  const toLink = `/profile/${userId}`;
  const [newReviewData, setNewReviewData] = useState({
    comment: "",
    rating: 0
  })
  const handleSubmit = async () => {
    console.log(newReviewData);
    const response = await fetch(`${backend_url}/api/movies/review/${movieId}`,{
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "x-access-token": token
      },
      body: JSON.stringify(newReviewData)
    })
    if (response.ok) {
      setNewReviewData({
        comment: "",
        rating: 0
      })
      window.location.reload()
    }
  }
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
            onChange={e => setNewReviewData({
              ...newReviewData,
              comment: e.target.value
            })}
          />
          <div className="start">
            <ReactStars
              count={5}
              size={24}
              edit={true}
              activeColor="#ffd700"
              onChange={stars => setNewReviewData({
                ...newReviewData,
                rating: stars
              })}
            />
            <Button onClick={handleSubmit} className="btnComment">Subir comentario</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewReview;
