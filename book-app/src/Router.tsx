import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Roots/Root";
import Homepage from "./pages/WebPages/Homepage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "home", element: <Homepage /> },
      { path: "aboutus", element: <AboutUsPage /> },
    ],
  },
]);

export default Router;
