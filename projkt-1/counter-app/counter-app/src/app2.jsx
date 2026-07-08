import "./App.css";
import { useState, useRef } from "react";

const CounterContainer = () => {
  return (
    <>
      <CounterDisplay />
      
    </>
  );
};


const CounterDisplay = () => {

  const [counter, setCounter] = useState({
    value: 0,
  });

  const InputRef = useRef(null);
  
  function handleIncrement() {
    const inputValue = Number(InputRef.current.value)
    setCounter({...counter, value: counter.value + inputValue})
    console.log('+done')
  }

  function handleDecrement() {
    const inputValue = Number(InputRef.current.value)
    setCounter({...counter, value: counter.value - inputValue})
    console.log('-done')
  }

  function handleReset() {
    setCounter({...counter, value: 0});

  }

  return (
    <div className="container">

      <h2 className="heading">Counter:{` ${counter.value}`}</h2> <br />

      <label className="label" htmlFor="input">Enter a number:</label> <br />
      <input className="input" ref={InputRef} type="number" name="number" id="input" /> <br /> <br />

      <div className="button-container">

      <button onClick={handleIncrement} className="add-button" type="button">+</button>
      <button onClick={handleReset} className="reset-button" >Reset</button>
      <button onClick={handleDecrement} className="minus-button" type="button">-</button>

      </div>

    </div>
  );
};


const Buttons = ({incValue, decValue, reset })=> {
  return (
    <>
      <div className="button-container">

      <button onClick={handleIncrement} className="add-button" type="button">+</button>
      <button onClick={handleReset} className="reset-button" >Reset</button>
      <button onClick={handleDecrement} className="minus-button" type="button">-</button>

      </div>
    </>
  )
}


export default function App() {
  return (
    <div className="">
      <CounterContainer />
    </div>
  );
}
