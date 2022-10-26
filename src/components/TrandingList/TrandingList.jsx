import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { performSearch } from 'tools/performSearch';

const TrandingList = () => {
  const [tranding, setTranding] = useState([]);

  useEffect(() => {
    const exactUrl = 'trending/all/day';
    performSearch(exactUrl).then(({ results }) => {
      return setTranding(results);
    });
  }, []);

  return (
    <div>
      <h2>Tranding Today</h2>
      <ul>
        {tranding.length > 0 &&
          tranding.map(({ title, id, name }) => {
            return (
              <li key={id}>
                <NavLink to={`/movies/${id}`}>{title ? title : name}</NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TrandingList;
