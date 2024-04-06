import { Box, Image,Text } from '@chakra-ui/react'
import { logoimg } from '../assets/imgs'

const Navbar = () => {
  return (
    <Box display='flex'>
        <Image boxSize='50px' src={logoimg} />
      <Text>COINEASE</Text>
    </Box>
  )
}

export default Navbar
