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
// import AnimeSearch from './pages/AnimeSearch';

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
    path: '/movieseries',
    element: <MovieSeriesPage />,
  },
  
  {
    path: '/moviesearch',
    element: <MovieSearch />,
  },
  {
    path: '/tvseries',
    element: <TvSeriesPage />,
  },
  {
    path: '/genre/:genre',
    element: <GenrePage />,
  },


  {
    path: '/anime',
    element: <AnimePage />,
  },

  {
    path: '/animeDetails/:id',
    element: <AnimeDetails />,
  },

  {
    path: '/trend',
    element: <TrendingPage />,
  },
  {
    path: '/animesearch',
    element: <SearchPage />,
  },

  {
    path: '/animetvseries',
    element: <TvAnimeSeriesPage />,
  },

  //   {
  //   path: '/animetvseries',
  //   element: <TvAnimeSeriesPage />,
  // },

  {
    path: '/animemovie',
    element: <AnimeMoviePage />,
  },

  {
    path: '/ova',
    element: <AnimeOvaPage />,
  },
  {
    path: '/ona',
    element: <AnimeOnaPage />,
  },

  {
    path: '/special',
    element: <AnimeSpecialPage />,
  },
  {
    path: '/music',
    element: <AnimeMusicPage />,
  },
  {
    path: '/genre/:genre',
    element: <GenrePage />,
  },
  
])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
