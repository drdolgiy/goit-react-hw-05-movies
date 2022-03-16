import axios from "axios";
    
const key = '8c12118fbb52a6a184d945b560e50eae';

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export const getMovies = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${key}`)
    return response.data.results;
};

export const getMoviesById = async id => {
    const response = await axios.get(`/movie/${id}?api_key=${key}`)
    return response.data;
};

export const getCast = async id => {
    const response = await axios.get(`/movie/${id}/credits?api_key=${key}`)
    return response.data.cast;
};

export const getReviews = async id => {
    const response = await axios.get(`/movie/${id}/reviews?api_key=${key}`)
    return response.data.results;
};


