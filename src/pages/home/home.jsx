import CarouselMovie from '../../components/CarouselMovie/CarouselMovie';
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import LoadingIcon from "../../components/loadingIcon/loadingIcon"
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { backend_url } from '../../constants'
import './home.css'


const Home = () => {
  const { isAuthenticated } = useSelector(state=>state.auth)

  const [categories, setCategories] = useState([])
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`${backend_url}/api/categories`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
  }, [setCategories])

  useEffect(() => {
    fetch(`${backend_url}/api/movies`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => setMovies(data))
  }, [setMovies])

  return (
    <div>
      {isAuthenticated? <FloatingButton buttonText="Agregar pelicula" />:null}
      <main>
        {movies.length > 0 ? <CarouselMovie movies={movies.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 15)} /> : <LoadingIcon />}
      </main>
      <section>
        <h2>Top 10</h2>
        {movies.length > 0 ?<CarouselCard movies={movies.sort((a,b)=>b.rating-a.rating).slice(0,10)}/>: <LoadingIcon/>}
      </section>
      {categories.length > 0 ? categories.map((category, index) => {
        const filteredMovies = movies.filter((movie) => {
          return movie.categories.some((cat) => cat.name === category.name)
        })
        return filteredMovies.length > 0 ? (
          <section key={index}>
            <h2 >{category.name}</h2>
            <CarouselCard movies={filteredMovies.sort((a,b)=>b.rating-a.rating)} />
          </section>
        ) : null
      }) : null}
    </div>
  )
}

export default Home;