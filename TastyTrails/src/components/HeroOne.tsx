import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const HeroOne = () => {
  return (
    <Box className='subtitle' fontFamily='300' my={['20px']} >
        <Box maxWidth="370px">
            <Text lineHeight={['normal', '38px',  '50px', '65px', '70px']} mb={['20px']} fontSize={['x-large','xx-large', 'xxx-large', '60px']}>The Fastest Delivery In <Text as='span' color='orange.400'>Your City</Text></Text>
            <Text fontSize={["md","lg",]} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officiis facilis vel iste illo aperiam, nostrum aut repellendus consequuntur quasi?</Text>
        </Box>
      
    </Box>
  )
}

export default HeroOne
