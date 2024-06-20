import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from ".";




const Router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },

  
]);

export default Router;