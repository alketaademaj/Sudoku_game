import React, { Component } from 'react';


export class NumberBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: [this.props.row, this.props.column],
      selected: this.props.selected,
      color: '',
    };
  }
//Alks what we were doing inside the onclick method we created I moved it to componentDidUpdate method
//Now whenever any box is clicked it will execute this.props.passingValue methoed and thta value sets the state of 
//selected to current cell address and that state is inside the completeBox component, which is parent component to
//this component and when its state update it re-renders all its children to and so earlier all our boxes were getting 
//re-rendered on click but the method we created was still using the old selected state soemhow it was lagging one step
//so instead of dealing with that I did the color update using componentDidUpdate lifecycle method and 
//if (prevProps.selected !== this.props.selected) makes sure that react doesn't go into infinite loop as we are 
//doing this.setState({ color: 'blue' }) so that will change the state of this component and so it will re-render
// and when it will re-render it will againg run componentDidUpdate and so it will again run this.setState({ color: 'blue' })
//and so on... so to stop that we are checking if the props we are getting from parent component if different from 
//pervious props we got if they are differernt then only we are changing executing the color change.
//let me know if you need more explanation for this. :) --> whenever the state or props update, the component rerenders 

  componentDidUpdate(prevProps) { //this.state without a condition -> goes to infinite loop
    if (prevProps.selected !== this.props.selected) { //what the value of selected was before this one
      // console.log(this.props.selected.toString(),this.state.address.toString())
      if (this.props.selected.toString() === this.state.address.toString()) {
        this.setState({ color: 'rgb(139, 11, 11)' })
        //  console.log("blue color set for ", this.state.address)
      }
      else {
        this.setState({ color: 'rgb(219, 93, 93)' })
        //  console.log("pink color set for ", this.state.address)
      }
      this.setState({ selected: this.props.selected });
    }
  };

  render() {
    // console.log(this.props.selected)
    // console.log(this.state.address, this.props.selected, this.props.selected.toString(), this.state.address.toString())
    //console.log(this.props.selected.toString(), this.state.address.toString())

    return (
      <div className="allBox">
        <div
          className="aBox" style={{ backgroundColor: this.state.color }} onClick={() => this.props.passingValue(this.props.row, this.props.column)} numbValue = {this.props.numbValue} >
        </div>
      </div>
    );
  }
}
export default NumberBox