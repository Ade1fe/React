import { Box } from '@chakra-ui/react'
import { HeroCarousel } from '../../components'
import SearchPage from '../searchpage'


const MenuPage = () => {
  return (
    <Box bg='#000'>
      <SearchPage />
      <HeroCarousel />
   </Box>
  )
}

export default MenuPage
