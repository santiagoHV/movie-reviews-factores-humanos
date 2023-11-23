import { Container, Row, Tabs, Tab, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import EditProfile from "../../components/EditProfile/EditProfile";
import correoIcon from "../../assets/icons/correo.png";
import edadIcon from "../../assets/icons/edad.png";
import fechaNacimientoIcon from "../../assets/icons/fecha-nacimiento.png";
import generoIcon from "../../assets/icons/genero.png";
import "./profile.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { backend_url } from "../../constants";
import LoadingIcon from "../../components/loadingIcon/loadingIcon"

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
  const { userId } = useParams()
  const { user, isAuthenticated } = useSelector(state => state.auth)
  const [profileData, setProfileData] = useState()
  const [reviewsData, setReviewsData] = useState()
  const [categories, setCategories] = useState()

  //Get user data
  useEffect(() => {
    try {
      fetch(`${backend_url}/api/users/${userId}`, {
        method: 'GET'
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          else {
            throw new Error(response.status)
          }
        })
        .then((data) => {
          setProfileData(data)
        })
    } catch (e) {
      console.log(e)
    }

  }, [userId])

  //Get reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${backend_url}/api/users/reviews/${profileData.id}`, {
          method: 'GET',
          headers: {
            'x-access-token': user.token
          }
        })
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        setReviewsData(data)
      } catch (e) {
        console.log(e);
      }
    }
    if (profileData) fetchReviews()
  }, [profileData, user])

  //Get categories
  useEffect(() => {
    fetch(`${backend_url}/api/categories`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
  }, [setCategories])

  const getAge = (birhdate) => {
    const currentDate = new Date();
    const birthdateDate = new Date(birhdate);
    let age = currentDate.getFullYear() - birthdateDate.getFullYear();
    if (
      currentDate.getMonth() < birthdateDate.getMonth() ||
      (currentDate.getMonth() === birthdateDate.getMonth() &&
        currentDate.getDate() < birthdateDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  return (
    <>
      {profileData ? (
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
                <h1>{profileData.name} {profileData.lastname}</h1>
                <div className="info-personal">
                  <div className="double-items">
                    <p>
                      <img src={correoIcon} alt="" className="icon-info-personal" />
                      &nbsp; Correo: {profileData.email}
                    </p>
                    <p>
                      <img src={edadIcon} alt="" className="icon-info-personal" />
                      &nbsp; Edad: {getAge(profileData.birthdate)} años</p>
                  </div>
                  <div className="double-items">
                    <p>
                      <img src={fechaNacimientoIcon} alt="" className="icon-info-personal" />
                      &nbsp; Fecha de nacimiento: {profileData.birthdate}</p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          {isAuthenticated && user.email === profileData.email ? (
            <div className="editar-perfil">
              <EditProfile
                nombre={profileData.name}
                apellido={profileData.lastname}
                fechaNacimiento={profileData.birthdate}
                correo={profileData.email}
                id={profileData.id}
                token={user.token}
              />
            </div>
          ) : null}
          <Tabs
            defaultActiveKey="misReseñas"
            id="uncontrolled-tab-example"
            className="mb-3"
          >

            <Tab eventKey="misReseñas" title="Mis Reseñas">
              {reviewsData ? reviewsData.map(r => <ReviewBox
                name={r.name}
                qualification={r.qualification}
                review={r.review}
                profileImage={r.image}
                key={r.id}
                isMovie={true}
                id={r.id}
              />) : <LoadingIcon />}
            </Tab>

            {isAuthenticated && user.email === profileData.email ? (
              <Tab eventKey="preferencias" title="Preferencias">
                <Form>
                  {categories ? categories.map((category, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      label={category.name}
                      id={`genero-${index}`}
                    />
                  )) : <LoadingIcon />}
                </Form>
                <Button className="btn-actualizar" variant="primary">Actualizar</Button>{' '}
              </Tab>
            ) : null}

          </Tabs>

        </Container>
      ) : <LoadingIcon />}
    </>
  )
};

export default Profile;
