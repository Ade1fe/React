// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ChakraProvider } from '@chakra-ui/react'


// const queryClient = new QueryClient()


// ReactDOM.createRoot(document.getElementById('root')!).render(
 
//     <ChakraProvider>
//     <QueryClientProvider client={queryClient}>
//       <App />
//     </QueryClientProvider>,
//   </ChakraProvider>
// )



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)