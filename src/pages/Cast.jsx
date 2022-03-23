import { useParams } from "react-router-dom";
import {  useEffect, useState } from "react";

import { getCast } from "services/movieApi";

export const MovieCast = () => {
    const { movieId } = useParams();
    const posterURL = `https://image.tmdb.org/t/p/w300/`
    // const cast = getCast(movieId);
    // console.log(cast)

    const [cast, setCast] = useState(null);
    console.log(cast)
    useEffect(() => {
        async function fetchCast() {
            try {
                const cast = await getCast(movieId);
                setCast(cast);
                console.log(cast)
            } catch (error) {
                
            }
        }
        fetchCast();
    }, [movieId])

    return (
        
        <ul>
            {/* {cast.original_name} */}
            {cast && cast.map(item => <li key={item.id}>
                <img src={`${posterURL}${item.profile_path}`} alt=""/>
                {item.name}
            </li>)}
        </ul>
    )
};