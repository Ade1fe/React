import {  Tab, TabList, TabPanel, TabPanels, Tabs,  } from "@chakra-ui/react";
import ProfileSettings from "./profile/ProfileSettings";
import DisplayComponent from "./display";


const SettingsComponent = () => {
  return (
    <Tabs  colorScheme='purple' isFitted>
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
          {/* <Text>Display Settings</Text> */}
         <DisplayComponent />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SettingsComponent;
