import { Routes, Route } from 'react-router-dom';
import { AppBar } from './components/AppBar/AppBar'
import { HomePage } from "./components/HomePage/HomePage"
import {MoviesPage} from "./components/MoviesPage/MoviesPage"

export const App = () => {
  return (
    <div>
      <AppBar />
      <Routes path="/">
          <Route path="*" element={<HomePage to="/" />} />
          <Route path="movies" element={<MoviesPage/>} />
      </Routes>
    </div>
  );
};
