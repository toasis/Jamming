import React from "react";
import Track from "../Track/Track";
import "./TrackList.css";

const TrackList = props => {
  const { onAdd, onRemove, isRemoval } = props;

  return (
    <div className="TrackList">
      {props.tracks.map(track => {
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
};

export default TrackList;
