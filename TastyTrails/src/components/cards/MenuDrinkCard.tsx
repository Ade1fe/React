

import React, { useState, useEffect } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import axios from 'axios'; 

interface MenuCardProps {
  categoryName: string;
}

const MenuDrinkCard: React.FC<MenuCardProps> = ({ categoryName }) => {
  const [imageURL, setImageURL] = useState<string>('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Check if imageURL for the current category is stored in local storage
        const storedImageURL = localStorage.getItem(`drinkImageURL_${categoryName}`);

        // If imageURL for the current category is stored in local storage, set it directly
        if (storedImageURL) {
          setImageURL(storedImageURL);
        } else {
          // Fetch image URL from Unsplash API
          const response = await axios.get('https://api.unsplash.com/photos/random', {
            params: {
              query: 'drink',
              client_id: 'qP7pqke6xGMdxY8ABFlRPslGexIuzeUYsDV79ZqYwvA', // Replace 'YOUR_ACCESS_KEY' with your actual Unsplash Access Key
            }
          });

          // Set imageURL state and store it in local storage for the current category
          if (response.data.urls && response.data.urls.regular) {
            const imageUrl = response.data.urls.regular;
            setImageURL(imageUrl);
            localStorage.setItem(`drinkImageURL_${categoryName}`, imageUrl);
          }
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImages();
  }, [categoryName]); // Run the effect whenever the categoryName prop changes

  return (
    <Box mt='10px'>
      <Box overflow='hidden' boxSize={['80px','100px']} borderRadius='50%'>
        <Image src={imageURL} alt={categoryName} w='full' h='full' objectFit='contain' />
      </Box>
      <Text className="" mt='2' fontSize='sm'>{categoryName}</Text>
    </Box>
  );
};

export default MenuDrinkCard;
