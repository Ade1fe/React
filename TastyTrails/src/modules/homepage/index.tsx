import { Box } from '@chakra-ui/react'
import { HeroOne, Navbar } from '../../components'

const Homepage = () => {
  return (
    <Box className='text-fonts'>
      <Box px="20px">  <Navbar /> </Box>
      <Box px="20px"> <HeroOne /> </Box>
      Homepage
    </Box>
  )
}

export default Homepage
