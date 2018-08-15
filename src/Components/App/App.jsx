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
    playlistName: "New Play List",
    playlistTracks: [
      { name: "song A1", artist: "artist A1", album: "Album A1", id: 6 },
      { name: "song B1", artist: "artist B1", album: "Album B1", id: 7 },
      { name: "song C1", artist: "artist C", album: "Album C1", id: 8 }
    ],
    isRemoval: false,
    searchTerm: "love"
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

  //现在可以update this.state.playlistName了
  updatePlaylistName = e => {
    this.setState({ playlistName: e.target.value });
    console.log(this.state);
  };

  //不能正确的工作
  savePlaylist = e => {
    let playlistName = this.state.playlistName;
    let trackURIs = [];
    this.state.playlistTracks.forEach(track => {
      trackURIs.push("spotify:track:" + track.id);
    });
    Spotify.savePlaylist(playlistName, trackURIs);
    this.setState({
      searchResults: [],
      searchTerm: "",
      playlistTracks: [],
      playlistName: ""
    });
    // Because defaultValue doesn't update after initial load
    // document.getElementById('searchBar').value = '';
    // document.getElementById('playlistName').value = newPlaylistName;
  };

  handleSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
    console.log(this.state);
  };

  handleSearch = term => {
    Spotify.search(term).then(tracks => {
      this.setState({
        searchResults: tracks
      });
    });
  };

  componentDidMount() {
    console.log("component did mount");

    Spotify.getAccessToken();
  }

  render() {
    return (
      <div>
        <h1>
          Ja
          <span className="highlight">mmm</span>
          ing
        </h1>
        <div className="App">
          <SearchBar
            searchTerm={this.state.searchTerm}
            onSearch={this.handleSearch}
            onChange={this.handleSearchChange}
          />

          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              isRemoval={this.state.isRemoval}
            />

            <PlayList
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onChange={this.updatePlaylistName}
              onSubmit={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
