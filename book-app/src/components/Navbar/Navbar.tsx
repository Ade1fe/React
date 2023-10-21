import {
    useColorMode,
    Text,
    Box,
    Button,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import { FaSun, FaMoon } from 'react-icons/fa';
  import { useColorModeValue } from '@chakra-ui/react';
  import { BiMenuAltRight } from 'react-icons/bi';
  import {AiOutlineClose} from "react-icons/ai"
  import { useState } from 'react';


  
  
  const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('green.100', 'gray.700');
    const color = useColorModeValue('white', 'white');
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <Box
        as="header"
        pos="relative"
        px={4}
        py={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg={bg}
        color={color}
      >
        <Text fontSize={["md", "lg", "xl"]} fontWeight="bold">
          <Link to="/">
            Deife-Books
          </Link>
        </Text>
  
        <Box
          display="flex"
          alignItems="center"
          order={{ base: 3, md: 2 }} 
        >
          <Button
            onClick={toggleColorMode}
            ml={4}
            bg={bg}
            color={color}
            px={3}
            py={1}
            borderRadius={0}
            _hover={{ color: 'green.200' }}
          >
            {colorMode === 'light' ? (
              <>
                <FaSun size={20} />
                <Text ml={2}>Dark</Text>
              </>
            ) : (
              <>
                <FaMoon size={20} />
                <Text ml={2}>Light</Text>
              </>
            )}
          </Button>
  
          <Box
            onClick={toggleMenu}
            display={{ sm: 'block', md: 'none' }}
            ml={4}
          >
            {isMenuOpen ? (
                <AiOutlineClose size={30} />
            
            ) : (
                <BiMenuAltRight size={30} />
            )}
          </Box>
        </Box>
  
        <Box
          display={{ base: isMenuOpen ? "grid" : "none", md: "flex" }}
          textAlign="center"
          pos={{ base: "absolute", sm: "absolute", md: "static" }}
          top={{ base: "14", md: "0" }}
          left="0"
          width={{ base: "100%", md: "fit-content" }}
          p={["5", "5", "0"]}
          bg={bg}
          gap={[5,5,10]}
          color={color}
        >
         <Text  _hover={{ color: 'green.200' }}>  
            <Link to="/home" >
              Home
            </Link>
          </Text >

          <Text  _hover={{ color: 'green.200' }}>  
          <Link to="/aboutus" >
            About
          </Link >
          </Text>

          <Text  _hover={{ color: 'green.200' }}>  
         <Link to="/contactus" >
            Contact
          </Link >
         </Text>

         <Text  _hover={{ color: 'green.200' }}>  
         <Link to="/manga" >
            Manga
          </Link >
         </Text>

        <Text  _hover={{ color: 'green.200' }}>  
              <Link to="/books" >
            Books
          </Link>
        </Text>
        </Box>
      </Box>
    );
  };
  
  export default Navbar;
  