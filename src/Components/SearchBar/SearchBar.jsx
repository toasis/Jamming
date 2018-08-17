import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  const { onChange, searchTerm, onSearch } = props;
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={onChange}
        value={searchTerm}
      />
      <a onClick={onSearch}>SEARCH</a>
    </div>
  );
};

export default SearchBar;
