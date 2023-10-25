import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Roots/Root";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ContactPage, Homepage, AboutUsPage, MangaPage, BookPage, BookDetailPage, SignInPage } from "./assets";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/home",
    element: <Root />,
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
  {
    path: "/bookdetail/:bookKey",
    element: <BookDetailPage />,
  },
  {
    path: "/login",
    element: <SignInPage />
  }
]);

export default Router;
