import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";
class PlayList extends Component {
  handleNameChange = () => {
    return this.props.onNameChange;
  };
  render() {
    return (
      <div className="Playlist">
        <input defaultValue="New Playlist" onChange={this.handleNameChange} />
        <TrackList
          tracks={this.props.playlistTracks}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          isRemoval="true"
        />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;
