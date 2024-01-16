import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Content, Navbar, Sidebar } from "../../commom/components";



const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarItemClick = (item: string | null) => {
    setSelectedItem(item);
    setIsSidebarOpen(false); // Close sidebar when an item is clicked
  };


  return (
    <Flex flexDirection="column" height="100vh">
      <Navbar  isSidebarOpen={isSidebarOpen} />
      <Flex flexGrow={1}>
      <Sidebar
  onItemClick={handleSidebarItemClick}
  isSidebarOpen={isSidebarOpen}
  onToggle={handleSidebarToggle}
  
/>
        <Content
          selectedItem={selectedItem}
          isSidebarOpen={isSidebarOpen}
        />
      </Flex>
    </Flex>
  );
};

export default Dashboard;