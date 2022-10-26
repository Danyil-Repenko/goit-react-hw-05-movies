import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

// Якщо виводжу lazy() у функцію типу createAsyncComponent(path), не знаходить модуль (module not found)
const TrandingList = lazy(() => import('./TrandingList/TrandingList'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TrandingList />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieID" element={<Movie />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
