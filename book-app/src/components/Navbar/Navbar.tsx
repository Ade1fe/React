import {
    useColorMode,
    Text,
    Box,
    Button,
    useBreakpointValue ,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import { FaSun, FaMoon } from 'react-icons/fa';
  import { useColorModeValue } from '@chakra-ui/react';
  import { BiMenuAltRight } from 'react-icons/bi';
  import {AiOutlineClose} from "react-icons/ai"
  import { useState } from 'react';
  import "../../css/General.css"


  
  
  const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('white', 'black.200');
    const color = useColorModeValue('black', 'white');
    const mainColor = useColorModeValue('white', 'white');
    const boxShadow = useBreakpointValue({ base: '0 2px 4px rgba(0, 0, 0, 0.1)', md: 'none' });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <Box
        as="header"
        boxShadow='base'
        pos="relative"
        px={4}
        py={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        
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
            size='sm'
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
            className='slide-in-menu'
            overflow="hidden"
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
          alignItems="center"
          pos={{ base: "absolute", sm: "absolute", md: "static" }}
          top={{ base: "14", md: "0" }}
          left="0"
          width={{ base: "100%", md: "fit-content" }}
          p={["5", "5", "0"]}
        bg={bg}
        color={color}
          gap={[5,5,10]}
          style={{
            boxShadow: boxShadow,
          }}
        
          className='slide-in-menu'
        >
         <Text  as="h3" fontSize={["sm","sm","md"]} className="menu-item" _hover={{ color: 'green.200' }} >  
            <Link to="/home" >
              Home
            </Link>
          </Text >

         <Text  as="h3" fontSize={["sm","sm","md"]} className="menu-item" _hover={{ color: 'green.200' }} >  
         <Link to="/manga" >
            Manga
          </Link >
         </Text>

        <Text  as="h3" fontSize={["sm","sm","md"]} className="menu-item" _hover={{ color: 'green.200' }} >  
              <Link to="/books" >
            Books
          </Link>
        </Text>

        <Text  as="h3" fontSize={["sm","sm","md"]} className="menu-item" _hover={{ color: 'green.200' }} >  
          <Link to="/aboutus" >
            About
          </Link >
          </Text>

          <Text  as="h3" fontSize={["sm","sm","md"]} className="menu-item" _hover={{ color: 'green.200' }} >  
         <Link to="/contactus" >
            Contact
          </Link >
         </Text>

        <Text  as="h3" fontSize={["sm","sm","md"]} color={mainColor}
         px="2" py="" w="fit-content" borderRadius={3} mx="auto" bg={"green.100"} borderWidth='2px'
        className="menu-item" _hover={{ color: 'green.100' , background: 'transparent' , 
        fontWeight:'bold',
      
        borderColor: 'green.100',}} >  
              <Link to="/books" >
            Login
          </Link>
        </Text>

        </Box>
      </Box>
    );
  };
  
  export default Navbar;
  