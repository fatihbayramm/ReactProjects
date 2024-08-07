import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import "../css/Todo.css";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;

  const [newTodo, setNewTodo] = useState(content);
  const [editable, setEditable] = useState(false);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };
  return (
    <div className="todo-container">
      <div>
        {editable ? (
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="editable-todo-input"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoIosRemoveCircle onClick={removeTodo} className="remove-todo" />

        {editable ? (
          <FaCheck onClick={updateTodo} className="confirm-todo" />
        ) : (
          <FaEdit onClick={() => setEditable(true)} className="edit-todo" />
        )}
      </div>
    </div>
  );
}

export default Todo;
