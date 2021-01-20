import React, { Component } from 'react'
import NineBox from './NineBox'

export class CompleteBox extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selected: [],
        }
    }
    
    onClick = (row, column) => {
        this.setState({selected: [row, column]})
    };

    render() {

        const row = []

        for(let x = 1; x <=9; x++) {
            row.push(<NineBox key={x} row = {x} passingValue = {this.onClick}/>)
        }

        return (
            <div className ="complete">
                {row}
            </div>
        )
    }
}

export default CompleteBox
