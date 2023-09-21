import CarouselMovie from '../../components/CarouselMovie/CarouselMovie';
import Badge from 'react-bootstrap/Badge';
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import './home.css'

const Home = () => {
    const movies = [
        {
          "title": "El Padrino",
          "description": "La historia de la familia Corleone, una de las más poderosas familias mafiosas de Nueva York, y su líder, Don Vito Corleone.",
          "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
        },
        {
          "title": "Titanic",
          "description": "Un épico romance trágico entre Jack y Rose, que se desarrolla a bordo del famoso transatlántico RMS Titanic durante su trágico viaje inaugural.",
          "image": "https://media.glamour.es/photos/63bfe10f8b498fccd84b267c/master/w_1600%2Cc_limit/FmHgLoYX0AAWYbh.jpg"
        },
        {
          "title": "El Señor de los Anillos: La Comunidad del Anillo",
          "description": "Un joven hobbit llamado Frodo se embarca en una peligrosa misión para destruir un poderoso anillo y salvar la Tierra Media del malvado Sauron.",
          "image": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg"
        },
        {
          "title": "Forrest Gump",
          "description": "La historia de Forrest Gump, un hombre con discapacidad intelectual que experimenta una serie de eventos extraordinarios en su vida.",
          "image": "https://www.mubis.es/media/covers/1696/2649/forrest-gump-portada-original.jpg"
        },
        {
          "title": "Jurassic Park",
          "description": "Un grupo de científicos y aventureros se embarcan en una isla donde se han creado dinosaurios genéticamente modificados, pero las cosas salen mal.",
          "image": "https://es.web.img2.acsta.net/pictures/23/09/08/15/51/3397341.jpg"
        },
        {
          "title": "Avatar",
          "description": "En el mundo alienígena de Pandora, un ex marine se une a los nativos Na'vi en un conflicto épico entre humanos y alienígenas.",
          "image": "https://i.ebayimg.com/images/g/CwEAAOSwv4xf5cdv/s-l1200.jpg"
        },
        {
          "title": "El Rey León",
          "description": "La historia de Simba, un joven león que debe enfrentar su destino y reclamar su lugar como rey de la Sabana africana.",
          "image": "https://m.media-amazon.com/images/I/61jkTiX8NuL._AC_UF894,1000_QL80_.jpg"
        },
        {
          "title": "El Silencio de los Corderos",
          "description": "Un agente del FBI se une a un brillante pero perturbado psicólogo para atrapar a un asesino en serie conocido como 'Buffalo Bill'.",
          "image": "https://es.web.img2.acsta.net/r_1280_720/medias/nmedia/18/74/29/15/19757760.jpg"
        },
        {
          "title": "Matrix",
          "description": "Un hacker llamado Neo descubre que el mundo en el que vive es una simulación controlada por máquinas, y se une a la resistencia para luchar contra ellas.",
          "image": "https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_SL1000_.jpg"
        },
        {
          "title": "Star Wars: Una Nueva Esperanza",
          "description": "Un joven granjero llamado Luke Skywalker se une a la Alianza Rebelde para luchar contra el Imperio Galáctico y su malvado líder, Darth Vader.",
          "image": "https://www.buvu.es/files/e/54433/poster-star-wars-iv-a-new-hope.jpeg"
        }
      ]

    return (
        <div>
            <main>
                <CarouselMovie movies={movies} />
            </main>
            <section>
                <h2>Recomendado para ti <Badge bg="secondary">New</Badge></h2>
                <CarouselCard movies={movies} size={5} />
            </section>
            <section>
                <h2>Terror</h2>
                <CarouselCard movies={movies} size={5} />
            </section>
        </div>
    )
}

export default Home;