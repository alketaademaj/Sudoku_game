import React from "react";

function ChangeNumber(props) {
  //I NEED A NEW ARRAY WITH VALUES THAT WILL BE PUSHED TO ABOX AS A NEW DIV AND THEN STYLE THAT DIV
  //Delete the previous div and push a new one to its place

  const sudokuChange = () => {
    if (props.numbValue[props.selected[0] * 9 + props.selected[1]] == null) {
      const tempCopy = [...props.numbValue];
      tempCopy[props.selected[0] * 9 + props.selected[1]] = props.value;
      props.setnumbValue(tempCopy);
    }
  };

  return (
    <div>
      <div className="smallBox" onClick={sudokuChange}>
        {props.value}
      </div>
    </div>
  );
}

export default ChangeNumber;
