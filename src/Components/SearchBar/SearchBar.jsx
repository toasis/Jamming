import React, { Component } from "react";
import "./SearchBar.css";
class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.props.onChange}
        />
        <a onClick={this.props.onSearch}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
