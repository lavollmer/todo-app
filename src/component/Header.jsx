import { Flex, Heading, Button,Image } from "@chakra-ui/react";

import moonIcon from "../assets/icon/icon-moon.svg";
import sunIcon from "../assets/icon/icon-sun.svg";

const Header = () => {
  return (
    <Flex justifyContent={"space-between"}>
      <Heading as="h2" size="xl" color="white" letterSpacing={".5em"}>TODO</Heading>
    <Button variant={"ghost"} onClick={}>
        <Image/>
    </Button>
    </Flex>
  );
};

export default Header;
