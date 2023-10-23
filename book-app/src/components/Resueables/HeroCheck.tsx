import { Box } from "@chakra-ui/react"
import HeroImg from "../Resueables/HeroImg"
import HText from "../Resueables/HText"
import demoPic from "../../assets/images/19021605-removebg-preview.png"


const HeroCheck = () => {
  return (
    <Box display={["grid", "grid","flex"]} as="section"
    justifyContent="center" alignItems="center"
    mt={0}>
        <HText />
      <HeroImg pic={demoPic} />
      
      
    </Box>
  )
}

export default HeroCheck
