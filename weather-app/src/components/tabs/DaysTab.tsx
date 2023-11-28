import { SetStateAction, useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';
import { TodayTab } from '..';


const DaysTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: SetStateAction<number>) => {
    setSelectedTab(index);
  };

  return (
    <Tabs index={selectedTab} onChange={handleTabChange} variant="enclosed-colored" mt={10}>
      <TabList>
        <Tab _selected={{ color: 'gray.500', fontWeight: 'bold' }} p={3}>Today</Tab>
        <Tab _selected={{ color: 'gray.500', fontWeight: 'bold' }} p={3}>Tomorrow</Tab>
        <Tab _selected={{ color: 'gray.500', fontWeight: 'bold' }} p={3}>Next 7 DAYS</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Box p={4} bg="#22" >
           <TodayTab />
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={4} bg="#222" >
            Content for Tomorrow
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={4} bg="#222" >
            Content for 7 DAYS
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DaysTab;
