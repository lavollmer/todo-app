import React, { useState } from "react";

const Todo = () => {
  // todos is an array of objects and each object represents a todo item
  // each todo has a unique id, text and isCompleted property
  //use setTodos to add, remove or update todos in your application
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Learn Redux", isCompleted: false },
    { id: 3, text: "Build a project", isCompleted: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    //prevents the event from refreshing the page
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, isCompleted: false },
      ]);
      setInputValue("");
    }
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Todo;
