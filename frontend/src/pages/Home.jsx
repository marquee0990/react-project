import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
        {id: 1, title: "Batman", release_date: "1989"},
        {id: 2, title: "Superman", release_date: "2025"},
        {id: 3, title: "Mulher-Maravilha", release_date: "2017"},
        {id: 4, title: "Flash", release_date: "2023"},
    ]

    return (
    
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) =>( <MovieCard movie={movie} key={movie.id} />))}
            </div>
        </div>
    )
}

export default Home