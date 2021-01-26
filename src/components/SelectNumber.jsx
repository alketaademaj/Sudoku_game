import React, { Component } from 'react'
import ChangeNumber from './ChangeNumber'

//no state, using hooks 

export class SelectNumber extends Component {

    render() {

        return (
          <div className="selectNro">
            {[...Array(9)].map((x, i) => (
              <ChangeNumber key={i} value={i+1}  numbValue = {this.props.numbValue} /> //like calling a function in javascript example(one,two,three)
            ))}
          </div>
        );
    }
}

export default SelectNumber
