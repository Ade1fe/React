import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminPage from './Pages/AdminPage';



const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
 

  {
    path: "/admin",
    element: <AdminPage />,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
