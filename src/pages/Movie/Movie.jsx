import { useParams } from 'react-router-dom';
import { useState, useEffect, Suspense, useRef } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { performSearch } from 'tools/performSearch';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();
  const navigate = useNavigate();
  const location = useRef(useLocation());
  const backLinkHref = location.current.state?.from ?? '/';

  useEffect(() => {
    const exactUrl = `movie/${movieID}`;
    performSearch(exactUrl).then(data => setMovie(data));
  }, [movieID]);

  return (
    <div>
      <button type="button" onClick={() => navigate(backLinkHref)}>
        Go back
      </button>
      <div>{movie && MovieDetails(movie)}</div>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <div>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Movie;
