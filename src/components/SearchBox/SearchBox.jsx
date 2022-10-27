import { Input } from './SearchBox.styled';
import PropTypes from 'prop-types';

export const SearchBox = ({ value, update }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={event => {
        update(event.target.value);
      }}
    />
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};
