import React from 'react';
import { Box, Icon, Image, Text } from '@chakra-ui/react';
import { FaPlayCircle } from 'react-icons/fa';

// Define a TypeScript interface for the props
interface TopMusicCardProps {
  imageUrl: string;
  musicName: string;
  duration: string;
}

// Use the defined interface for the props
const TopMusicCard: React.FC<TopMusicCardProps> = ({ imageUrl, musicName, duration }) => {
  return (
    <Box bg='#111' fontFamily='Kanit, sans-serif' textAlign='left' display='flex' px='6' py='2' borderRadius='lg' justifyContent='space-between' gap='4' alignItems='center'>
        <Image boxSize={[10,12,14]} src={imageUrl} borderRadius='50%' border='4px' borderColor='purple.800' /> 
        <Text noOfLines={1}>{musicName}</Text>
        <Text>{duration}</Text>
        <Icon as={FaPlayCircle} boxSize={[6,7,8]} />
    </Box>
  );
};

export default TopMusicCard;
