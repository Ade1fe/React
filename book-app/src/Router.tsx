import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Roots/Root";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { WritePage, Homepage, SearchPage, MangaPage, BookPage, BookDetailPage, SignInPage } from "./assets";


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
    path: "/write",
    element: <WritePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
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
