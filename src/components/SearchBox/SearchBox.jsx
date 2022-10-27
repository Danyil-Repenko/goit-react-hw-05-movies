import { Input } from './SearchBox.styled';

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
