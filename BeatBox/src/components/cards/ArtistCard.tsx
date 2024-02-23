import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface Artist {
  name: string;
  images: { url: string }[];

}

const ArtistCard: React.FC<{ artist: Artist }> = ({ artist }) => {
  return (
    <Box p='4' h={[ '']} bg='#111' my={2} fontFamily='Kanit, sans-serif'>
      <Image src={artist.images && artist.images.length > 0 ? artist.images[0].url : "https://via.placeholder.com/50x50"} alt={artist.name} mx='auto' w={[ '160px']} h='160px' borderRadius='50%' />
      <Text fontSize={['md', 'lg', 'x-large']} noOfLines={1} mt={1}>{artist.name}</Text>
      <Text fontSize='sm' textDecoration='underline' color='gray.600'>Artist</Text>
    </Box>
  )
}

export default ArtistCard
