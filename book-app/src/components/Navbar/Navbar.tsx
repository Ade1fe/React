import { Button, Spacer, useColorMode, Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useColorModeValue } from '@chakra-ui/react';


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('gray.400', 'gray.700')
  const color = useColorModeValue('white', 'white')

    return (
        <Box as="header" p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg={bg} color={color} >

        <Text fontSize={["md", "lg", "xl"]} fontWeight="bold">
                    <Link to="/" className='text-white hover:underline'>
                        Deife-Books
                    </Link>
                </Text>


            <Box  display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap={20}
        >
  
                <Text>
                    <Link to="/home" className='text-white hover:underline'>
                        Home
                    </Link>
                </Text>
                <Spacer />
                <Link to="/aboutus" className='text-white hover:underline'>
                    About
                </Link>
                <Spacer />
                <Link to="/" className='text-white hover:underline'>
                    Contact
                </Link>
           
            </Box>

            <Button onClick={toggleColorMode} >
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
        </Box>
    )
}

export default Navbar;
