import { NavLink } from 'react-router-dom';

export const TrandingListElement = (info, location) => {
  const { title, id, name } = info;
  return (
    <li key={id}>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        {title ? title : name}
      </NavLink>
    </li>
  );
};
