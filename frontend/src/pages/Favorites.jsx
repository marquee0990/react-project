import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites(){

    const {favorites} = useMovieContext()

    if(favorites) {
        return (
            <div className="favorites">
            <h2>Seus favoritos</h2>
            <div className="movies-grid">
                    {favorites.map(
                        (movie) =>( <MovieCard movie={movie} key={movie.id}/>
                    ))}
            </div>
        </div>
        )
    }

    return (<div className="favorites-empty">
        <h2>Sem favoritos ainda</h2>
        <p>Insira filmes aos seus favoritos para aparecerem aqui</p>
    </div>)

}

export default Favorites