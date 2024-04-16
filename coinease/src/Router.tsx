
import { createBrowserRouter } from "react-router-dom";
import { BankStatements, BillPayment, HomePage, LandingPage, Login, MoneyDeposit, SendMoney, SignUp, WithdrawMoney } from "./pages";
import InternalTransfer from "./pages/modules/InternalTransfer";



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
  {
    path: "/money-deposit",
    element: <MoneyDeposit />,
  },
  {
    path: "/internal-transfer",
    element: <InternalTransfer />,
  },
  {
    path: "/bank-statements",
    element: <BankStatements />,
  },
  
]);

export default Router;