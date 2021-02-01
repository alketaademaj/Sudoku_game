import React, { Component } from 'react'
import NineBox from './NineBox'

export class CompleteBox extends Component {

    //checking if the sudoku is filled correctly comes here

    render() {

        const row = []

        for(let x = 0; x <=8; x++) {
            row.push(<NineBox key={x} row = {x} passingValue = {this.props.changeSelected} selected = {this.props.selected} numbValue = {this.props.numbValue}/>)
        }

        return (
            <div className ="complete">
                {row}
            </div>
        )
    }
}

export default CompleteBox
