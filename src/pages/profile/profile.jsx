import { Container, Row, Tabs, Tab, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import ReviewBox from "../../components/ReviewBox/ReviewBox";
import EditProfile from "../../components/EditProfile/EditProfile";
import correoIcon from "../../assets/icons/correo.png";
import edadIcon from "../../assets/icons/edad.png";
import fechaNacimientoIcon from "../../assets/icons/fecha-nacimiento.png";
import "./profile.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { backend_url } from "../../constants";
import LoadingIcon from "../../components/loadingIcon/loadingIcon"
import { showAlert } from '../../reducers/notificationSlice'

const Profile = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()
  const { user, isAuthenticated } = useSelector(state => state.auth)
  const [profileData, setProfileData] = useState()
  const [reviewsData, setReviewsData] = useState()
  const [moviesData, setMoviesData] = useState()
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
          data.categories = data.categories.map(category => `${category.id}`)
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
        const response = await fetch(`${backend_url}/api/users/reviews/${userId}`, {
          method: 'GET',
          headers: {
            'x-access-token': user.token
          }
        })
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        setReviewsData(data.review)
      } catch (e) {
        console.log(e);
      }
    }
    if (userId) fetchReviews()
  }, [userId, user])

  //Get categories
  useEffect(() => {
    fetch(`${backend_url}/api/categories`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
  }, [setCategories])

  //Get movies
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`${backend_url}/api/movies/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': user.token
        }
      })
      if (response.ok) {
        const data = await response.json()
        setMoviesData(data)
      }
    }
    if (userId == user.id) fetchMovies()
  }, [user, userId])

  //Calcular edad
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

  //Handdle preference change
  const handleCategoryChange = (event) => {
    const { name, checked } = event.target
    let updated_categories = profileData.categories
    if (checked && !profileData.categories.includes(name)) {
      updated_categories = [...updated_categories, name]
    } else if (!checked && profileData.categories.includes(name)) {
      updated_categories = updated_categories.filter((category) => category !== name)
    }
    setProfileData({
      ...profileData,
      categories: updated_categories
    })
  }

  //Update preferences
  const updatePreferences = async () => {
    console.log("enviando")
    const response = await fetch(`${backend_url}/api/users/preferences`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': user.token
      },
      body: JSON.stringify({ "preferences": profileData.categories })
    })
    if (response.ok) {
      dispatch(showAlert({ style: 'success', message: 'Preferencias actualizadas' }))
    }
    else {
      dispatch(showAlert({ style: 'danger', message: 'Error al actualizar preferencias' }))
    }
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
                  src={`https://ui-avatars.com/api/?name=${profileData.name}+${profileData.lastname}&background=random&size=256`}
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
              {reviewsData ? reviewsData.map((r, index) => <ReviewBox
                name={`${profileData.name} ${profileData.lastname}`}
                qualification={r.rating}
                review={r.comment}
                image={`https://ui-avatars.com/api/?name=${profileData.name}+${profileData.lastname}&background=random&size=256`}
                key={index}
                isMovie={true}
                id={r.id}
              />) : <LoadingIcon />}
            </Tab>

            {isAuthenticated && user.email === profileData.email ? (
              <Tab eventKey="preferencias" title="Preferencias">
                <Form>
                  {categories ? categories.map((category, index) => (
                    category.name && (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        label={category.name}
                        id={`genero-${index}`}
                        checked={profileData.categories.includes(`${category.id}`)}
                        name={category.id}
                        onChange={handleCategoryChange}
                      />
                    )
                  )) : <LoadingIcon />}
                </Form>
                <Button className="btn-actualizar" variant="primary" onClick={updatePreferences}>Actualizar</Button>{' '}
              </Tab>
            ) : null}
            {isAuthenticated && user.email === profileData.email ? (
              <Tab eventKey="peliculas" title="Peliculas">
                {moviesData ? (
                  <>
                    <section>
                      <h2>Publicadas</h2>
                      {moviesData.filter(movie=>movie.status=='approved').map((movie)=><ReviewBox
                        key={movie.id}
                        isMovie={true}
                        name={movie.title}
                        qualification={movie.rating}
                        id={movie.id}
                        image={movie.image}
                        review={movie.description}
                      />)}
                    </section>
                    <section>
                      <h2>Pendientes</h2>
                      {moviesData.filter(movie=>movie.status=='pending').map((movie)=><ReviewBox
                        key={movie.id}
                        isMovie={true}
                        name={movie.title}
                        qualification={movie.rating}
                        id={movie.id}
                        image={movie.image}
                        review={movie.description}
                      />)}
                    </section>
                    <section>
                      <h2>Rechazadas</h2>
                      {moviesData.filter(movie=>movie.status=='rejected').map((movie)=><ReviewBox
                        key={movie.id}
                        isMovie={true}
                        name={movie.title}
                        qualification={movie.rating}
                        id={movie.id}
                        image={movie.image}
                        review={movie.description}
                      />)}
                    </section>
                  </>
                ) : null}
              </Tab>
            ) : null}
          </Tabs>

        </Container>
      ) : <LoadingIcon />}
    </>
  )
};

export default Profile;
