import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '300px',
            }}
          >
            <p style={{ fontSize: '100px', color: '#fff' }}>Page not found</p>
          </div>
        }
      />
    </Routes>
  );
};
