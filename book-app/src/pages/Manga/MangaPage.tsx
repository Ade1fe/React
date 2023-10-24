
import { Box , useColorModeValue} from '@chakra-ui/react'
import { Advert, AnimeFive, AnimeFour, AnimeOne, AnimeThree, AnimeTwo, Carousels, DemoText, Mainlayout } from '../../assets'

const MangaPage = () => {
  const bgs = useColorModeValue('#f1f1f1', 'gray.700');

  return (
    <Mainlayout>
      <Carousels />
      <AnimeOne />
      <Box display={['grid', 'flex', 'flex']} justifyContent='center' gap={4} alignItems='center' px='4' mt={['12',14,20]}>
      <Advert />
      <DemoText />
      </Box>
      <Box bg={bgs} pb={3}>
      <AnimeTwo />
      <AnimeThree />
      </Box>
      <AnimeFour />
      <AnimeFive />
    </Mainlayout>
  )
}

export default MangaPage
