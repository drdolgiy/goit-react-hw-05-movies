import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar } from './components/AppBar/AppBar';
import { MovieDetailsPage } from "./components/MovieDetailsPage/MovieDetailsPage";

const HomePage = lazy(() => import('./pages/HomePage/HomePage').then(module => ({default: module.HomePage})));
const MoviesPage = lazy(() => import('./pages/MoviesPage').then(module => ({default: module.MoviesPage})));
const MovieCast = lazy(() => import('./pages/Cast').then(module => ({default: module.MovieCast})));
const MovieReviews = lazy(() => import('./pages/Reviews').then(module => ({default: module.MovieReviews})));

export const App = () => {
  return (
    <div>  
      <Suspense fallback="">
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
      </Suspense>    
    </div>
  );
};
