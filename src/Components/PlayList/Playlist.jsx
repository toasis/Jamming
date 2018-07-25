import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";
class PlayList extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue="New Playlist" />
        <TrackList tracks={this.props.playlistTracks} onAdd={this.props.onAdd} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;
