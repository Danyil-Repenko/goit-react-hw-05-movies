import {
  Wrapper,
  PosterWrapper,
} from 'components/MovieDetails/MovieDetails.styled';
import PropTypes from 'prop-types';

export const MovieDetails = ({
  poster_path,
  original_title,
  genres,
  overview,
  vote_average,
  release_date,
}) => {
  return (
    <Wrapper>
      <PosterWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${original_title} poster`}
        />
      </PosterWrapper>
      <div>
        <p>
          <b>
            {original_title} ({release_date.slice(0, 4)})
          </b>
        </p>
        <p>
          <b>Genres:</b> {genres.map(genre => genre.name).join(', ')}
        </p>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <p>
          <b>Overview</b>
        </p>
        <p>{overview}</p>
      </div>
    </Wrapper>
  );
};

MovieDetails.propTypes = {
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
  release_date: PropTypes.number.isRequired,
};
