import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GamePage     from './pages/GamePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },



]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
