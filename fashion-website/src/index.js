import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import BlShowBlog from './pages/BlShowBlog';
import BlShowBlogTwo from './pages/BlShowBlogTwo';
import ShopPage from './pages/ShopPage';
import ContactUsPage from './pages/ContactUsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <AboutUsPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/showblogs",
    element: <BlShowBlog />,
  },
  {
    path: "/showblogs2",
    element: <BlShowBlogTwo />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/contact",
    element: <ContactUsPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);


