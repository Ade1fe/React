
import { createBrowserRouter } from "react-router-dom";
import { HomePage, LandingPage } from "./pages";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home-page",
    element: <HomePage />,
  },

  
]);

export default Router;