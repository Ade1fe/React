
import { createBrowserRouter } from "react-router-dom";
import { BillPayment, HomePage, LandingPage, Login, SendMoney, SignUp, WithdrawMoney } from "./pages";



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
  {
    path: "/with-draw-money",
    element: <WithdrawMoney />,
  },
  {
    path: "/sendMoney",
    element: <SendMoney />,
  }, 
  {
    path: "/bill-payment",
    element: <BillPayment />,
  },
  
]);

export default Router;