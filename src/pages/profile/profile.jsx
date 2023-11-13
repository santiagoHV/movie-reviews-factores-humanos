import React from "react";
import { Container, Row, Tabs, Tab, Form, Button } from "react-bootstrap";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import EditProfile from "../../components/EditProfile/EditProfile";
import correoIcon from "../../assets/icons/correo.png";
import edadIcon from "../../assets/icons/edad.png";
import fechaNacimientoIcon from "../../assets/icons/fecha-nacimiento.png";
import generoIcon from "../../assets/icons/genero.png";
import "./profile.css";

const reviewsData = [
  {
    id: 1,
    name: "Armagedon",
    qualification: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.",
    image: "http://t0.gstatic.com/images?q=tbn:ANd9GcRgrUV39BacPp1a1_JCLhhClLbR3tuyGADpaJoKkzH4BzLMgZyxgqRMd4UHg_DjmC0HaXGxGw",
  },
  {
    id: 2,
    name: "Nombre 2",
    qualification: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.",
    image: "http://t1.gstatic.com/images?q=tbn:ANd9GcRxJvyc-Eu5MOkSYsMbmRybS4DbiBa7cpoGuufWPw44K4mgeIjKNL2iJ7PFIoI_muWmiXvV",
  },
  {
    id: 3,
    name: "Jurasic Park",
    qualification: 2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi consectetur repellat, architecto optio accusamus temporibus ullam! Voluptatibus doloribus vel unde beatae incidunt, aspernatur fugit, laudantium, odio corporis eum sit.",
    image: "http://t1.gstatic.com/images?q=tbn:ANd9GcRxJvyc-Eu5MOkSYsMbmRybS4DbiBa7cpoGuufWPw44K4mgeIjKNL2iJ7PFIoI_muWmiXvV",
  },
];

const generosPeliculas = ['Acción', 'Aventura', 'Biografía', 'Ciencia ficción', 'Crimen', 'Deporte', 'Documental', 'Drama', 'Fantasía', 'Familia', 'Guerra', 'Histórico', 'Misterio', 'Musical', 'Romance', 'Terror', 'Thriller'].sort();

const nombre = "Jhon";
const apellido = "Doe";
const correo = "Jhon.Doe2023@gmail.com";
const edad = 23;
const fechaNacimiento = "2000-01-01";
const genero = "Masculino";

const Profile = () => {
  return (
    <Container>
      <Row >
        <div className="conteiner-perfil">
          <div className="conteiner-img-perfil">
            <img
              id="perfil-image"
              className="imagen-perfil"
              alt="Foto de perfil"
              src="https://media.canalnet.tv/2018/08/Homero-Simpson.jpeg"
            />
          </div>
          <div className="info-perfil">
            <h1>{nombre} {apellido}</h1>
            <div className="info-personal">
              <div className="double-items">
                <p>
                  <img src={correoIcon} alt="" className="icon-info-personal" />
                  &nbsp; Correo: {correo}
                </p>
                <p>
                  <img src={edadIcon} alt="" className="icon-info-personal" />
                  &nbsp; Edad: {edad} años</p>
              </div>
              <div className="double-items">
                <p>
                  <img src={fechaNacimientoIcon} alt="" className="icon-info-personal" />
                  &nbsp; Fecha de nacimiento: {fechaNacimiento}</p>
                <p>
                  <img src={generoIcon} alt="" className="icon-info-personal" />
                  &nbsp; Género: {genero}</p>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <div className="editar-perfil">
        <EditProfile
          nombre={nombre}
          apellido={apellido}
          fechaNacimiento={fechaNacimiento}
          correo={correo}
          genero={genero}
        />
      </div>

      <Tabs
        defaultActiveKey="preferencias"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="preferencias" title="Preferencias">
          <Form>
            {generosPeliculas.map((genero, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={genero}
                id={`genero-${index}`}
              />
            ))}
          </Form>
          <Button className="btn-actualizar" variant="primary">Actualizar</Button>{' '}

        </Tab>
        <Tab eventKey="misReseñas" title="Mis Reseñas">
          {reviewsData.map(r => <ReviewBox
            name={r.name}
            qualification={r.qualification}
            review={r.review}
            profileImage={r.image}
            key={r.id}
            isMovie={true}
          />)}
        </Tab>
      </Tabs>

    </Container>
  );
};

export default Profile;
