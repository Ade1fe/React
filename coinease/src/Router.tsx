
import { createBrowserRouter } from "react-router-dom";
import { HomePage, LandingPage, Login, SignUp } from "./pages";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home-page",
    element: <HomePage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  
]);

export default Router;