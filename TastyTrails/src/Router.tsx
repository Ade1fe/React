
import { createBrowserRouter } from "react-router-dom";
import { Homepage, MenuPage } from "./modules";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/menu-page",
    element: <MenuPage />
  },

  
]);

export default Router;