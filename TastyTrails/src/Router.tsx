
import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./modules";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  
]);

export default Router;