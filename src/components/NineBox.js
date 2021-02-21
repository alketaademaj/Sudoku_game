import React, { Component } from 'react'
import NumberBox from './NumberBox' //same file reference can you hear me?

export class NineBox extends Component {

    render() {

        const column = [0, 1, 2, 3, 4, 5, 6, 7, 8]

        return (
            <div className="nineBox">

                {column.map((ind, val) => {
                    if (ind === 3 || ind === 6) {
                        return <div key={ind} className="dummyDivParent" ><NumberBox column={ind} passingValue={this.props.passingValue} row={this.props.row} selected={this.props.selected} initialvalue={this.props.initialvalue} numbValue={this.props.numbValue} /> <div className="dummyDiv"> </div></div>
                    }
                    else {
                        return <NumberBox key={ind} column={ind} initialvalue={this.props.initialvalue} passingValue={this.props.passingValue} row={this.props.row} selected={this.props.selected} numbValue={this.props.numbValue} />
                    }
                })}
            </div>
        )
    }
}

export default NineBox
