// import { NavLink } from "react-router-dom";
// import styled from "@emotion/styled";
// import {Wrapper, Nav} from "components/HomePage/HomePageStyle.styled"

import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import {getMovies} from "services/movieApi"

  
export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then(setMovies)
    }, []);

    return (
        <div>
            <h2>
                Trending today
            </h2>
            <ul>
                {movies.map(movie => <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </li>)}
            </ul>
       </div>
        
    )
};