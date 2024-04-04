import React from "react";

const Todo = () => {
    // todos is an array of objects and each object represents a todo item
    // each todo has a unique id, text and isCompleted property
    //use setTodos to add, remove or update todos in your application
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Learn Redux", isCompleted: false },
    { id: 3, text: "Build a project", isCompleted: false },
  ]);
  return <div>Todo</div>;
};

export default Todo;
