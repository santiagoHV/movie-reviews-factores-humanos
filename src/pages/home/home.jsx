import React from "react";
import CarouselMovie from '../../components/CarouselMovie/CarouselMovie';
import CardMovie from "../../components/CardMovie/CardMovie";
import Badge from 'react-bootstrap/Badge';
import CarouselCard from "../../components/CarouselCard/CarouselCard";

const Home = () => {
    const movies = [
        {
            'image': 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/04/mad-max-furia-carretera.jpg?tf=3840x',
            'title': 'Nombre Pelicula xd',
            'description': 'lorem imsum'
        },
        {
            'image': 'https://static.posters.cz/image/hp/79858.jpg',
            'title': 'Pelicula Harry potter',
            'description': 'deSCRIPCION 2'
        }
    ]

    return (
        <div>
            <h2>Agregado recientemente <Badge bg="secondary">New</Badge></h2>
            <CarouselMovie movies={movies} />
            <h2>Recomendado para ti</h2>
            <CarouselCard movies={movies} size={5} />
            <div>
                <h2>Terror</h2>
                <CarouselCard movies={movies} size={5} />
            </div>
        </div>
    )
}

export default Home;