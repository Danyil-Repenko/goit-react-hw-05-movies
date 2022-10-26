import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { performSearch } from 'tools/performSearch';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieID } = useParams();

  useEffect(() => {
    const exactUrl = `movie/${movieID}/reviews`;
    performSearch(exactUrl).then(data => setReviews(data.results));
  }, [movieID]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ author, id, content }) => {
          return (
            <li key={id}>
              <div>
                <p>Author: {author}</p>
                <p>{content}</p>
              </div>
            </li>
          );
        })
      ) : (
        <p>We dont have any reviews for this movie yet.</p>
      )}
    </ul>
  );
};

export default MovieReviews;
