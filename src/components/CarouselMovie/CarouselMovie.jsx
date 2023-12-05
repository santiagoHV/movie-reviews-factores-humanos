import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../CarouselImage/CarouselImage';
import './CarouselMovie.css'

function CarouselMovie({ movies }) {
  return (
    <div className={'homeCarousel'}>
      <h1>Ultimas añadidas</h1>
      <Carousel className='bannerDisplay'>
        {movies.map((movie, index) => (
          <Carousel.Item key={index}>
            <CarouselImage text={movie.title} path={movie.image} />
            <Carousel.Caption>
              <Link to={`/movie/${movie.id}`} className='titleMovie'>
                <h3>{movie.title}</h3>
              </Link>
              <p>{movie.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselMovie;
