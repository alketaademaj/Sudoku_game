import React from 'react'

function ChangeNumber(props) {
    console.log(props)

    return (
        <div>
            <div className="smallBox" numbValue = {this.props.numbValue} >{props.value}</div>
        </div>
    )
}

export default ChangeNumber 


