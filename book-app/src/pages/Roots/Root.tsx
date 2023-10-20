import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../../assets";



const Root = () => {
  return (
    <Box>
    <Navbar />
    <Outlet />
  </Box>
  );
};

export default Root;