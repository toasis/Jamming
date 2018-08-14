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
    const buttonAdd = (
      <a className="Track-action" onClick={this.props.onAdd}>
        Remove -
      </a>
    );
    const buttonRemove = (
      <a className="Track-action" onClick={this.props.onRemove}>
        Add +
      </a>
    );
    console.log(this.props);
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name} </h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        {/* {this.renderAction()} */}
        {this.props.isRemoval ? buttonAdd : buttonRemove}
      </div>
    );
  }
}

export default Track;
