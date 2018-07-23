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
          <h3>track name will go here</h3>
          <p> track artist will go here| track album will go here </p>
        </div>
        {this.renderAction}
      </div>
    );
  }
}

export default Track;
