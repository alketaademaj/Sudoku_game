import React, { Component } from 'react'
import ChangeNumber from './ChangeNumber'

//no state, using hooks 

export class SelectNumber extends Component {

    render() {

        return (
          <div className="selectNro">
            {[...Array(9)].map((x, i) => (
              <ChangeNumber key={i} value={i+1}  numbValue = {this.props.numbValue} setnumbValue = {this.props.setnumbValue} selected = {this.props.selected} /> //like calling a function in javascript example(one,two)
            ))}
          </div>
        );
    }
}

export default SelectNumber
