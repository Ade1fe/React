import { Box,Image } from "@chakra-ui/react"
import demoPic from "../../assets/images/27740-removebg-preview.png"


const HeroImg = () => {
  return (
    <Box>
       <Image
    boxSize={['250px', '280px', '300px']}
    objectFit='contain'
    src={demoPic}
    alt='Dan Abramov'
    mx="auto"
  />
    </Box>
  )
}

export default HeroImg

