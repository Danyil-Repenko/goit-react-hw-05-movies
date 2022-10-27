import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ListElement = ({ info, location }) => {
  const { title, id, name } = info;
  console.log(id);
  return (
    <li key={id}>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        {title ? title : name}
      </NavLink>
    </li>
  );
};

ListElement.propTypes = {
  info: PropTypes.object.isRequired,
  location: PropTypes.object,
};
