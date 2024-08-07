import React from "react";
import { useState } from "react";
import "../css/TodoCreate.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 999999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInput();
  };
  return (
    <div className="create-todo-container">
      <div>
        <input
          className="todo-input"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Todo giriniz"
        />
      </div>
      <div>
        <button onClick={createTodo} className="create-todo-btn">
          {" "}
          Todo Olustur
        </button>
      </div>
    </div>
  );
}

export default TodoCreate;
