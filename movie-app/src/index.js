import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import OverViewPage from './pages/OverViewPage';
import AnimePage from './pages/AnimePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/app',
    element: <App />,
  },

  {
    path: '/overview/:id',
    element: <OverViewPage />,
  },

  
  {
    path: '/anime',
    element: <AnimePage />,
  },

])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
