import { Box, Image, Text } from '@chakra-ui/react'
import { HeroCarousel } from '../../components'
import SearchPage from '../searchpage'
import { earphoneimg, musicnoteimg } from '../../assets'
import { TopArtists, TopMusicComp } from '..'


const MenuPage = () => {
  return (
    <Box bg='#000'>
      <SearchPage />

   <Box display="flex" alignItems={"center"} gap='2' mb={1} mt={[6,8,10]}> 
   <Image src={musicnoteimg} boxSize={[14,16,20]} />
      <Text fontFamily="Protest Revolution, sans-serif" fontWeight='600' fontSize={['lg', 'x-large', 'xx-large']}> Discover Tracks</Text>
   </Box>
      <HeroCarousel />
      
<Box display={['grid', 'grid', 'grid', "flex"]} gap='4'  mt={[10,12,14]} >
<Box flex="3">
   <Box display="flex" alignItems={"center"} gap='2'mb={1}> 
   <Image src={earphoneimg} boxSize={[14,16,20]} />
      <Text fontFamily="Protest Revolution, sans-serif" fontWeight='600' fontSize={['lg', 'x-large', 'xx-large']}> Top Music</Text>
   </Box>

   <TopMusicComp />
   </Box>

  <Box flex="1">
  <TopArtists />
  </Box>
</Box>

   </Box>
  )
}

export default MenuPage
