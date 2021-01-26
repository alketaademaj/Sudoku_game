import './App.css';
import CompleteBox from './components/CompleteBox';
import SelectNumber from './components/SelectNumber';
import { useState } from 'react';
//import NineBox from './components/NineBox'

function App() {

  const [numbValue, setnumbValue] = useState(Array(81))
  const [selected, setSelected] = useState(Array(2))
  //setnumbValue(numbValue)

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <div className="centerAlign">
        <CompleteBox numbValue = {numbValue} selected = {selected} />
      </div>
      <div className="centerAlign">
        <SelectNumber numbValue = {numbValue} />
      </div>
    </div>
  );
}

export default App;
