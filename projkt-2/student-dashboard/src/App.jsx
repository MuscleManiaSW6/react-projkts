import "./App.css";
import Form from "./Form";
import Table from "./Table";

import { useState } from "react";

export default function App() {
  const [storage, setStorage] = useState(() => {
    try {
      const studentData = JSON.parse(sessionStorage.getItem("students")) || [];
      return studentData;
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  function saveStorage(newStudent) {
    const newData = [...storage, newStudent];
    setStorage(newData);
    sessionStorage.setItem("students", JSON.stringify(newData));
  }

  function handleDelete(id) {
    const newData = storage.filter((student) => student.id !== id);
    setStorage(newData);
    sessionStorage.setItem("students", JSON.stringify(newData));
  }

  return (
    <main className="">
      <Form dataBase={saveStorage}></Form>
      <Table renderData={storage} handleClick={handleDelete}></Table>
    </main>
  );
}
