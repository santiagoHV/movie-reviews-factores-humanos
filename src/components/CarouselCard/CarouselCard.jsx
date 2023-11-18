import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Carousel, Row } from "react-bootstrap";
import CardMovie from "../CardMovie/CardMovie";
import './CarouselCard.css';

const CarouselCard = ({movies}) => {

  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    return window.innerWidth;
  }

  function handleResize() {
    setWindowSize(getWindowSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const size =
    windowSize < 720 ? 1
      : windowSize < 1050 ? 2
      : windowSize < 1380 ? 3
      : windowSize < 1725 ? 4
      : windowSize < 2070 ? 5
      : 6;

    const groups = []
    let index = 0
    while (index < movies.length) {
        groups.push(movies.slice(index, index + size))
        index += size
    }
    return (
        <Carousel indicators={false} interval={null} className="cardCarousel">
            {
                groups.map((group, group_index) => {
                    return (
                        <Carousel.Item key={group_index}>
                            <Row xs={size} md={size}>
                                {group.map((movie, card_index) => {
                                    return (
                                        <CardMovie key={card_index} title={movie.title} image={movie.image} description={movie.description} id={movie.id}/>
                                    )
                                })}
                            </Row>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

CarouselCard.propTypes = {
    movies: PropTypes.array.isRequired
}

export default CarouselCard