import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import {  useEffect, useState } from "react";
// import { Loader } from "components/Loader/Loader";
// import { useEffect } from "react/cjs/react.production.min";
// import {Link} from "react-router-dom"
import { getMoviesById } from "services/movieApi";
// import { getPoster } from "services/movieApi";
// import { MoviePoster } from "components/Poster/Poster";

  
export const MovieDetailsPage = () => { 
    const { movieId } = useParams();
    const posterURL = `https://image.tmdb.org/t/p/w300/`
    const location = useLocation();

    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        async function fetchMovie() {
            try {
                const movie = await getMoviesById(movieId);
                setMovie(movie);
            } catch (error) {
                
            }
        }
        fetchMovie();
    }, [movieId])
    
    return (          
        <main>
            <Link to={location?.state?.from ?? "/"}>
                <button type="button">Go back</button>
            </Link>        
            {movie && (
        <div>
          <img src={`${posterURL}${movie.poster_path}`} alt={movie.title}/>
          <h2>
            {movie.title} ({movie.release_date.slice(0,4)})
          </h2>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
        </div>
            )}
            <h4>
                Additional Information
            </h4>
             <ul>
                <li><Link  to="cast" >Cast</Link ></li>
                <li><Link  to="reviews" >Reviews</Link ></li>
            </ul>
            <Outlet/>
        </main>   
    
       
    )
};
