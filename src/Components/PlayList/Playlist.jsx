import React, { Component } from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";
class PlayList extends Component {

  render() {
    const { playlistName, playlistTracks, onRemove, onSave, onChange } = this.props;

    return (

      <div className="Playlist">
        <label>
          Update playlist name below
          <input
            value={playlistName}
            id="playlistName"
            type="text"
            onChange={e=> onChange(e)}
          />
        </label>
        <TrackList
          tracks={playlistTracks}
          onRemove={onRemove}
          isRemoval="true"
        />
        <a className="Playlist-save" onSubmit={onSave}>
          SAVE TO SPOTIFY
        </a>
      </div>
    );
  }
}

export default PlayList;
