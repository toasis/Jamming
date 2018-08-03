import React, { Component } from "react";
import "./SeachBar.css";
class SearchBar extends Component {
  handleTermChange = e => {
    console.log(e);

    // this.setState({})
  };

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
        />
        <a onClick={this.props.onSearch}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
