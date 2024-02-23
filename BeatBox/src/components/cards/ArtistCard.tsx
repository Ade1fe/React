import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface Artist {
  name: string;
  images: { url: string }[];

}

const ArtistCard: React.FC<{ artist: Artist }> = ({ artist }) => {
  return (
    <Box p='4' w={['150px','160px','170px', '180px']} bg='#111' my={2}>
      <Image src={artist.images && artist.images.length > 0 ? artist.images[0].url : ""} alt={artist.name} mx='auto' w={['130px', '140px', '150px', '160px']} borderRadius='50%' />
      <Text fontSize={['md', 'lg', 'x-large']}>{artist.name}</Text>
      <Text fontSize='sm' textDecoration='underline'>Artist</Text>
    </Box>
  )
}

export default ArtistCard
