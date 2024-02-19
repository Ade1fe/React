import { RouterProvider } from "react-router-dom";
import { ChakraBaseProvider } from "@chakra-ui/react";
import router from "./Router";
import "./index.css";


function App() {
  return (
    <>
      <ChakraBaseProvider >
          <RouterProvider router={router}></RouterProvider>
      </ChakraBaseProvider>
    </>
  );
}

export default App;