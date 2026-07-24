import { useState } from "react";

const Todo = ({ dataBase }) => {
  const [input, setInput] = useState("");

  function handleClick(e) {
    e.preventDefault();
    if (input.trim() == "") {
      alert("Please enter a task");
      return;
    }

    const todos = {
      id: crypto.randomUUID(),
      todo: input,
      completed: false,
    };

    dataBase(todos);

    resetInput();
  }

  function resetInput() {
    setInput("");
  }

  return (
    <form className="form-container" onSubmit={handleClick} noValidate>
      <Input inputValue={input} setInputValue={setInput} />
      <AddBtn />
    </form>
  );
};

const Input = ({ inputValue, setInputValue }) => {
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <label htmlFor="todo-input">Enter your task:</label>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        name="todo-input"
        id="todo-input"
      />
    </>
  );
};

const AddBtn = () => {
  return (
    <>
      <button className="add-btn" type="submit">
        +
      </button>
    </>
  );
};

export default Todo;
