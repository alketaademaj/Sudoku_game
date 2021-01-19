import React, { Component } from 'react'
import NumberBox from './NumberBox' //same file reference can you hear me?

export class NineBox extends Component {

    constructor(props) {
        super(props)

        if(props.val != null) {
            this.state = {
                alks: props.val,
                tans: props.biggerBox,
                value: props.valuebox
            } 
        }
        else {
            this.state = {
                alks: null
            }
        }
    }

    render() {
        return (
            <div className="nineBox">
                <NumberBox val = {this.state.alks[0]} tans = {this.state.tans} passingValue = {this.state.value} />
                <NumberBox val = {this.state.alks[1]} tans = {this.state.tans} passingValue = {this.state.value} />
                <NumberBox val = {this.state.alks[2]} tans = {this.state.tans} passingValue = {this.state.value} />
                <NumberBox val = {this.state.alks[3]} tans = {this.state.tans} passingValue = {this.state.value} />
                <NumberBox val = {this.state.alks[4]} tans = {this.state.tans} passingValue = {this.state.value} />
                <NumberBox val = {this.state.alks[5]} tans = {this.state.tans} passingValue = {this.state.value} />
                <NumberBox val = {this.state.alks[6]} tans = {this.state.tans} passingValue = {this.state.value} />
                <NumberBox val = {this.state.alks[7]} tans = {this.state.tans} passingValue = {this.state.value} />
                <NumberBox val = {this.state.alks[8]} tans = {this.state.tans} passingValue = {this.state.value} />
            </div>
        )
    }
}

export default NineBox
