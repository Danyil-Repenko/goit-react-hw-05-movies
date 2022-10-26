import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { performSearch } from 'tools/performSearch';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    const exactUrl = `movie/${movieID}/credits`;
    performSearch(exactUrl).then(data => setCast(data.cast));
  }, [movieID]);

  return (
    <ul>
      {cast.length > 0 &&
        cast.map(({ name, character, profile_path, id }) => {
          const image_path = profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : '';
          return (
            <li key={id}>
              <div>
                <img src={image_path} alt={name} />
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
