import { Box, IconButton, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { MdMenu, MdClose, MdHome, MdEvent, MdInsertDriveFile, MdFolder, MdGroup, MdInbox, MdSettings, MdAssignment } from "react-icons/md";

interface SidebarProps {
  onItemClick: (item: string | null) => void;
  isSidebarOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onItemClick, isSidebarOpen, onToggle }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const sidebarItems = [
    { id: "home", label: "Home", icon: <MdHome size={30}  /> },
    { id: "calendar", label: "Calendar", icon: <MdEvent size={30}  /> },
    { id: "file", label: "File", icon: <MdInsertDriveFile size={30}  /> },
    { id: "addFolder", label: "Add Folder", icon: <MdFolder size={30}  /> },
    { id: "addFile", label: "Add File", icon: <MdInsertDriveFile size={30}  /> },
    { id: "people", label: "People", icon: <MdGroup size={30}  /> },
    { id: "inbox", label: "Inbox", icon: <MdInbox size={30}  /> },
    { id: "settings", label: "Settings", icon: <MdSettings size={30}  /> },
    { id: "tasks", label: "My Tasks", icon: <MdAssignment  size={30}  /> },
  ];

  const handleItemClick = (itemId: string | null) => {
    const selectedItem = sidebarItems.find(item => item.id === itemId);
    if (selectedItem) {
      if (selectedItem.id === 'home') {
        onItemClick("Home");
      } else {
        onItemClick(selectedItem.label);
      }
    } else {
      onItemClick(null);
    }
  };

  return (
    <>
      <Box
       bgGradient="linear(to-br, purple.500, #BBADFF)"
        w={{ base: isSidebarOpen ? "50%" : "4rem", md: "13rem" }}
        p="4"
        overflowX="hidden"
        transition="width 0.3s ease"
        position={{ base: "fixed", md: "static" }}
        top="0"
        bottom="0"
        left="0"
        zIndex="99"
        boxShadow={{ base: "0 0 10px rgba(0,0,0,0.3)", md: "none" }}
      >
        {isMobile && (
          <IconButton
            icon={isSidebarOpen ? <MdClose size={30}  /> : <MdMenu size={30}  />}
            onClick={onToggle}
            aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            display="block"
            my="2"
            bg='transparent'
            border='0'
            outline='0'
            _focus={{border: "0", outline: "0" }}
          />
        )}
        <VStack align="flex-start" spacing="4" mt='20px'>
          <Text fontWeight="bold" mb='40px'> Notes</Text>
          {sidebarItems.map((item, index) => (
            <Text
              key={index}
              cursor="pointer"
              color="inherit"
              display='flex' 
              mb='10px'
              fontSize={["14px", "15px", "16px"]}
              fontWeight='700'
            alignItems='center'
            gap={isSidebarOpen ? "1rem" : { base: "3.5rem", md: "1.04rem" }}
              whiteSpace='nowrap'
              onClick={() => handleItemClick(item.id)}
            >
            <Text as='span' color='#023E8A'>{item.icon && item.icon}  </Text> {item.label}
            </Text>
          ))}
        </VStack>
      </Box>
      {isMobile && isSidebarOpen && (
        <Box
          bg="rgba(0, 0, 0, 0.5)"
          position="fixed"
          top="0"
          bottom="0"
          left="0"
          right="0"
          zIndex="98"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default Sidebar;
