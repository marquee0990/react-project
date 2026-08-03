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

    const handleSearch = async (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            console.log(err)
            setError("Falha ao carregar os filmes...")
        }finally{
            setLoading(false)
        }

    }

    return (
    
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Pesquise um filme..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Pesquisar</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? <div className="loading">Carregando...</div> : 

            <div className="movies-grid">
                {movies.map(
                    (movie) =>( <MovieCard movie={movie} key={movie.id}/>
                    // movie.title.toLowerCase().startsWith(searchQuery)&&(
                    // <MovieCard movie={movie} key={movie.id} /> 
                    // )  // fazer a pesquisa e a mudança da UI
                ))}
            </div> }
        </div>
    )
}

export default Home