import { Box,Text } from '@chakra-ui/react'
import { HeroOne, InfoComp, Navbar, PopularMenu, Services } from '../../components'

const Homepage = () => {
  return (
    <Box className="subtitle">
      <Box px="20px">  <Navbar /> </Box>
      <Box px="20px"> <HeroOne /> </Box>
      <Box className=""> <InfoComp /> </Box>
      <Box px="20px"  mt={['6rem']}>
        <Text textAlign='center' fontSize={['sm', 'md']} color='orange.400'>Product</Text>
        <Text textAlign='center' fontSize={['md','lg','x-large']} fontWeight='600'>Most Popular Items</Text>
         <PopularMenu /> 
         </Box>
      <Box className=""> <Services /> </Box>
      Homepage
    </Box>
  )
}

export default Homepage
