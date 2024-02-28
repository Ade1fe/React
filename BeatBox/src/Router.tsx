
import { createBrowserRouter } from "react-router-dom";
import { AlbumPage, ArtistPage, DashboardComp, MenuPage, ShowDetails, ShowSongs, ShowTracksInAlbums, SignInComp, SignUpComp, SongListsComp,  } from "./modules";
import ArtistCompoo from "./modules/top-artists/Artist";
import { ScreenOne } from "./components";
import ScreenThree from "./components/screens/ScreenThree";
import ScreenTwo from "./components/screens/ScreenTwo";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <ScreenOne />,
  },
  {
    path: "/screen-two",
    element: <ScreenTwo />,
  },
  {
    path: "/screen-three",
    element: <ScreenThree />,
  },
  // {
  //   path: "/dashboard",
  //   element: <DashboardComp />,
  //   children: [
  //     {  index: true, element: <MenuPage /> }, 
  //     { path: "artist", element: <ArtistPage /> }, 
  //     { path: "song-list/:genreId",
  //      element: <SongListsComp />
  //      }, 
  //     { path: "show-songs/:id",
  //      element: <ShowSongs />
  //      }, 
  //      { path: "show-details/:id",
  //      element: <ShowDetails />
  //      }, 
  //      { path: "show-tracks/:id",
  //      element: <AlbumPage />
  //      }, 
  //      { path: "albums",
  //      element: <AlbumPage />
  //      }, 
  //      { path: "show-tracks/:id",
  //      element: <ShowTracksInAlbums />
  //      },
  //   ]
  // },

  {
    path: "/dashboard",
    element: <DashboardComp />,
    children: [
      { index: true, element: <MenuPage /> }, 
      { path: "artist", element: <ArtistPage /> }, 
      { path: "song-list/:genreId", element: <SongListsComp /> }, 
      { path: "show-songs/:id", element: <ShowSongs /> }, 
      { path: "show-details/:id", element: <ShowDetails /> }, 
      { path: "show-tracks/:id", element: <ShowTracksInAlbums /> },  // Keep this route
      { path: "albums", element: <AlbumPage /> },  // Remove this route
    ]
  },
  
  
  {
    path: "/auth",
    children: [
      {
        path: "signup",
        element: <SignUpComp />,
      },
      {
        path: "signin",
        element: <SignInComp />,
      },
    ],
  },
  
  { path: "artis", element: <ArtistCompoo /> }, 
  
]);

export default Router;
