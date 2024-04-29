import axios from "axios";

export const fetchTodos = async () => {
  const { data } = await axios.get("https://localhost:3001/data");

  return data.todos;
};

const addTodo = async (todo) => {
  const { data } = await axios.get("https://localhost:3001/data");

  const newData = { todo, ...data.todos };

  await axios.post("https://localhost:3001/data", { todos: newData });
};
