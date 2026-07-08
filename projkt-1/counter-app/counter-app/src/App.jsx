import "./App.css";
import { useState, useEffect } from "react";

//* Counter Container Component

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);


  // Increment controller 
  function handleIncrement() {
    setCounter(counter + value );
  }


  // Decrement Controller
  function handleDecrement() {
    setCounter(counter - value );
  }


  // Reset Controller
  function handleReset() {
    setCounter(0);
    setValue(0);
  }

  return (
    <div className="container">
      <h2 className="heading">{`Counter: ${counter}`}</h2>
      <Input step={value} setStep={setValue} />
      <Buttons
        incValue={handleIncrement}
        reset={handleReset}
        decValue={handleDecrement}
      />
    </div>
  );
};



//* Input Component

const Input = ({ step, setStep }) => {
  const MIN = -100;
  const MAX = 100;


  // Input Validation
  const handleChange = (e) => {
    let newValue = Number(e.target.value);

    if (e.target.value === "") {
      setStep("");
    } else if (newValue < MIN) {
      setStep(MIN);
    } else if (newValue > MAX) {
      setStep(MAX);
    } else {
      setStep(newValue);
    }
  };

  return (
    <>
      <label className="label" htmlFor="input">
        Enter a number:
      </label>
      <input
        className="input"
        value={step}
        onChange={handleChange}
        type="number"
        name="number"
        id="input"
        min={MIN}
        max={MAX}
      />
    </>
  );
};



//* Button Component

const Buttons = ({ incValue, decValue, reset }) => {

  useEffect(() => {

    // Reset Key
    function resetKey(e) {
      if (e.key === "Delete" || e.key === "Del" || e.code === "Delete") {
        e.preventDefault();
        reset();
      }
    }
    

    // Increment Key
    function incrementKey(e) {
      if (e.key === "ArrowUp" || e.code === "ArrowUp") {
        e.preventDefault();
        incValue();
      }
    }
    

    // Decrement Key
    function decrementKey(e) {
      if (e.key === "ArrowDown" || e.code === "ArrowDown") {
        e.preventDefault();
        decValue();
      }
    }


    document.addEventListener("keydown", resetKey);
    document.addEventListener("keydown", incrementKey);
    document.addEventListener("keydown", decrementKey);


    return () => {
      document.removeEventListener("keydown", resetKey);
      document.removeEventListener("keydown", incrementKey);
      document.removeEventListener("keydown", decrementKey);
    };
  }, [reset, incValue, decValue]);


  return (
    <div className="button-container">
      <button onClick={incValue} className="add-button" type="button">
        +
      </button>
      <button onClick={reset} className="reset-button">
        Reset
      </button>
      <button onClick={decValue} className="minus-button" type="button">
        -
      </button>
    </div>
  );
};



//* App Component

export default function App() {
  return (
    <div>
      <CounterContainer />
    </div>
  );
}