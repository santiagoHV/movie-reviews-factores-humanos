import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../CarouselImage/CarouselImage';

function CarouselMovie({ movies }) {
  return (
    <div>
      <Carousel>
        {movies.map((movie, index) => (
          <Carousel.Item key={index}>
            <CarouselImage text={movie.title} path={movie.image} />
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselMovie;
