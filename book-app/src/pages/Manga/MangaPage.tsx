
import { Box , useColorModeValue} from '@chakra-ui/react'
import pic from "../../assets/images/kimi.jpg"
import pics from "../../assets/images/yuji.jpg"
import { Advert, AdvertTwo, AnimeFive, AnimeFour, AnimeOne, AnimeThree, AnimeTwo, Carousels, DemoText, Mainlayout, pic1, pic2 } from '../../assets'

const MangaPage = () => {
  const bgs = useColorModeValue('#f1f1f1', 'gray.700');

  return (
    <Mainlayout>
      <Carousels img2={pic1} img1={pic2} />
      <AnimeOne />
      <Box display={['grid', 'flex', 'flex']} justifyContent='center' gap={4} alignItems='center' px='4' mt={['12',14,20]}>
      <Advert pic={pic} />
      <DemoText pic=''
  headings="Demon Slayer: Kimetsu no Yaiba"
  texts={`"Demon Slayer: Kimetsu no Yaiba" is a renowned manga series created by Koyoharu Gotouge that inspired a hit anime and film. It's set in Taisho-era Japan and follows Tanjiro Kamado, who becomes a demon slayer after his family is attacked, and his sister Nezuko turns into a demon. The anime, especially "Demon Slayer: Mugen Train," received high praise for its animation and storytelling, making "Demon Slayer" a global sensation in the anime and manga world. It has a massive fan base due to its gripping plot, memorable characters, and exceptional art.`}
/>
      </Box>
      <Box bg={bgs} pb={3}>
      <AnimeTwo />
      <AnimeThree />
      </Box>
      <AnimeFour />
      <AnimeFive />
      <AdvertTwo pic={pics} headings='Jujustu Kaisen' texts='The series follows Yuji Itadori, a high school
   student who stumbles upon a cursed object containing a powerful Curse, 
   a malevolent spirit. In an attempt to save his friends, Yuji consumes the object,
    making him the host of this malevolent force. This act forces him to join the Tokyo
     Jujutsu High, an organization dedicated to fighting 
  Curses and protecting humanity from the dark forces of the supernatural world.'/>
    </Mainlayout>
  )
}

export default MangaPage
