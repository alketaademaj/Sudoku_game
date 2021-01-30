import React, { Component } from 'react';


export class NumberBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: [this.props.row, this.props.column],
      selected: this.props.selected,
      color: ''
    };
  }

//let me know if you need more explanation for this. :) --> whenever the state or props update, the component rerenders 

  componentDidUpdate(prevProps) { //this.state without a condition -> goes to infinite loop
    if (prevProps.selected !== this.props.selected) { //what the value of selected was before this one
      // console.log(this.props.selected.toString(),this.state.address.toString())
      if (this.props.selected.toString() === this.state.address.toString()) {
        this.setState({ color: 'rgb(43, 134, 161)' })
        //  console.log("blue color set for ", this.state.address)
      }
      else {
        this.setState({ color: 'rgb(147, 194, 216)' })
        //  console.log("pink color set for ", this.state.address)
      }
      this.setState({ selected: this.props.selected });
    }
  };

  render() {
    // console.log(this.props.selected)
    // console.log(this.state.address, this.props.selected, this.props.selected.toString(), this.state.address.toString())
    //console.log(this.props.selected.toString(), this.state.address.toString())

    //{this.props.numbValue}

    return (
      <div className="allBox">
        <div
          className="aBox" style={{ backgroundColor: this.state.color }} onClick={() => this.props.passingValue(this.props.row, this.props.column)} >
            {this.props.numbValue[this.props.row*9 + this.props.column]}
        </div>
      </div>
    );
  }
}
export default NumberBox
