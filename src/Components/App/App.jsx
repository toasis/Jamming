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
      { name: "song A1", artist: "artist A1", album: "Album A1", id: 11 },
      { name: "song B1", artist: "artist B1", album: "Album B1", id: 21 },
      { name: "song C1", artist: "artist C1", album: "Album C1", id: 32 },
      { name: "song D1", artist: "artist D1", album: "Album D1", id: 42 },
      { name: "song E1", artist: "artist E1", album: "Album E1", id: 52 }
    ]
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />

            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
