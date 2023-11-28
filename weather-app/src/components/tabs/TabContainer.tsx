import { Box, Image, Text } from "@chakra-ui/react"


const TabContainer = () => {
  return (
    <Box display="grid" gridTemplateColumns={['1fr', '1fr']}>
    <Text bg="#222" as="p">
      Monday <Text as="span">12:20pm</Text>
    </Text>
    <Text id="degree">15°</Text>
    <Image src="" />
  </Box>
  
  )
}

export default TabContainer
