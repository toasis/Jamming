import React, { Component } from "react";
import "./SearchBar.css";
class SearchBar extends Component {
  render() {
    const { onChange, searchTerm, onSearch } = this.props;
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
  }
}

export default SearchBar;
