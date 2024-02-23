import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Icon } from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';

interface Ad {
  id: number;
  content: string;
  imageUrl: string;
}

const ads: Ad[] = [
  {
    id: 1,
    content: "Don't miss out on our exclusive offer! 50% off on all products. Limited time only!",
    imageUrl: "https://via.placeholder.com/50x50"
  },
  {
    id: 2,
    content: "New arrivals! Check out our latest collection.",
    imageUrl: "https://via.placeholder.com/50x50"
  },
  // Add more ads as needed
];

const PopupAd: React.FC = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const currentAd = ads[currentAdIndex];

  return (
    <>
      {showAd && (
        <Box
          position="fixed"
          bottom="70px"
          right="20px"
          backgroundColor="white"
          padding="10px"
          borderRadius="md"
          boxShadow="md"
          zIndex={999999}
          color='black'
        >
          <Flex justifyContent="space-between" alignItems="center" marginBottom="10px">
          <Icon as={MdCancel} boxSize={6} cursor="pointer" onClick={() => setShowAd(false)} />
            <Button onClick={() => setShowAd(false)}></Button>
          </Flex>
        <Box display="flex" gap='4'>
          <img src={currentAd?.imageUrl} alt="Ad" />
        <p>{currentAd?.content}</p>
        </Box>
        </Box>
      )}
    </>
  );
};

export default PopupAd;
