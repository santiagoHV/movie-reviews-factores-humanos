import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardMovie.css';
import placeholder from '../../assets/poster-placeholder.png'
import { useState } from 'react';

function CardMovie({ title, image, description, director, year, genre, id }) {
  const [imageSrc, setImageSrc] = useState(image)
  const handleImageError = () => {
    setImageSrc(placeholder)
  }
  return (
    <Card className="cardMovie">
      <Card.Img src={imageSrc} onError={handleImageError} />
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
