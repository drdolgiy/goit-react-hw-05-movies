import {useState, useEffect} from "react"
import { getMovies } from "services/movieApi"

export const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchMovies() {
            setLoading(true);
            try {
                const movies = await getMovies();
                // console.log(movies);
                setMovies(movies);
            } catch (error) {
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);
    return { movies, loading }
};