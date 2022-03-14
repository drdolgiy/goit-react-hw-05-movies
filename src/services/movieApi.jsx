import axios from "axios";
    
const key = '8c12118fbb52a6a184d945b560e50eae';

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export const getMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${key}`)
    console.log(response)
    return response.data.results;
};