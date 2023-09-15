import React from 'react';
import './CarouselImage.css';

function CarouselImage({ text , path}) {
  return (

<div className='container-image'>
      <img class='image-carousel'
        src={path}
        alt={text}
      />
    </div>
  );
}

export default CarouselImage;
