import { useState, useEffect } from 'react';
import { performSearch } from 'tools/performSearch';
import { ListElement } from 'components/ListElement/ListElement';

const HomePage = () => {
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
      <ul>{tranding.length > 0 && tranding.map(film => ListElement(film))}</ul>
    </div>
  );
};

export default HomePage;
