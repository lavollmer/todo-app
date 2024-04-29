import { Flex, Heading, Button, Image } from "@chakra-ui/react";

import moonIcon from "../assets/icon/icon-moon.svg";
import sunIcon from "../assets/icon/icon-sun.svg";

//functional component that receives two props colorMode and toggleColorMode
const Header = ({ colorMode, toggleColorMode }) => {
  return (
    //Flex is a flexible box layout from Chakra UI that allows alignment of child elements
    <Flex justifyContent={"space-between"}>
      {/* Heading component is used to display the title, as prop to specify the HTML elelement */}
      <Heading as="h2" size="xl" color="white" letterSpacing={".5em"}>
        TODO
      </Heading>
      {/* Button component is used to create a button that toggles color mode */}
      <Button variant={"ghost"} onClick={toggleColorMode} _hover="none" _active="none">
        {/* Image component is used to display an icon inside the button */}
        <Image src={colorMode === "light" ? moonIcon : sunIcon} />
      </Button>
    </Flex>
  );
};

export default Header;
