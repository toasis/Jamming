import React, { Component } from "react";
import Track from "../Track/Track";
import "./TrackList.css";
class TrackList extends Component {
  render() {
    const { onAdd, onRemove, isRemoval } = this.props;

    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return (
            <Track
              key={track.id}
              track={track}
              onAdd={() => onAdd(track)}
              onRemove={() => onRemove(track)}
              isRemoval={isRemoval}
            />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
