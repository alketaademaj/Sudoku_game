import './App.css';
import CompleteBox from './components/CompleteBox';
import SelectNumber from './components/SelectNumber';
import { useState } from 'react';
//import NineBox from './components/NineBox'

function App() {

  const [numbvalue, setnumbValue] = useState(["1","5",null,null,"8",null,"7",null,"4","7","8","6",null,"5","4",null,null,null,null,null,"9","6",null,null,"1",null,null,null,null,"2",null,"1",null,"5","7","8","5",null,null,null,null,null,"3",null,null,null,null,null,null,null,"3",null,"1","2",null,"3",null,null,null,"1","6",null,null,null,"6",null,"4",null,"5","8","3","7","9",null,null,"3",null,null,null,"5",null]) //setnumbValue, the method, allows you to change the state
  const [selected, setSelected] = useState(Array(2))

  console.log(numbvalue)
  //setnumbValue(numbValue)

 const onclick = (row, column) => {
    setSelected([row, column])
    //console.log(this.state.selected)
};

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <div className="centerAlign">
        <CompleteBox numbValue = {numbvalue} selected = {selected} changeSelected = {onclick} />
      </div>
      <div className="centerAlign">
        <SelectNumber numbValue = {numbvalue} selected = {selected} setnumbValue = {setnumbValue} />
      </div>
    </div>
  );
}

export default App;
