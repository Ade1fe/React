// App.tsx
import { RouterProvider } from 'react-router-dom';
import router from "./Router";
import { ChakraBaseProvider } from "@chakra-ui/react";



function App() {
  return (
    <ChakraBaseProvider >
      <RouterProvider router={router}></RouterProvider>    
  </ChakraBaseProvider>
  );
}

export default App;
