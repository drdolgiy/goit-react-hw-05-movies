import { Loader } from "components/Loader/Loader";
import { Link, useLocation } from "react-router-dom";
import { useFetchMovies } from "hooks/useFetchMovies";


  
export const HomePage = () => {    
    const { movies, loading } = useFetchMovies();
    const location = useLocation();
    
    return (        
        <main>
            <h1>
                Trending today
            </h1>
            {loading && <Loader/>}
            <ul>
                {movies.map(movie => <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>)}
            </ul>
       </main>        
    )
};