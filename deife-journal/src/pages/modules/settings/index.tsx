import {  Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import ProfileSettings from "./profile/ProfileSettings";
import DisplayComponent from "./display";


const SettingsComponent = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Profile</Tab>
        <Tab>Display</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {/* <Text>Profile Settings</Text> */}
          <ProfileSettings />
        </TabPanel>
        <TabPanel>
          <Text>Display Settings</Text>
         <DisplayComponent />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SettingsComponent;
