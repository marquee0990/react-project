import MovieCard from "../components/MovieCard";
import { useState, useEffect} from "react";
import {searchMovies, getPopularMovies} from "../services/api"
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    
    const [movies, setMovies] = useState([])

    const [error, setError] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
               setError("Falha ao carregar os filmes...")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = () => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
    
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Pesquise um filme..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Pesquisar</button>
            </form>

            <div className="movies-grid">
                {movies.map(
                    (movie) => <MovieCard movie={movie} key={movie.id}/>
                    // movie.title.toLowerCase().startsWith(searchQuery)&&(
                    // <MovieCard movie={movie} key={movie.id} /> 
                    // )  // fazer a pesquisa e a mudança da UI
                )}
            </div>
        </div>
    )
}

export default Home