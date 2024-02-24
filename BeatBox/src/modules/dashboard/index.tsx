

import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { SidebarComp } from '../../components';
import { Outlet } from 'react-router-dom';

const DashboardComp = () => {
  const [, setSelectedItem] = useState<string>('menu');

  const handleSidebarItemClick = (item: string) => {
    setSelectedItem(item);
  };


  return (
    <Flex flexGrow={1} flexDirection={{ base: 'column', md: 'row' }} bg='#000' color='white'>
      <SidebarComp onItemClick={handleSidebarItemClick} />
      <Box p='20px' ml={{ base: '0', md: '260px' }} flex="1" overflow="auto">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default DashboardComp;
