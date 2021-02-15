import './App.css';
import CompleteBox from './components/CompleteBox'; //the default export that you use
import SelectNumber from './components/SelectNumber';
import { useState, useEffect } from 'react'; // for normal imports, for example always import the hooks from react - difference between class and function components
//import NineBox from './components/NineBox'

function App() {

  const [initialvalue, setinitialvalue] = useState(["1", "5", null, null, "8", null, "7", null, "4", "7", "8", "6", null, "5", "4", null, null, null, null, null, "9", "6", null, null, "1", null, null, null, null, "2", null, "1", null, "5", "7", "8", "5", null, null, null, null, null, "3", null, null, null, null, null, null, null, "3", null, "1", "2", null, "3", null, null, null, "1", "6", null, null, null, "6", null, "4", null, "5", "8", "3", "7", "9", null, null, "3", null, null, null, "5", null]) //setnumbValue, the method, allows you to change the state
  const [numbvalue, setnumbValue] = useState(["1", "5", null, null, "8", null, "7", null, "4", "7", "8", "6", null, "5", "4", null, null, null, null, null, "9", "6", null, null, "1", null, null, null, null, "2", null, "1", null, "5", "7", "8", "5", null, null, null, null, null, "3", null, null, null, null, null, null, null, "3", null, "1", "2", null, "3", null, null, null, "1", "6", null, null, null, "6", null, "4", null, "5", "8", "3", "7", "9", null, null, "3", null, null, null, "5", null]) //setnumbValue, the method, allows you to change the state
  const [selected, setSelected] = useState(Array(2))

  //console.log(selected)
  //setnumbValue(numbValue)

  const onclick = (row, column) => {
    setSelected([row, column])
    //console.log(this.state.selected)
  };

  const keyChange = (event) => {
    //console.log(selected)
    //console.log(event.key)
    if (event.key === "ArrowLeft") {
      if (selected[1] > 0) {
        setSelected([selected[0], selected[1] - 1]) //1. row, 2. column 
      }
    }
    else if (event.key === "ArrowRight") {
      if (selected[1] < 8) {
        setSelected([selected[0], selected[1] + 1]) //we are first getting the first value with select[0] and with select [1] the value of column
      }
    }
    else if (event.key === "ArrowUp") {
      if (selected[0] > 0) {
        setSelected([selected[0] - 1, selected[1]])
      }
    }
    else if (event.key === "ArrowDown") {
      if (selected[0] < 8) {
        setSelected([selected[0] + 1, selected[1]])
      }
    }
    else if (parseInt(event.key) > 0 && parseInt(event.key) < 10) {
      console.log(event.key)
      //now do your thing
      if (numbvalue[selected[0] * 9 + selected[1]] === null) { //array only understands the index of the elemnt 
        const temp = [...numbvalue]; //spreading numbValue into another array and storing it into temp
        temp[selected[0] * 9 + selected[1]] = event.key;
        setnumbValue(temp)
      }
    }
  }

  useEffect(() => { //will execute itself when the component is mounted
    document.addEventListener("keydown", keyChange)//first argument is the action, second argument is the function you want to execute when the event is triggered

    return () => { // like a callback function 
      document.removeEventListener("keydown", keyChange); //example if you are making a get/ajax request, whatever data we get as a return before storing it on a state 
    } // eslint-disable-next-line 
  }, [selected]) //only when it changes, the hook will be executed. It will only execute once, if it is left empty/ like componentdidmount

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <div className="centerAlign">
        <CompleteBox numbValue={numbvalue} initialvalue={initialvalue} selected={selected} changeSelected={onclick} />
      </div>
      <div className="centerAlign">
        <SelectNumber numbValue={numbvalue} selected={selected} setnumbValue={setnumbValue} initialvalue={initialvalue} />
      </div>
    </div>
  );
}

export default App;
