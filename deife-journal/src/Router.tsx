import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages";
import { ForgotPassword, ResetPassword, SignIn, SignUp } from "./pages/auth";
import Loader from "./pages/dashboard/Loader";
import Screen from "./commom/components/navbar/Screen";

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
    path: "/screen",
    element: <Screen />,
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