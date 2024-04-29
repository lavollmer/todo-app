import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import Circle from "./Circle";

const InputButton = ({ colorMode }) => {
  return (
    <Flex
      m="2.5em 0"
      background={colorMode === "light" ? "white" : "#1a202c"}
      p="2"
      borderRadius={"0.5em"}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents={"none"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"100%"}
        >
          <Circle width={"22px"} height={"22px"} />
        </InputLeftElement>
        <Input
          fontWeight={"700"}
          fontSize={"1.2em"}
          type="text"
          h="3em"
          variant={"unstyled"}
          placeholder="Enter your todo help ..."
        />
      </InputGroup>
    </Flex>
  );
};

export default InputButton;
