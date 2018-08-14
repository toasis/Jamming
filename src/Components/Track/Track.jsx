import React, { Component } from "react";
import "./Track.css";
class Track extends Component {
  render() {
    const { onAdd, onRemove, track, isRemoval } = this.props;

    const buttonAdd = (
      <a className="Track-action" onClick={onAdd}>
        +
      </a>
    );
    const buttonRemove = (
      <a className="Track-action" onClick={onRemove}>
        -
      </a>
    );

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name} </h3>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        {isRemoval ? buttonRemove : buttonAdd}
      </div>
    );
  }
}

export default Track;
