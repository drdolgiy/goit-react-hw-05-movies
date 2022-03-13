import axios from "axios";
    
const key = '8c12118fbb52a6a184d945b560e50eae';

axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/550?${key}`

export const getMovies = async () => {
    const response = await axios.get()
    return response.data;
};