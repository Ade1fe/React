import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import AnimePage from './pages/AnimePage';
import AnimeDetails from './pages/AnimeDetails';
import TrendingPage from './pages/TrendingPage';
import TvAnimeSeriesPage from './pages/TvAnimeSeriesPage';
import AnimeMoviePage from './pages/AnimeMoviePage';
import AnimeOvaPage from './pages/AnimeOvaPage';
import AnimeOnaPage from './pages/AnimeOnaPage';
import AnimeSpecialPage from './pages/AnimeSpecialPage';
import AnimeMusicPage from './pages/AnimeMusicPage';
import GenrePage from './pages/GenrePage';
import TvSeriesPage from './pages/TvSeriesPage';
import MovieSeriesPage from './pages/MovieSeriesPage';
import OverViewPage from './pages/OverViewPage';
import MovieSearch from './pages/MovieSearch';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/login',
    element: <LoginPage />
  },
  
  {
    path: '/signup',
    element: <SignUpPage />,
  },  
  

])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
