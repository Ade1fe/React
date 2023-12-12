import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages";
import { ForgotPassword, ResetPassword, SignIn, SignUp } from "./pages/auth";
import Loader from "./pages/dashboard/Loader";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Loader />,
  },
  {
    path: "/dashboard",
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
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      
    ],
  },
  
]);

export default Router;