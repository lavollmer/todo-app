import "./App.css";
import { useColorMode, Box } from "@chakra-ui/react";
import { useState } from "react";
import lightBackgroundImage from "./assets/images/bg-desktop-light.jpg";
import darkBackgroundImage from "./assets/images/bg-desktop-dark.jpg";
import Header from "./component/Header"

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        backgroundImage={
          colorMode === "light" ? lightBackgroundImage : darkBackgroundImage
        }
        backgroundSize={"cover"}
        h={"40vh"}
      >
        <Box w="40%" p="4em 0" m="auto">
          <Header/>
        </Box>
      </Box>
    </>
  );
}

export default App;
