import React, { Component } from "react";
import "./Track.css";
class Track extends Component {
  state = { isRemoval: true };

  renderAction = () => {
    if (this.state.isRemoval) {
      return <a className="Track-action"> - </a>;
    } else {
      return <a className="Track-action"> - </a>;
    }
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
        {this.renderAction}
      </div>
    );
  }
}

export default Track;
