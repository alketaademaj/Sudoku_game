import React, { Component } from 'react'
import NineBox from './NineBox'

export class CompleteBox extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selected: [undefined, undefined]
        }
    }

    onclick = (row, column) => {
        this.setState({selected: [row, column]})
        //console.log(this.state.selected)
    };

    render() {

        const row = []

        for(let x = 1; x <=9; x++) {
            row.push(<NineBox key={x} row = {x} passingValue = {this.onclick} selected = {this.state.selected} />)
        }

        return (
            <div className ="complete">
                {row}
            </div>
        )
    }
}

export default CompleteBox
