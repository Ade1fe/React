
// import { createBrowserRouter } from "react-router-dom";
// import { BankStatements, BillPayment, HomePage, LandingPage, Login, MoneyDeposit, SendMoney, SignUp, WithdrawMoney } from "./pages";
// import InternalTransfer from "./pages/modules/InternalTransfer";



// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//   },
//   {
//     path: "/home-page",
//     element: <HomePage />,
//   },
//   {
//     path: "/sign-up",
//     element: <SignUp />,
//   },
//   {
//     path: "/sign-in",
//     element: <Login />,
//   },
//   {
//     path: "/with-draw-money",
//     element: <WithdrawMoney />,
//   },
//   {
//     path: "/sendMoney",
//     element: <SendMoney />,
//   }, 
//   {
//     path: "/bill-payment",
//     element: <BillPayment />,
//   },
//   {
//     path: "/money-deposit",
//     element: <MoneyDeposit />,
//   },
//   {
//     path: "/internal-transfer",
//     element: <InternalTransfer />,
//   },
//   {
//     path: "/bank-statements",
//     element: <BankStatements />,
//   },
  
// ]);

// export default Router;






























import { createBrowserRouter } from "react-router-dom";
import { BankStatements, BillPayment, HomePage, LandingPage, Login, MoneyDeposit, SendMoney, SignUp, WithdrawMoney } from "./pages";
import InternalTransfer from "./pages/modules/InternalTransfer";
import { auth, firestore } from './firebase';
import { useEffect, useState } from "react";
import { doc, getDoc } from 'firebase/firestore';

// Define WithdrawMoneyWithBalance component first
const WithdrawMoneyWithBalance = () => {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const uid = user.uid;
          
          const userDocRef = doc(firestore, 'coinbaseusers', uid);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            if (userData && userData.depositAmount) {
              setBalance(userData.depositAmount);
            } else {
              console.error('Deposit amount not found in user document');
            }
          } else {
            console.error('User document not found');
          }
        } else {
          console.error('No user signed in');
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  return <WithdrawMoney setBalance={setBalance} />;
};

// Now create the Router component
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
    element: <WithdrawMoneyWithBalance />,
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
