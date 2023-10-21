import { Box } from "@chakra-ui/react"
import HeroImg from "../Resueables/HeroImg"
import HeroText from "../Resueables/HeroText"


const Hero = () => {
  return (
    <Box display={["grid", "grid","flex"]} as="section"
    justifyContent="center" alignItems="center"
    mt={10}>
        <HeroImg />
      <HeroText />
      
    </Box>
  )
}

export default Hero
