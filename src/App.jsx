import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar } from './components/AppBar/AppBar'
import { HomePage } from "./pages/HomePage/HomePage"
import { MoviesPage } from "./pages/MoviesPage"
import { MovieDetailsPage } from "./components/MovieDetailsPage/MovieDetailsPage"
import { MovieCast } from "./pages/Cast"
import {MovieReviews} from "./pages/Reviews"

export const App = () => {
  return (
    <div>    
      <Routes>
        <Route path="/" element={<AppBar/> }>
          <Route index element={<HomePage/>}/>
          <Route path="movies" element={<MoviesPage/>}/>
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast/>}/>
            <Route path="/movies/:movieId/reviews" element={<MovieReviews/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/" />}/>
        </Route>        
      </Routes>
    </div>
  );
};
