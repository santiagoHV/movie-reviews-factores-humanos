import CardMovie from "../CardMovie/CardMovie";
import "./GridCard.css"

const GridCard = ({ movies }) => {
    return (
        <div className="grid-card-display">
            {movies.map((movie, index)=>{
                return <CardMovie key={index} title={movie.title} image={movie.image} description={movie.description} id={movie.id} />
            })}
        </div>
    )
}

export default GridCard