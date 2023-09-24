import PropTypes from 'prop-types'
import { Carousel, Row } from "react-bootstrap"
import CardMovie from "../CardMovie/CardMovie"
import './CarouselCard.css'

const CarouselCard = ({ movies, size }) => {
    size = window.innerWidth < 720 ? 1 : window.innerWidth < 1280 ? 3 : window.innerWidth < 1920 ? 5 : 8
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
                                        <CardMovie key={card_index} title={movie.title} image={movie.image} description={movie.description} />
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
    movies: PropTypes.array.isRequired,
    size: PropTypes.number.isRequired
}

export default CarouselCard