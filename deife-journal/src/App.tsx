
import { RouterProvider } from "react-router-dom";
import { ChakraBaseProvider } from "@chakra-ui/react";
import router from "./Router";
import theme from "./commom/theme/theme";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
       
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </ChakraBaseProvider>
    </>
  );
}

export default App;