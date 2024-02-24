import { createBrowserRouter } from "react-router-dom";
import { DashboardComp, ShowSongs, SignInComp, SignUpComp, SongListsComp } from "./modules";
import { ScreenOne } from "./components";
import ScreenTwo from "./components/screens/ScreenTwo";
import ScreenThree from "./components/screens/ScreenThree";
import ArtistCompoo from "./modules/top-artists/Artist";

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
  {
    path: "/dashboard",
    element: <DashboardComp />,
  },

  {
    path: "/related-artist",
    element: <ArtistCompoo />,
  },
  {
    path: "/song-list/:genreId",
    element: <SongListsComp />,
  },
  {
    path: "/show-songs/:id",
    element: <ShowSongs />,
  },
  




]);

export default Router;