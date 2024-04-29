import { Flex } from "@chakra-ui/react";

const InputButton = ({ colorMode }) => {
  return (
    <Flex
      m="2.5em 0"
      background={colorMode === "light" ? "white" : "#1a202c"}
    ></Flex>
  );
};

export default InputButton;
