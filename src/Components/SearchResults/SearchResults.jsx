import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

const SearchResults = props => {
  const { searchResults, onAdd, isRemoval } = props;
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={isRemoval} />
    </div>
  );
};

export default SearchResults;
