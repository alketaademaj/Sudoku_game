import React, { Component } from 'react'
import NineBox from './NineBox'

export class CompleteBox extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            selected: []
        }
    }
    
    onClick = (first, second) => {
        this.setState({selected: [first, second]})
        
        console.log(this.state.selected)
    };

    render() {
        return (
            <div className ="complete">
                <NineBox val = {[1,2,3,4,5,6,7,8,9]} biggerBox = {1} valuebox= {this.onClick} />
                <NineBox val = {[1,2,3,4,5,6,7,8,9]} biggerBox = {2} valuebox= {this.onClick} />
                <NineBox val = {[1,2,3,4,5,6,7,8,9]} biggerBox = {3} valuebox= {this.onClick} />
                <NineBox val = {[1,2,3,4,5,6,7,8,9]} biggerBox = {4} valuebox= {this.onClick} />
                <NineBox val = {[1,2,3,4,5,6,7,8,9]} biggerBox = {5} valuebox= {this.onClick} />
                <NineBox val = {[1,2,3,4,5,6,7,8,9]} biggerBox = {6} valuebox= {this.onClick} />
                <NineBox val = {[1,2,3,4,5,6,7,8,9]} biggerBox = {7} valuebox= {this.onClick} />
                <NineBox val = {[1,2,3,4,5,6,7,8,9]} biggerBox = {8} valuebox= {this.onClick} />
                <NineBox val = {[1,2,3,4,5,6,7,8,9]} biggerBox = {9} valuebox= {this.onClick} />
            </div>
        )
    }
}

export default CompleteBox
