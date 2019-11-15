import React from 'react';
import './App.css';

function App() {
  let [firstNum, setFirstNum] = React.useState('');
  let [secondNum, setSecondNum] = React.useState('');
  let [operator, setOperator] = React.useState('');
  let [result, setResult] = React.useState(null);

  function placeNumber(num) {
    if (operator === '') {
      setFirstNum(firstNum + num);
    } else {
      setSecondNum(secondNum + num);
    }
  }

  function calculate() {
    switch (operator) {
      case '+':
        setResult(Number(firstNum) + Number(secondNum));
        break;
      case '-':
        setResult(firstNum - secondNum);
        break;
      case '/':
        setResult(firstNum / secondNum);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className="calculator">
        <div className="display">
          {firstNum === '' ? 0 : firstNum}
          {operator}
          {secondNum}
        </div>

        <div>
          <button>Clear</button>
          <button onClick={() => setOperator('/')}>/</button>
        </div>
        
        <div>
          <button onClick={() => placeNumber(7)}>7</button>
          <button onClick={() => placeNumber(8)}>8</button>
          <button onClick={() => placeNumber(9)}>9</button>
          <button onClick={() => setOperator('-')}>-</button>
        </div>

        <div>
          <button onClick={() => placeNumber(4)}>4</button>
          <button onClick={() => placeNumber(5)}>5</button>
          <button onClick={() => placeNumber(6)}>6</button>
          <button onClick={() => setOperator('+')}>+</button>
        </div>

        <div>
          <button onClick={() => placeNumber(1)}>1</button>
          <button onClick={() => placeNumber(2)}>2</button>
          <button onClick={() => placeNumber(3)}>3</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>

      Result: {result}
    </div>
  );
}

export default App;
