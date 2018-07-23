import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";
class PlayList extends Component {
  state = {};
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist" />
        <TrackList>Tracklist</TrackList>
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default PlayList;
