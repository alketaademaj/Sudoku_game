import React, { Component } from "react";
import NineBox from "./NineBox";

export class CompleteBox extends Component {
  render() {
    const row = [];

    for (let x = 0; x <= 8; x++) {
      row.push(
        <NineBox
          key={x}
          row={x}
          passingValue={this.props.changeSelected}
          selected={this.props.selected}
          numbValue={this.props.numbValue}
          initialvalue={this.props.initialvalue}
        />
      );
    }

    return (
      <div>
        <div className="complete">{row}</div>
      </div>
    );
  }
}

export default CompleteBox;
