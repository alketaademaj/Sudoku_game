import React from "react";

function ChangeNumber(props) {
  const sudokuChange = () => {
    if (
      props.initialvalue[props.selected[0] * 9 + props.selected[1]] === null
    ) {
      // == it doesnt care about the datatypes, === it checks the datatypes too
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
