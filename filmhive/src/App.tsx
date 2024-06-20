
import { RouterProvider } from 'react-router-dom';
import {  ChakraProvider } from '@chakra-ui/react';
import router from './Router';
import './index.css';


function App() {


  return (
    <>
      <ChakraProvider  toastOptions={{ defaultOptions: { position: 'top-right' } }}>
        <RouterProvider router={router}></RouterProvider>
      </ChakraProvider>
    </>
  );
}

export default App;