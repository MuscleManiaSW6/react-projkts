import "./App.css";
import Todo from "./Todo";
import List from "./List";
import Counter from "./Counter";
import { useState, useEffect } from "react";

function App() {
  const [storage, setStorage] = useState(() => {
    const todoData = JSON.parse(sessionStorage.getItem("todoList")) || [];
    return todoData;
  });

  useEffect(() => {
    sessionStorage.setItem("todoList", JSON.stringify(storage));
  }, [storage]);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  function saveStorage(newTodo) {
    setStorage((prev) => [...prev, newTodo]);
  }

  function handleDelete(id) {
    const newData = storage.filter((todo) => todo.id !== id);
    setStorage(newData);
  }

  function editTodo(id, text) {
    setEditId(id);
    setEditText(text);
  }

  function saveEdit(id) {
    if (editText.trim() == "") {
      setEditId(null);
      setEditText("");
      alert("Please enter your task");
      return;
    }

    const newData = storage.map((todo) =>
      todo.id === id ? { ...todo, todo: editText } : todo,
    );
    setStorage(newData);
    setEditId(null);
    setEditText("");
  }

  function toggleComplete(id) {
    const newData = storage.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setStorage(newData);
  }

  return (
    <div className="app-layout">
      <div className="body-container">
        <Todo dataBase={saveStorage} />
        <List
          renderData={storage}
          handleClick={handleDelete}
          editId={editId}
          editText={editText}
          setEditText={setEditText}
          editTodo={editTodo}
          saveEdit={saveEdit}
          setEditId={setEditId}
          toggleComplete={toggleComplete}
        />
      </div>

      <div className="side-counter">
        <Counter storage={storage} />
      </div>
    </div>
  );
}

export default App;
