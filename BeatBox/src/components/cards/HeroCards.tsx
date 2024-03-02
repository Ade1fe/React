import { Box, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

// Define the interface for HeroCard props
interface HeroCardProps {
    imageUrl: string;
    title: string;
    musicType: string;
    trackCount: number;
   
}

// Define the HeroCard component
const HeroCards: React.FC<HeroCardProps> = ({ imageUrl, title, musicType, trackCount,  }) => {
    return (
        <Box className="hero-card" pos='relative' overflow='hidden'>
            <Image src={imageUrl} alt="Album Cover" borderRadius='20px' />
         <Box bg='rgba(0,0,0,0.5)' alignItems='center'  borderRadius='20px' pos="absolute" w='full' p='10px' bottom='0px' left='0' display='flex' gap='3' justifyContent='space-between'>
         <div className="">
         <Text noOfLines={1} fontWeight='bold' fontFamily='Kanit' fontSize='lg'>{title}</Text>
            {/* <Text> {musicType}</Text> */}
            <Text fontFamily='Kanit'>Track: {trackCount}</Text>
         </div>
         <Icon  as={FaPlayCircle}  boxSize='6'/>
         </Box>
            
        </Box>
    );
}

export default HeroCards;
