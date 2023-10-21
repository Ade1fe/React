
import { Box } from "@chakra-ui/react";
import { Navbar } from "../../assets";

const Root = () => {
  return (
    <Box>
      <Navbar />
      <div>
        <h1>Welcome to My App</h1>
        <p>This is some additional content inside the Root component.</p>
      </div>
      
    </Box>
  );
};

export default Root;
