import React, { Component } from 'react'
import NumberBox from './NumberBox'

export class SelectNumber extends Component {
    
    onClick = (epsilon, ypsilon) =>{
        console.log(epsilon)
    }

    render() {
        return (
            <div className="selectNro"> 
                <NumberBox val="1" passingValue={this.onClick} select={1} />
                <NumberBox val="2" passingValue={this.onClick} select={1} />
                <NumberBox val="3" passingValue={this.onClick} select={1} />
                <NumberBox val="4" passingValue={this.onClick} select={1} />
                <NumberBox val="5" passingValue={this.onClick} select={1} />
                <NumberBox val="6" passingValue={this.onClick} select={1} />
                <NumberBox val="7" passingValue={this.onClick} select={1} />
                <NumberBox val="8" passingValue={this.onClick} select={1} />
                <NumberBox val="9" passingValue={this.onClick} select={1} />
            </div>
        )
    }
}

export default SelectNumber
