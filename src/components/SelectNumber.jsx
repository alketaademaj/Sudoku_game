import React, { Component } from 'react'
import NumberBox from './NumberBox'

//no state, using hooks 

export class SelectNumber extends Component {
    constructor(props) {
        super(props)
    }
    
    
    onClick = (epsilon, ypsilon) =>{
        console.log(epsilon)
    }

    render() {

        return (
          <div className="selectNro">
            {[...Array(9)].map((x, i) => (
              <NumberBox key={i} value={i+1} passingValue={this.props.onClick} column={i+1}/>
            ))}
          </div>
        );
    }
}

export default SelectNumber
