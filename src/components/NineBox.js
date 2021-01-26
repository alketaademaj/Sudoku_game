import React, { Component } from 'react'
import NumberBox from './NumberBox' //same file reference can you hear me?

export class NineBox extends Component {

    render() {

        const column = [1,2,3,4,5,6,7,8,9]

        return (
            <div className="nineBox">

                {column.map((ind, val) => {
                    return <NumberBox key = {ind} column = {ind} passingValue = {this.props.passingValue} row = {this.props.row} selected = {this.props.selected}  numbValue = {this.props.numbValue} />
                })}
            </div>
        )
    }
}

export default NineBox
