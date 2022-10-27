import { ListElement } from 'components/ListElement/ListElement';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { performSearch } from 'tools/performSearch';
import { SearchBtn, SearchWrapper } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [queryValue, setQueryValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.get('query') ?? '';
  const location = useLocation();

  const search = useCallback(() => {
    const exactUrl = 'search/movie';
    performSearch(exactUrl, queryString)
      .then(({ results }) => setMovies(results))
      .catch(error => console.log(error));
  }, [queryString]);

  useEffect(() => {
    if (queryString === '') return;
    setQueryValue(queryString);
    search();
  }, [search, queryString]);

  const onSearch = () => {
    if (queryValue === '') return;
    const params = queryValue !== '' ? { query: queryValue } : {};
    setSearchParams(params);
    search();
  };

  return (
    <div>
      <SearchWrapper>
        <SearchBox value={queryValue} update={setQueryValue} />
        <SearchBtn type="button" onClick={onSearch}>
          Search
        </SearchBtn>
      </SearchWrapper>
      <ul>
        {movies.length > 0 && movies.map(movie => ListElement(movie, location))}
      </ul>
    </div>
  );
};

export default Movies;
