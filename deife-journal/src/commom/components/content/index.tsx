import { Box, Text } from "@chakra-ui/react";
import { CalenderComponent,  HomeComponent } from "../../../pages";

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
          // Add cases for other items
          default:
            return null; 
        }
      };

      return (
        <Box
          p="4"
          flexGrow={1}
          ml={isSidebarOpen ? "0" : { base: "3.5rem", md: "0" }}
          transition="margin 0.3s ease"
        >
          <Text fontSize="xl" fontWeight="bold">
            {selectedItem ? selectedItem : "Select an item from the sidebar"}
          </Text>
          <Box mt="4">
            {/* Render the appropriate content component based on the selected item */}
            {selectedItem ? getContentComponent(selectedItem) : "No content to display"}
          </Box>
        </Box>
      );
    };

export default Content;
