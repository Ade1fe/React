import { createBrowserRouter } from "react-router-dom";
import { DashBoardOne } from "./pages";
import ChessPuzzlesComponent from "./pages/ChessPuzzlesComponent";


const Router = createBrowserRouter([

  {
    path: "/",
    element: <DashBoardOne />,
  },
  {
    path: "/chess",
    element: <ChessPuzzlesComponent />,
  },
  
]);

export default Router;