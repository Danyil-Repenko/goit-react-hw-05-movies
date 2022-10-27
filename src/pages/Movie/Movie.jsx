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
    performSearch(exactUrl)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [movieID]);

  return (
    <div>
      <button type="button" onClick={() => navigate(backLinkHref)}>
        Go back
      </button>
      <div>{movie && MovieDetails(movie)}</div>
      <div
        style={{
          borderTop: 'solid 1px #000000',
          borderBottom: 'solid 1px #000000',
        }}
      >
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Movie;
