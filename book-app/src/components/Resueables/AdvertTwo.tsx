import { Box, Image, Text } from "@chakra-ui/react"
import { DemoTextProps } from "./DemoText"

const AdvertTwo:React.FC<DemoTextProps> = ({ headings, texts,pic }) => {
  return (
    <Box mt={[20, "32"]}>
        <Box w={['95%', '95%', '80%']} mx='auto'  py={5} px={[2,4]} display='flex' gap={[2,4]} alignItems='end' shadow='base'  >

<Image src={pic} w={['100px', '150px']} h='auto' mt='-24'/>
<Box fontSize={["sm", 'md']}>
  <Text as='h1' fontSize={['lg', 'x-large', 'xx-large']} fontWeight='bold'>{headings}</Text>
  <Text noOfLines={[3,4,null]}>{texts}</Text>
</Box>

</Box>
    </Box>
  )
}

export default AdvertTwo
