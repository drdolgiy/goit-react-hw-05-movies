import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesByQuery } from 'services/movieApi';

export const MoviesPage = () => {
    // const { movieId } = useParams();
    const [search, setSearch] = useState("");
    // console.log(search)
    const [data, setData] = useState(null);
    console.log(data)
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams)
    const query = searchParams.get("query");
    // console.log(query)
    const location = useLocation();

    useEffect(() => { 
        if (query) {
            async function fetchMoviesByQuery() {
        try {
            const movies = await getMoviesByQuery(query);
            console.log(movies);
            setData(movies);
                        
            } catch (error) {
                
            }
        }
            fetchMoviesByQuery();
            return
    }
        
        }, [query])
        
    //     async function fetchMoviesByQuery() {
    //     try {
    //         const movies = await getMoviesByQuery(query);
    //         console.log(movies);
    //         setData(movies);
                        
    //         } catch (error) {
                
    //         }
    //     }
    //     fetchMoviesByQuery();
    // }, [query])
    

    const handleChange = event => {
        const searchQuery = event.target.value.toLowerCase();
        setSearch(searchQuery);
        // console.log(searchQuery)
        
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (search.trim() === '') {
            return alert('please, enter search query!');
        };
 
        setSearchParams({query: search});
        setSearch('');
    };
 
return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange}
                    value={search}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
                <button type="submit">Search</button>
        </form>
        {data && (<ul>
            {data.map(item => (
                <li key={item.id}>
                    <Link to={`/movies/${item.id}`} state={{ from: location }}>{item.title}</Link>
                {/* <p>{item.original_title}</p> */}
            </li>
        ))}
        </ul>)}
        
        </div>
    )    
};
