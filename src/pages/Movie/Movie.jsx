import { useParams } from 'react-router-dom';
import { useState, useEffect, Suspense, useRef } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { performSearch } from 'tools/performSearch';
import { LinkWrapper, StyledLink } from 'pages/Movie/Movie.styled';

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
      <LinkWrapper>
        <p>Additional information</p>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
      </LinkWrapper>
      <div>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Movie;
