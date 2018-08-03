import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/Playlist";
import Spotify from "../../util/Spotify";
class App extends Component {
  state = {
    searchResults: [
      { name: "song A", artist: "artist A", album: "Album A", id: 1 },
      { name: "song B", artist: "artist B", album: "Album B", id: 2 },
      { name: "song C", artist: "artist C", album: "Album C", id: 3 },
      { name: "song D", artist: "artist D", album: "Album D", id: 4 },
      { name: "song E", artist: "artist E", album: "Album E", id: 5 }
    ],
    playlistName: "stronger",
    playlistTracks: [
      { name: "song A1", artist: "artist A1", album: "Album A1", id: 6 },
      { name: "song B1", artist: "artist B1", album: "Album B1", id: 7 },
      { name: "song C1", artist: "artist C", album: "Album C1", id: 8 }
    ],
    isRemoval: false
  };
  addTrack = clickedTrack => {
    let playlistTracks = [...this.state.playlistTracks];
    playlistTracks.push(clickedTrack);

    this.setState({ playlistTracks });
    console.log("Track added!");
  };

  removeTrack = clickedTrack => {
    let playlistTracks = [...this.state.playlistTracks];
    playlistTracks = playlistTracks.filter(
      track => clickedTrack.id !== track.id
    );
    this.setState({ playlistTracks });
    console.log(playlistTracks, "Track removed!");
  };

  updatePlaylistName = name => {
    console.log(name);
    let playlistName = this.state.playlistName;
    playlistName = name;
    this.setState({ playlistName });
  };

  savePlaylist = () => {
    Spotify.savePlaylist();
    this.playlistName = "New PlayList";
    this.playlistTracks = [];
  };

  search = () => {
    Spotify.search();
  };

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              isRemoval={this.state.isRemoval}
            />

            <PlayList
              playListName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
