import React, { Component } from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends Component {
  render() {
    const { searchResults, handleAdd, isRemoval } = this.props;

    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          tracks={searchResults}
          onAdd={handleAdd}
          isRemoval={isRemoval}
        />
      </div>
    );
  }
}
export default SearchResults;
