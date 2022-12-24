const SearchNote = ({ value, onChangeSearch, onHandlerTitle }) => {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Insert note title to search..." value={value} onChange={onChangeSearch} />
    </form>
  );
};

export default SearchNote;
