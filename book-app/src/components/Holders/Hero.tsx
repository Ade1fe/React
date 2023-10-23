import { Box } from "@chakra-ui/react"
import HeroImg from "../Resueables/HeroImg"
import HeroText from "../Resueables/HeroText"
import demoPic from "../../assets/images/27740-removebg-preview.png"


const Hero = () => {
  return (
    <Box display={["grid", "grid","flex"]} as="section"
    justifyContent="center" alignItems="center"
    mt={10}>
        <HeroImg pic={demoPic} />
      <HeroText />
      
    </Box>
  )
}

export default Hero
