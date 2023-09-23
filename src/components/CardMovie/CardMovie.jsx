import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardMovie.css'

function CardMovie({ title, image, description }) {
  return (
    <Card className="cardMovie">
      <Card.Img src={image} />
      <Card.ImgOverlay>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Opinar</Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CardMovie;