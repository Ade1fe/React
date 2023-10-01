import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GamePage     from './pages/GamePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginnPage from './pages/LoginnPage';
import ComingSoonPage from './components/ComingSoonPage';
import SignupPage from './components/SignupPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tictactoe",
    element: <GamePage />,
  },
  {
    path: "/login",
    element: <LoginnPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/comingSoon",
    element: <ComingSoonPage />,
  },



]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
