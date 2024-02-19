import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./modules/homepage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },



]);

export default Router;