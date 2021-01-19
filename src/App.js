import './App.css';
import CompleteBox from './components/CompleteBox';
import SelectNumber from './components/SelectNumber'
//import NineBox from './components/NineBox'

function App() {
  return (
    <div className="App">
      <h1>Sudoku Puzzle</h1>
      <div className="centerAlign">
        <CompleteBox />
      </div>
      <div className="centerAlign">
        <SelectNumber />
      </div>
    </div>
  );
}

export default App;
