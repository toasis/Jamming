import React, { Component } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/Playlist";
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
    console.log(clickedTrack);

    let playlistTracks = [...this.state.playlistTracks];

    playlistTracks.push(clickedTrack);
    console.log(playlistTracks);
    this.setState({ playlistTracks });
    console.log("Track added!");
  };

  removeTrack = clickedTrack => {
    console.log(clickedTrack);
    let playlistTracks = [...this.state.playlistTracks];
    playlistTracks = playlistTracks.filter(
      track => clickedTrack.id !== track.id
    );
    this.setState({ playlistTracks });
    console.log(playlistTracks, "Track removed!");
  };

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
