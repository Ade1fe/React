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
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);


