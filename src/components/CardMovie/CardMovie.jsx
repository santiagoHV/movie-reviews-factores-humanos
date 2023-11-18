import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Movie from '../../pages/movie/movie';
import './CardMovie.css';

function CardMovie({ title, image, description, director, year, genre, id }) {
  return (
    <Card className="cardMovie">
      <Card.Img src={image} />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        { }
        <Link
          to={{
            pathname: `/movie/${id}`,
            state: {
              title,
              description,
              image,
              director,
              year,
              genre,
            },
          }}
        >
          <Button variant="primary">Opinar</Button>
        </Link>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardMovie;
