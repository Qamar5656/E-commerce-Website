import React, { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTasks = () => {
    if (todo.trim() === " ") return;

    setTodos([...todos, todo]);
    setTodo(" ");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleTasks();
    }
  };
  return (
    <>
      <div className="container py-5">
        <div className="flex justify-center items-center mb-4">
          <input
            type="input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={handleKeyDown}
            name="search"
            className="border p-2"
          />

          <button
            className="border bg-primary text-dark p-2 font-bold cursor-pointer"
            onClick={handleTasks}
          >
            Add Todo
          </button>
        </div>
        <ul>
          {todos.map((value, key) => (
            <li
              key={key}
              className="border my-2 p-2 font-bold flex justify-between"
            >
              {value}
              <span className="border">Update </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todolist;
