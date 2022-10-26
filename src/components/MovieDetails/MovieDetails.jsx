import { Poster } from 'components/MovieDetails/MovieDetails.styled';

export const MovieDetails = ({
  poster_path,
  original_title,
  genres,
  overview,
  vote_average,
  release_date,
}) => {
  return (
    <div>
      <div style={{ width: 150 }}>
        <Poster
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${original_title} poster`}
        />
      </div>
      <div>
        <p>
          {original_title} ({release_date.slice(0, 4)})
        </p>
        <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <p>{overview}</p>
      </div>
    </div>
  );
};
