import { createBrowserRouter } from "react-router-dom";
import { DashBoardOne } from "./pages";


const Router = createBrowserRouter([

  {
    path: "/",
    element: <DashBoardOne />,
  },
]);

export default Router;