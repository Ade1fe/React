import { Box, Text } from "@chakra-ui/react";
import { CalenderComponent,  FoldersPage,  HomeComponent, MyProjects, SettingsComponent } from "../../../pages";
import FolderManagement from "../../../pages/modules/files";

interface ContentProps {
  selectedItem: string | null;
  isSidebarOpen: boolean;
}

const Content: React.FC<ContentProps> = ({ selectedItem, isSidebarOpen }) => {
    const getContentComponent = (selectedItem: string | null) => {
        switch (selectedItem) {
          case "Home":
            return <HomeComponent />;
          case "Calendar":
            return <CalenderComponent />;
            case "Settings":
              return <SettingsComponent />;
                 case "Add Folder":
              return <FolderManagement />;
          // Add cases for other items
          default:
            return null; 
        }
      };

      return (
        <Box
          p="4"
          flexGrow={1}
          ml={isSidebarOpen ? "0" : { base: "3.5rem", md: "12.5rem" }}
          transition="margin 0.3s ease"
          overflow="auto"
        >
          <Text fontSize="xl" fontWeight="bold">
            {selectedItem ? selectedItem : "My Projects"}
          </Text>
          <Box mt="4">
         
            {selectedItem ? getContentComponent(selectedItem) : <MyProjects />}
          </Box>
        </Box>
      );
    };

export default Content;
