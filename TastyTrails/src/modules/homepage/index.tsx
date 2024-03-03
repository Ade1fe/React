import { Box } from '@chakra-ui/react'
import { HeroOne, Navbar } from '../../components'

const Homepage = () => {
  return (
    <Box className='text-fonts'>
      <Box className="">  <Navbar /> </Box>
      <Box className=""> <HeroOne /> </Box>
      Homepage
    </Box>
  )
}

export default Homepage
