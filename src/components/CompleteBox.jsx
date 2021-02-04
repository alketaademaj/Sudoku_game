import React, { Component } from "react";
import NineBox from "./NineBox";

export class CompleteBox extends Component {
  //checking if the sudoku is filled correctly comes here

  //moving with the keyboard
  handleKeyPress = (event) => {
    console.log(event.key);
    //https://www.youtube.com/watch?v=kTzYoZyF45c for help
  };

  // event listener that listens to the key press - presses anything on the keyboard ITS NOT DETECTING ARROOWWWWSSS!!!
  // add e.l. only once
  // unmount the e.l -> take it and add it because its not needed anymore

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
        />
      );
    }

    return (
      <div>
        <div className="complete">{row}</div>
        <input type="text" id="one" onKeyPress={this.handleKeyPress} />
      </div>
    );
  }
}

export default CompleteBox;
