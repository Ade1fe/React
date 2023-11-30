import { SearchIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box
      display="flex"
      position={'relative'}
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      py={4}
      px={6}
      borderBottom="0.1px solid #222"
      className="box"
    >
      <Box>
        <Text as="h1" fontSize="3xl" fontWeight="bold" color="blue.500">
          Deife-Weather
        </Text>
      </Box>

      
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          aria-label="Toggle menu"
          icon={isMenuOpen ? <CloseIcon  /> : <HamburgerIcon />}
          color="blue.500"
          onClick={toggleMenu}
          fontSize={'25px'}
        />
      </Box>

      <Box position={['absolute','absolute', 'static']} p={[4, 4, 0]} zIndex={50}
      bg={'black'} left={0} top={'80px'} w={['full', "full", "65%", "60%"]}
      display={{ base: isMenuOpen ? "block" : "none", md: "flex" }}
      alignItems={"center"}
      gap={8}
      justifyContent={'space-between'}
      className="box"
      >

      <InputGroup w={['100%','100%', "300px"]} ml={[0,0,4]} mb={[4,4,0]}>
        <Input
          placeholder="Search country"
          size="md"
          _focus={{ variant: "flushed" }}
          borderRadius="18px"
          outline="none"
          focusBorderColor="gray.400"
          color="white"
          width="100%"
          bg="#222"
          p={2}
          pr={7}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search database"
            icon={<SearchIcon />}
            color="blue.500"
            mt={3}
            mr={2}
            _hover={{ color: "white" }}
          />
        </InputRightElement>
      </InputGroup>


        <Text as="h3" fontWeight={400} fontSize={["sm", 'md']}>
          Welcome back!{" "} <br />
          <Text as="span" fontWeight={700} color="gray.600">
            Oluwadamisi Damilola
          </Text>
        </Text>
      </Box>
    </Box>
  );
};

export default Navbar;
