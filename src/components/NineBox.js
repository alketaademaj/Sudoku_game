import React, { Component } from 'react'
import NumberBox from './NumberBox' //same file reference can you hear me?

export class NineBox extends Component {
    render() {
        return (
            <div className="nineBox">
                <NumberBox />
                <NumberBox />
                <NumberBox />
                <NumberBox />
                <NumberBox />
                <NumberBox />
                <NumberBox />
                <NumberBox />
                <NumberBox />
            </div>
        )
    }
}

export default NineBox
