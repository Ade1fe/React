import { Box, Image, Text } from "@chakra-ui/react"
import pic from "../../assets/images/yuji.jpg"

const AdvertTwo = () => {
  return (
    <Box mt={[20, "32"]}>
        <Box w={['95%', '95%', '80%']} mx='auto'  py={5} px={[2,4]} display='flex' gap={[2,4]} alignItems='end' shadow='base'  >

<Image src={pic} w={['100px', '150px']} h='auto' mt='-24'/>
<Box fontSize={["sm", 'md']}>
  <Text as='h1' fontSize={['lg', 'x-large', 'xx-large']} fontWeight='bold'>Jujutsu Kaisen</Text>
  <Text noOfLines={[4,5,null]}>The series follows Yuji Itadori, a high school
   student who stumbles upon a cursed object containing a powerful Curse, 
   a malevolent spirit. In an attempt to save his friends, Yuji consumes the object,
    making him the host of this malevolent force. This act forces him to join the Tokyo
     Jujutsu High, an organization dedicated to fighting 
  Curses and protecting humanity from the dark forces of the supernatural world.</Text>
</Box>

</Box>
    </Box>
  )
}

export default AdvertTwo
