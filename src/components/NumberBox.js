import React, {Component} from 'react';


 export class NumberBox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: ''
        }
    }

    changeCellColor() {
        this.setState({color: 'blue'})
    }
        
     render() {
         return (
             <div className="allBox">
                 <div className="aBox" style = {{backgroundColor: this.state.color}} onClick={() => (this.props.passingValue(this.props.row, this.props.column), this.changeCellColor())}>{this.props.row},{ this.props.column}</div>
             </div>
         )
     }
 }
 export default NumberBox



 