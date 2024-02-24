
import { createBrowserRouter } from "react-router-dom";
import { ArtistPage, DashboardComp, MenuPage, ShowSongs, SignInComp, SignUpComp, SongListsComp } from "./modules";
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
  {
    path: "/dashboard",
    element: <DashboardComp />,
    children: [
      {  index: true, element: <MenuPage /> }, 
      { path: "artist", element: <ArtistPage /> }, 
      { path: "song-list/:genreId",
       element: <SongListsComp />
       }, 
      { path: "show-songs/:id",
       element: <ShowSongs />
       }, 
      
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
