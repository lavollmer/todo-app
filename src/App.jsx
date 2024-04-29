import "./App.css";
import { useColorMode, Box } from "@chakra-ui/react";
import lightBackgroundImage from "./assets/images/bg-desktop-light.jpg";
import darkBackgroundImage from "./assets/images/bg-desktop-dark.jpg";
import Header from "./component/Header";
import InputButton from "./component/InputButton";

//functional app component that uses the useColorMode hook from Chakra UI
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {/* Box component used to create a container for the background Image */}
      <Box
        backgroundImage={
          colorMode === "light" ? lightBackgroundImage : darkBackgroundImage
        }
        backgroundSize={"cover"}
        h={"40vh"}
      >
        <Box w="40%" p="4em 0" m="auto">
          <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
          <InputButton colorMode={colorMode} />
        </Box>
      </Box>
    </>
  );
}

export default App;
