import { RouterProvider } from "react-router-dom";
import { ChakraBaseProvider } from "@chakra-ui/react";
import router from "./Router";
import theme from "./theme/theme";
function App() {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ChakraBaseProvider>
    </>
  );
}

export default App;