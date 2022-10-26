import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { performSearch } from 'performSearch';

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    const exactUrl = `movie/${movieID}/credits`;
    performSearch(exactUrl).then(data => setCast(data.cast));
  }, [movieID]);

  return (
    <ul>
      {cast &&
        cast.map(({ name, character, profile_path, id }) => {
          return (
            <li key={id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
              </div>
              <div>
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieCast;
