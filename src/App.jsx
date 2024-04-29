import "./App.css";
import Todo from "./component/Todo";
import Background from "./component/Background";
import { useColorMode } from "@chakra-ui/react";

function App() {
const {colorMode, toggleColorMode} = useColorMode();

  return (
    <>
      <Background />
      <Todo />
    </>
  );
}

export default App;
