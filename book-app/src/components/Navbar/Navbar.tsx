import {
  useColorMode,
  Text,
  Box,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link, NavLink, useLocation  } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import '../../css/General.css';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'black.200');
  const color = useColorModeValue('black', 'white');
  const mainColor = useColorModeValue('white', 'white');
  const boxShadow = useBreakpointValue({
    base: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: 'none',
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bgs = useColorModeValue('#386641', 'gray.600');
  const hovers = useColorModeValue('#b7e4c7', 'gray.200');
  const location = useLocation();
  console.log(location.pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const fixedNavbarStyles = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  };

  return (
    <Box
      as="header"
      boxShadow="base"
      pos="relative"
      bg={bg}
      px={4}
      py={2}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      style={fixedNavbarStyles} 
      textTransform={"capitalize"}
    >
      <Text fontSize={["md", "lg", "xl"]} fontWeight="bold">
        <Link to="/">Deife-Books</Link>
      </Text>

      <Box display="flex" alignItems="center" order={{ base: 3, md: 2 }}>
        <Button onClick={toggleColorMode} ml={4} size="sm">
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
          className="slide-in-menu"
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
        display={{ base: isMenuOpen ? 'grid' : 'none', md: 'flex' }}
        textAlign="center"
        alignItems="center"
        pos={{ base: 'absolute', sm: 'absolute', md: 'static' }}
        top={{ base: '12', md: '0' }}
        left="0"
        width={{ base: '100%', md: 'fit-content' }}
        p={["5", "5", "0"]}
        bg={bg}
        color={color}
        gap={[5, 5, 10]}
        style={{
          boxShadow: boxShadow,
        }}
        className="slide-in-menu"
      >
       <Text as="h3" fontSize={["sm", "sm", "md"]} className="menu-item" _hover={{ color: 'green.200' }}>
       <NavLink
         
          to='/home'
          className={`menu-item ${
            window.location.pathname === '/' ? "" : ''
          }`}
        >
          Home
        </NavLink>
</Text>


        <Text as="h3" fontSize={["sm", "sm", "md"]} className="menu-item" _hover={{ color: 'green.200' }}>
        <NavLink
         
         to='/manga'
         className={`menu-item ${
           window.location.pathname === '/manga' ? "" : ''
         }`}
       >
         manga
       </NavLink>
        </Text>

        <Text as="h3" fontSize={["sm", "sm", "md"]} className="menu-item" _hover={{ color: 'green.200' }}>
        <NavLink
         
         to='/books'
         className={`menu-item ${
           window.location.pathname === '/books' ? "" : ''
         }`}
       >
         books
       </NavLink>
        </Text>

        <Text as="h3" fontSize={["sm", "sm", "md"]} className="menu-item" _hover={{ color: 'green.200' }}>
        <NavLink
         
         to='/aboutus'
         className={`menu-item ${
           window.location.pathname === '/aboutus' ? "" : ''
         }`}
       >
         aboutus
       </NavLink>
        </Text>

        <Text as="h3" fontSize={["sm", "sm", "md"]} className="menu-item" _hover={{ color: 'green.200' }}>
        <NavLink
         
         to='/contactus'
         className={`menu-item ${
           window.location.pathname === '/contactus' ? "" : ''
         }`}
       >
         contactus
       </NavLink>
        </Text>

        <Text
          as="h3"
          fontSize={["sm", "sm", "md"]}
          color={mainColor}
          px="2"
          py=""
          w="fit-content"
          borderRadius={3}
          mx="auto"
          bg={bgs}
          className="menu-item"
          _hover={{
            bg: hovers,
            color: 'black',
            fontWeight: 'bold',
            borderColor: 'green.100',
          }}
        >
           <NavLink
         
         to='/login'
         className={`menu-item ${
           window.location.pathname === '/login' ? "" : ''
         }`}
       >
         login
       </NavLink>
        </Text>
      </Box>
    </Box>
  );
};

export default Navbar;
