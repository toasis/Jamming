import React, { Component } from "react";
import "./Track.css";
class Track extends Component {
  renderAction = () => {
    const button = this.props.isRemoval ? "+" : "-";
    return button;
  };
  addTrack = () => {
    console.log("Track is added!");
  };
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.id} </h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        <a className="Track-action"> {this.renderAction()} </a>
        {/* {this.addTrack} */}
      </div>
    );
  }
}

export default Track;
