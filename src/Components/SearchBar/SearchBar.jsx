import React, { Component } from "react";
import "./SeachBar.css";
class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
