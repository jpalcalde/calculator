import './App.css';
import freeCodeCampLogo from './images/freecodecamp.png'
import Button from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import { useState} from "react";
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState('');
  const addInput = val => {
      setInput(input + val)
  };
  const calculateResult = () => {
      if(input) {
          setInput(evaluate(input))
      }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
          <img className='freecodecamp-logo' src={ freeCodeCampLogo } alt="freecodecamo logo"/>
      </div>
      <div className='calculator-container'>
          <Screen input={input}/>
          <div className='row'>
              <Button handleClick={addInput}>1</Button>
              <Button handleClick={addInput}>2</Button>
              <Button handleClick={addInput}>3</Button>
              <Button handleClick={addInput}>+</Button>
          </div>
          <div className='row'>
              <Button handleClick={addInput}>4</Button>
              <Button handleClick={addInput}>5</Button>
              <Button handleClick={addInput}>6</Button>
              <Button handleClick={addInput}>-</Button>
          </div>
          <div className='row'>
              <Button handleClick={addInput}>7</Button>
              <Button handleClick={addInput}>8</Button>
              <Button handleClick={addInput}>9</Button>
              <Button handleClick={addInput}>*</Button>
          </div>
          <div className='row'>
              <Button handleClick={calculateResult}>=</Button>
              <Button handleClick={addInput}>0</Button>
              <Button handleClick={addInput}>.</Button>
              <Button handleClick={addInput}>/</Button>
          </div>
          <div className='row'>
              <ClearButton handleClear={() => setInput('')}>Clear</ClearButton>
          </div>
      </div>
    </div>
  );
}

export default App;
