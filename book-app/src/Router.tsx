
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Roots/Root";
import { ContactPage,Homepage,AboutUsPage, MangaPage, BookPage } from "./assets";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/aboutus",
    element: <AboutUsPage />,
  },
  {
    path: "/contactus",
    element: <ContactPage />,
  },
  {
    path: "/manga",
    element: <MangaPage />,
  },
  {
    path: "/books",
    element: <BookPage />,
  },
]);


export default Router;