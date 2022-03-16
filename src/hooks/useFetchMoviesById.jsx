// import {useParams} from "react-router-dom"
// import {useState, useEffect} from "react"
// import { getMoviesById } from "services/movieApi"

// export const useFetchMoviesById = () => {
//     const {movieId} = useParams()
//     const [movie, setMovie] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         async function fetchMovies() {
//             setLoading(true);
//             try {
//                 const movies = await getMoviesById(movieId);
//                 // console.log(movie);
//                 setMovie(movies);
//             } catch (error) {
//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchMovies();
//     }, [movieId]);
//     return { movie, loading }
// };