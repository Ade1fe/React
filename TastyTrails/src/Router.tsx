
import { createBrowserRouter } from "react-router-dom";
import { Homepage, MenuPage } from "./modules";
import { CartPage, SignInComp, SignUpComp } from "./components";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/menu-page",
    element: <MenuPage />
  },
  {
    path: "sign-up",
    element: <SignUpComp />
  },
  {
    path: "sign-in",
    element: <SignInComp />
  },
  {
    path: "cart",
    element: <CartPage />
  }

  
]);

export default Router;