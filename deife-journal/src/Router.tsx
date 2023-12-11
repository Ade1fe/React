import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages";
import { SignIn, SignUp } from "./pages/auth";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "auth",
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      
    ],
  },
  
]);

export default Router;