import React, {Component} from 'react';


 export class NumberBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          address: [this.props.row, this.props.column],
          selected: this.props.selected,
          color: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selected !== this.props.selected) {
          this.setState({selected: this.state.address});
        }
      };

     render() {
       // console.log(this.props.selected)
       // console.log(this.state.address, this.props.selected, this.props.selected.toString(), this.state.address.toString())
       //console.log(this.props.selected.toString(), this.state.address.toString())

     const changeColor = () => {   
        //console.log(this.props.selected.toString(), this.state.address.toString())
        if (this.state.selected.toString() === this.state.address.toString()) {
            this.setState({color: 'blue'})
            console.log(this.state.address)
         }
         else {
             this.setState({color: 'rgb(219, 93, 93)'})
             console.log("bhjkl")
         }
    }
         return (
           <div className="allBox">
             <div
               className="aBox" style = {{backgroundColor: this.state.color}} onClick = {() =>  (changeColor(), this.props.passingValue(this.props.row, this.props.column))} > 
               {this.props.row},{this.props.column}
             </div>
           </div>
         );
     }
 }
 export default NumberBox



 