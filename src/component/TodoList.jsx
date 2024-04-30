import React from "react";

const TodoList = ({ todos, colorMode }) => {
  return <>{

    todos.length > 0 && <TodoItem />
  }</>;
};

export default TodoList;
