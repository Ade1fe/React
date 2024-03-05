import { Box } from '@chakra-ui/react'
import { HeroOne, InfoComp, Navbar, PopularMenu } from '../../components'

const Homepage = () => {
  return (
    <Box className='text-fonts'>
      <Box px="20px">  <Navbar /> </Box>
      <Box px="20px"> <HeroOne /> </Box>
      <Box className=""> <InfoComp /> </Box>
      <Box className=""> <PopularMenu /> </Box>
      Homepage
    </Box>
  )
}

export default Homepage
