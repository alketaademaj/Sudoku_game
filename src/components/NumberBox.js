import React, {Component} from 'react';


 export class NumberBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
             digit: props.val,
             bigBox: props.tans,
        }
    }
        
     render() {
         return (
             <div className="allBox">
                 <div className="aBox" onClick={() => this.props.passingValue(this.state.digit, this.state.bigBox)}>{this.props.select && this.state.digit}</div>
             </div>
         )
     }
 }
 export default NumberBox



 