import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './Pages/AboutPage';
import WorkPage from './Pages/WorkPage';
import ContactPage from './Pages/ContactPage';
import LetUsTalkPage from './Pages/LetUsTalkPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/work",
    element: <WorkPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/letUsTalk",
    element: <LetUsTalkPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



