import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { SidebarComp } from '../../components';
import { ArtistPage, MenuPage } from '..';

const DashboardComp = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Menu');

  const handleSidebarItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <Flex flexGrow={1} className='text-body' flexDirection={{ base: 'column', md: 'row' }} bg='#000' color='white'>
      <SidebarComp onItemClick={handleSidebarItemClick} />
      <Box p='20px' ml={{ base: '0', md: '260px' }} flex="1" overflow="auto">
        {selectedItem === 'Menu' && <MenuPage />}
        {selectedItem === 'Artist' && <ArtistPage />}
      </Box>
    </Flex>
  );
};

export default DashboardComp;
