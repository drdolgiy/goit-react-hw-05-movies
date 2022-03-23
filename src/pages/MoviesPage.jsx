import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesByQuery } from 'services/movieApi';

export const MoviesPage = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const query = searchParams.get("query");
    const location = useLocation();

    useEffect(() => { 
        if (!query) {
            return
        };
        
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
        
    const handleChange = event => {
        const searchQuery = event.target.value.toLowerCase();
        setSearch(searchQuery);       
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
                    </li>
                ))}
            </ul>)}        
        </div>
    )    
};
