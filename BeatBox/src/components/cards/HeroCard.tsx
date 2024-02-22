import React from 'react';
import { Box, Icon, Image, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';

interface HeroCardProps {
  imageUrl: string;
  musicType: string;
  trackCount: number;
  playIcon: IconType;
}

const HeroCard: React.FC<HeroCardProps> = ({ imageUrl, musicType, trackCount, playIcon }) => {
  return (
    <Box color='white' bg='#000' h='250px' fontFamily='Kanit, sans-serif' pos='relative' zIndex='2' borderRadius='2xl' overflow='hidden'>
      <Image objectFit='cover' h='100%' w='100%' src={imageUrl} />
      <Box textAlign='left' bg='rgba(0, 0, 0, 0.8)'  pos='absolute' p='4' borderRadius='2xl'  bottom='0' w='full' zIndex='6'   >
        <Text noOfLines={1} fontWeight='bold' fontSize={['md', 'lg', 'x-large']}>{musicType}</Text>
        <Text  fontWeight='400' fontSize={['sm', 'md', 'lg']}>{trackCount} Tracks</Text>
        <Icon pos='absolute' right='20px' bottom='20px' as={playIcon} boxSize={[7,8,9]} />
      </Box>
    </Box>
  );
};

export default HeroCard;
