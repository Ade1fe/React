

import { createBrowserRouter } from 'react-router-dom';
import { BankStatements, HomePage, LandingPage, Login, SendMoney, SignUp,  } from './pages';
import InternalTransfer from './pages/modules/InternalTransfer';
import { BillPaymentWithBalance, MoneyDepositWithBalance, WithdrawMoneyWithBalance } from './pages/file';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/home-page',
    element: <HomePage />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/sign-in',
    element: <Login />,
  },
  {
    path: '/with-draw-money',
    element: <WithdrawMoneyWithBalance />,
  },
  {
    path: '/sendMoney',
    element: <SendMoney />,
  }, 
  {
    path: '/bill-payment',
    element: <BillPaymentWithBalance />,
  },
  {
    path: '/money-deposit',
    element: <MoneyDepositWithBalance />, // Use the version with balance here
  },
  {
    path: '/internal-transfer',
    element: <InternalTransfer />,
  },
  {
    path: '/bank-statements',
    element: <BankStatements />,
  },
]);



export default Router;
