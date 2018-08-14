import React, { Component } from "react";
import "./Track.css";
class Track extends Component {
  // renderAction = () => {
  //   if (this.props.isRemoval)
  //     return (
  //       <a className="Track-action" onClick={this.props.removeTrack}>
  //         -
  //       </a>
  //     );
  //   return (
  //     <a className="Track-action" onClick={this.addTrack}>
  //       +
  //     </a>
  //   );
  // };
  // addTrack = () => {
  //   return this.props.onAdd(this.props.track);
  // };
  // removeTrack = () => {
  //   return this.props.onRemove(this.props.track);
  // };

  render() {
    const { onAdd, onRemove, track, isRemoval } = this.props;
    const buttonAdd = (
      <a className="Track-action" onClick={onAdd}>
        Remove -
      </a>
    );
    const buttonRemove = (
      <a className="Track-action" onClick={onRemove}>
        Add +
      </a>
    );
    console.log(this.props.onAdd);
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{track.name} </h3>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        {/* {this.renderAction()} */}
        {isRemoval ? buttonAdd : buttonRemove}
      </div>
    );
  }
}

export default Track;
