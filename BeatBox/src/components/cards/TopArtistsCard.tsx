import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

interface TopArtistsCardProps {
  imageUrl: string;
  artistName: string;
  noOfTracks: number;
}

const TopArtistsCard: React.FC<TopArtistsCardProps> = ({ imageUrl, artistName, noOfTracks }) => {
  return (
    <Box fontFamily='Kanit, sans-serif' display='flex' borderRadius='2xl' alignItems='center' gap='4' bg='#111' w={['']} py='3' px='4'>
      <Image boxSize={[10, 12, 14]} src={imageUrl} borderRadius='50%' border='4px' borderColor='purple.800' /> 
     <Box className="">
     <Text noOfLines={1} fontWeight='700'>{artistName}</Text>
      <Text noOfLines={1}>{noOfTracks} Tracks</Text>
     </Box>
    </Box>
  );
};

export default TopArtistsCard;
