import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import "./profile.css";

const reviewsData = [
  {
    id: 1,
    name: "Jhon Doe",
    qualification: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.",
  },
  {
    id: 2,
    name: "Jhon Doe",
    qualification: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.",
  },
  {
    id: 3,
    name: "Jhon Doe",
    qualification: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.",
  },
];

const Profile = () => {
  return (
    <Container>
      <Row>
        <div className="conteiner-perfil">
          <img
            id="perfil-image"
            className="imagen-perfil"
            alt="Foto de perfil"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1svaxqfsdvEjpkg7vZzyrJ5KtGHBamg1h4g&usqp=CAU"
          />
          <div className="info-perfil">
            <h1>Jhon Doe</h1>
            <div className="info-personal">
              <div className="double-items">
                <p>Correo: Jhon.Doe2023@gmail.com</p>
                <p>contraseña: *******</p>
              </div>
              <div className="double-items">
                <p>Edad: 23 años</p>
                <p>Fecha de nacimiento: 01/01/2000</p>
              </div>
              <div className="double-items">
                <p>Género: Masculino</p>
                <p>Preferencias: Terror, Romance, Acción</p>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <h2>Mis reseñas</h2>
      {reviewsData.map((review) => (
        <ReviewBox key={review.id} />
      ))}
    </Container>
  );
};

export default Profile;
