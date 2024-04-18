import React, { useState } from "react"; // importing dependencies from react

//creating the Todo function as a React functional component
const Todo = () => {
  // Setting up state
  // todos is an array of objects and each object represents a todo item
  // each todo has a unique id, text and isCompleted property
  //use setTodos to add, remove or update todos in your application
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Learn Redux", isCompleted: false },
    { id: 3, text: "Build a project", isCompleted: false },
  ]);

  //inputValue represents the current value of the input field
  const [inputValue, setInputValue] = useState("");

  //addTodo function is used to add a new todo item to the todos array
  //addTodo is called when the form is submitted
  const addTodo = (e) => {
    //prevents the event from refreshing the page
    e.preventDefault();
    //checks that inputValue is not an empty string
    if (inputValue.trim() !== "") {
        //adds a new todo item to the todos array
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, isCompleted: false },
      ]);
      //clears the Input field after submitting the form
      setInputValue("");
    }
  };

  return (
    <div>
        {/* onSubmit prop is used to call the addTodo function when the form is submitted */}
      <form onSubmit={addTodo}>
        {/* added input information for props */}
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
