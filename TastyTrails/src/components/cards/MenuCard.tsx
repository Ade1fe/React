import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface MenuCardProps {
  categoryName: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ categoryName }) => {
  return (
    <Box>
      <Box  overflow='hidden'>
        <Image src={`https://www.themealdb.com/images/category/${categoryName}.png`} w='full' h='full' objectFit='contain' />
      </Box>
      <Text className="" fontSize='sm'>{categoryName}</Text>
    </Box>
  );
};

export default MenuCard;
