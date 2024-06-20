import { Box, Heading,  } from "@chakra-ui/react"
import { Usage } from ".."


const Navbar = () => {
  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Heading as="h1" size="xl" mb="4">FilmHub</Heading>
       <div className="">   <Usage /> </div>
    </Box>
  )
}

export default Navbar
