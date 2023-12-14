import { Box, IconButton, Text, VStack, useBreakpointValue } from "@chakra-ui/react";
import { MdMenu, MdClose, } from "react-icons/md";

   import { IoHomeOutline } from "react-icons/io5";
   import { SlCalender } from "react-icons/sl";
   import { LuFileSpreadsheet } from "react-icons/lu";
   import { VscFolderOpened } from "react-icons/vsc";
   import { FiFilePlus } from "react-icons/fi";
   import { BsPeople } from "react-icons/bs";
   import { BsInboxes } from "react-icons/bs";
   import { TbSettingsCog } from "react-icons/tb";
   import { FaTasks } from "react-icons/fa";
import { useState } from "react";



interface SidebarProps {
  onItemClick: (item: string | null) => void;
  isSidebarOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onItemClick, isSidebarOpen, onToggle }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const sidebarItems = [
    { id: "home", label: "Home", icon: <IoHomeOutline size={25}  /> },
    { id: "calendar", label: "Calendar", icon: <SlCalender size={25}  /> },
    { id: "file", label: "File", icon: <LuFileSpreadsheet size={25}  /> },
    { id: "addFolder", label: "Add Folder", icon: <VscFolderOpened size={25}  /> },
    { id: "addFile", label: "Add File", icon: <FiFilePlus size={25}  /> },
    { id: "people", label: "People", icon: <BsPeople size={25}  /> },
    { id: "inbox", label: "Inbox", icon: <BsInboxes size={25}  /> },
    { id: "settings", label: "Settings", icon: <TbSettingsCog size={25}  /> },
    { id: "tasks", label: "My Tasks", icon: <FaTasks  size={25}  /> },
  ];

  const handleItemClick = (itemId: string | null) => {
    const selectedItem = sidebarItems.find(item => item.id === itemId);
    if (selectedItem) {
      if (selectedItem.id === 'home') {
        onItemClick("Home");
      } else {
        onItemClick(selectedItem.label);
      }
      setActiveItem(itemId); 
    } else {
      onItemClick(null);
      setActiveItem(null);
    }
  };


  return (
    <>
      <Box
    // bgGradient="linear(to-br, purple.500, #BBADFF)"
    bg='white'
     backdropContrast={'0.5'}
     borderWidth='3px'
     borderColor="linear-gradient(to bottom right, #800080, #BBADFF)"
        w={{ base: isSidebarOpen ? "50%" : "4rem", md: "13rem" }}
        overflowX="hidden"
        transition="width 0.3s ease"
        position={{ base: "fixed", md: "fixed" }}
        top="0"
        bottom="0"
        left="0"
        p='2'
        zIndex="99"
        boxShadow={{ base: "0 0 4px rgba(0,0,0,0.3)", md: "none" }}
        className="module"
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
        <VStack align="flex-start" spacing="4" pt='4rem'>
          {/* <Text fontWeight="bold" mb='40px' fontSize={['md', 'lg']}> Notes</Text> */}
          {sidebarItems.map((item, index) => (
            <Text
              key={index}
              cursor="pointer"
              bg={activeItem === item.id ? '#BBADFF' : 'inherit'}
              boxShadow={activeItem === item.id ? 'base' : 'none'}
              display='flex' 
              mb='10px'
              fontSize={["14px", "15px", "16px"]}
              fontWeight='700'
            alignItems='center'
            gap={isSidebarOpen ? "1rem" : { base: "3.5rem", md: "1.04rem" }}
              whiteSpace='nowrap'
              onClick={() => handleItemClick(item.id)}
              _hover={{bgGradient: "linear(to-br, purple.500, #BBADFF)" }}
              w='full'
                 p="7px"
                 borderRadius='7px'
            
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
