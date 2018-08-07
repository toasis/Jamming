import React, { Component } from "react";
import "./SearchBar.css";
class SearchBar extends Component {
  state = { term: "" };
  handleTermChange = e => {
    this.setState({ term: e.target.value });
  };
  handleKeyPress(e) {
    if (e.key === "enter") this.props.onSearch;
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
        />
        <a onClick={this.props.onSearch} onKeyPress={this.handleKeyPress}>
          SEARCH
        </a>
      </div>
    );
  }
}

export default SearchBar;
