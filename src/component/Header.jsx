import { Flex, Heading, Button,Image } from "@chakra-ui/react";

import moonIcon from "../assets/icon/icon-moon.svg";
import sunIcon from "../assets/icon/icon-sun.svg";

const Header = ({colorMode, toggleColorMode}) => {
  return (
    <Flex justifyContent={"space-between"}>
      <Heading as="h2" size="xl" color="white" letterSpacing={".5em"}>TODO</Heading>
    <Button variant={"ghost"} onClick={toggleColorMode}>
        <Image src={colorMode === "light" ? moonIcon : sunIcon}/>
    </Button>
    </Flex>
  );
};

export default Header;
