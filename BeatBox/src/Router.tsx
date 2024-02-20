import { createBrowserRouter } from "react-router-dom";
import { SignInComp, SignUpComp } from "./modules";
import { ScreenOne } from "./components";
import ScreenTwo from "./components/screens/ScreenTwo";
import ScreenThree from "./components/screens/ScreenThree";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <ScreenOne />,
  },
  {
    path: "/screen-two",
    element: <ScreenTwo />,
  },
  {
    path: "/screen-three",
    element: <ScreenThree />,
  },
  {
    path: "/auth",
    children: [
      {
        path: "signup",
        element: <SignUpComp />,
      },
      {
        path: "signin",
        element: <SignInComp />,
      },
    ],
  },
  // {
  //   path: "/signupsuccess",
  //   element: <VerifyEmailModal />,
  // },




]);

export default Router;