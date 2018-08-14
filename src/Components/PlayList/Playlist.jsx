import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";
class PlayList extends Component {
  handleNameChange = e => {
    e.preventDefault();
    const searchInput = e.target.element.searchInput.value;
    console.log(searchInput);

    //return this.props.onNameChange;
  };
  render() {
    const {
      playlistTracks,
      onRemove,
      onSave,
      onPlaylistNameChange
    } = this.props;

    return (
      <div className="Playlist">
        <input
          defaultValue="New Playlist"
          onChange={onPlaylistNameChange}
          name="searchInput"
        />
        <TrackList
          tracks={playlistTracks}
          onRemove={onRemove}
          isRemoval="true"
        />
        <a className="Playlist-save" onClick={onSave}>
          SAVE TO SPOTIFY
        </a>
      </div>
    );
  }
}

export default PlayList;
