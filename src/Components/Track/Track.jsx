import React, { Component } from "react";
import "./Track.css";
class Track extends Component {
  renderAction = () => {
    const isRemovalVaule = this.props.isRemoval ? "-" : "+";
    return isRemovalVaule;
  };
  addTrack = () => {
  return this.props.onAdd;
  };
removeTrack=()=>{
  return this.props.onRemove;
}

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.id} </h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        <a className="Track-action" onClick = {this.addTrack} cursor="pointer" > {this.renderAction()} </a>

        {/* {this.addTrack} */}
      </div>
    );
  }
}

export default Track;
