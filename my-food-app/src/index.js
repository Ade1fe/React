import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { firestore, auth } from './firebase'; 
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import MenuPage from './pages/MenuPage';
import ContactUsPage from './pages/ContactUsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import AboutUs from './pages/AboutUs';
// import ProductDetailsOne from './pages/ProductDetailsOne'; // Import ProductDetailsOne

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
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '/contactus',
    element: <ContactUsPage />,
  },
  {
    path: '/productdetails',
    element: <ProductDetailsPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/aboutus',
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
auth.onAuthStateChanged((user) => {
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
});