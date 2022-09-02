import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { TodoForm } from "./components/TodoForm";

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const addHandler = (title: string) => {
    console.log("Add New Todo", title);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
      </div>
    </>
  );
};

export default App;
