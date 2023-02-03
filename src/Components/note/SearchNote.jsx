import propTypes from 'prop-types';

const SearchNote = ({ value, onChangeSearch }) => {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Insert note title to search..." value={value} onChange={onChangeSearch} />
    </form>
  );
};

SearchNote.propTypes = {
  value: propTypes.string.isRequired,
  onChangeSearch: propTypes.func.isRequired,
};

export default SearchNote;
