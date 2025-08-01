import React, { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTasks = () => {
<<<<<<< HEAD
    if (todo.trim() === "") {
      alert("Please enter a task in the input");
      return;
    }

    const newTodo = {
      id: Date.now(), // Unique ID using timestamp
      text: todo.trim(),
    };

    setTodos([...todos, newTodo]);
    setTodo(""); // Reset input
  };

=======
    if (todo.trim() === " ") return;

    setTodos([...todos, todo]);
    setTodo(" ");
  };
>>>>>>> e7442f3598e1616cd990713762cfa08cbf5683da
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleTasks();
    }
  };
<<<<<<< HEAD

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container py-5">
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
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
        {todos.map((item) => (
          <li
            key={item.id}
            className="border my-2 p-2 font-bold flex justify-between"
          >
            {item.text}
            <div className="flex gap-3">
              <span className="border px-2 cursor-pointer hover:bg-gray-400 hover:text-white rounded-2xl">
                Update
              </span>
              <span
                className="border px-2 cursor-pointer hover:bg-gray-400 hover:text-white rounded-2xl"
                onClick={() => deleteTodo(item.id)}
              >
                Delete
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
=======
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
>>>>>>> e7442f3598e1616cd990713762cfa08cbf5683da
  );
};

export default Todolist;
