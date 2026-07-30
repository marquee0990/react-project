import MovieCard from "../components/MovieCard";
import { useState} from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Batman", release_date: "1989"},
        {id: 2, title: "Superman", release_date: "2025"},
        {id: 3, title: "Mulher-Maravilha", release_date: "2017"},
        {id: 4, title: "Flash", release_date: "2023"},
    ];

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