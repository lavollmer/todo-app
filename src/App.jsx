import "./App.css";
import Todo from "./component/Todo";
import Background from "./component/Background";
import { useColorMode, Box } from "@chakra-ui/react";
import { useState } from "react";
import lightBackgroundImage from "./assets/images/bg-desktop-light.jpg";
import darkBackgroundImage from "./assets/images/bg-desktop-dark.jpg";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return <>
  <Box
  backgroundImage={
    colorMode === "light" ?
    lightBackgroundImage :
    darkBackgroundImage
  }
  backgroundSize={"cover"}
  h={"60vh"}
  
  >


  </Box>

  </>;
}

export default App;
