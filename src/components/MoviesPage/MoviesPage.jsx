import {useState, useEffect} from 'react'

export const MoviesPage = () => {

    const [query, setQuery] = useState('');

    const handleChange = event => {
        const { value } = event.currentTarget;
        const searchQuery = value.toLowerCase();
        setQuery(searchQuery);
    };

    // useEffect(

    // )


    return (
        <div>
            <form>
                <input onChange={handleChange}
                    value={query}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
    
};
