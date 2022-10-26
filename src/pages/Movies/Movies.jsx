import { TrandingListElement } from 'components/TrandingListElement/TrandingListElement';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { performSearch } from 'tools/performSearch';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryString = searchParams.get('query') ?? '';

  useEffect(() => {
    if (queryString === '') return;

    const exactUrl = 'search/movie';
    performSearch(exactUrl, queryString)
      .then(({ results }) => {
        return results.map(result => TrandingListElement(result, location));
      })
      .then(movies => setMovies(movies));
  }, []);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const performeSearch = () => {
    if (queryString === '') return;

    const exactUrl = 'search/movie';
    performSearch(exactUrl, queryString)
      .then(({ results }) => {
        return results.map(result => TrandingListElement(result, location));
      })
      .then(movies => setMovies(movies))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <input
        type="text"
        value={queryString}
        onChange={event => {
          updateQueryString(event.target.value);
        }}
      />
      <button type="button" onClick={performeSearch}>
        Search
      </button>
      <ul>{movies}</ul>
    </div>
  );
};

export default Movies;
