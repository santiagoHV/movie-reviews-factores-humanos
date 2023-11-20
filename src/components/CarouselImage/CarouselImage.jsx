import { useState } from 'react';
import poster from '../../assets/poster-placeholder.png'
import './CarouselImage.css';

function CarouselImage({ text, path }) {
  const [imageSrc, setImageSrc] = useState(path)
  const handleImageError = () => {
    setImageSrc(poster)
  }
  return (
    <div className='container-image'>
      <img className='image-carousel'
        src={imageSrc}
        alt={text}
        onError={handleImageError}
      />
    </div>
  );
}

export default CarouselImage;
