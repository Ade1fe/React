// import  { useState } from 'react';
// import { Box, Image } from "@chakra-ui/react";
// import { Buttons } from "../../components";
// import { atmcardimg, atmimg } from "../../assets/imgs";
// import { Link } from "react-router-dom";
// import { LayoutComp } from '..';

// const WithdrawMoney = () => {
//   const [, setAmount] = useState('');

//   const handleDigitClick = (digit: string) => {
//     setAmount(prevAmount => prevAmount + digit);
//   };

//   const handleDeleteClick = () => {
//     setAmount(prevAmount => prevAmount.slice(0, -1));
//   };

//   return (
//     <LayoutComp desc='Enter the amount you want to withdraw'>
//     <Box display={['block', 'block', 'flex']} >
//     <Box className="" w={['full', 'full', '35%']}>
//       <Image src={atmimg} />
//     </Box>
//     <Box className="" w={['full', 'full', '65%']} pos='relative'>
//       <Buttons imageText={atmcardimg} title="Enter amount to withdraw" placeholder="1.000" inputId="amount" onDigitClick={handleDigitClick} onDeleteClick={handleDeleteClick} />
//       <Link to='/home-page'>
//         <Box  mt={['2rem', '2rem', '2rem', '0']} textAlign='center' pos={[ 'static', 'static', 'static', 'absolute']} bg='blue.900' py='3' px='6' color='white' borderRadius='20px' bottom={['15%']} left='20px'> Cancel</Box>
//       </Link>
//     </Box>
//     </Box>
//   </LayoutComp>
  
//   );
// };


// export default WithdrawMoney;

















import React, { useState, useEffect } from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import { Buttons } from "../../components";
import { atmcardimg, atmimg } from "../../assets/imgs";
import { Link } from "react-router-dom";
import { LayoutComp } from '..';
import { auth, firestore,} from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const WithdrawMoney = ({ setBalance }: { setBalance: React.Dispatch<React.SetStateAction<number | null>> }) => {
  const [amount, setAmount] = useState('');
  const [withdrawnAmount, setWithdrawnAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  useEffect(() => {
    const fetchBalance = async () => {
      try {
          const user = auth.currentUser;
          if (!user) {
              console.error('No user signed in');
              return;
          }
          const uid = user.uid;
  
          const userDocRef = doc(firestore, 'coinbaseusers', uid); // Ensure firestore is correctly imported and initialized
          const userDocSnapshot = await getDoc(userDocRef);
          if (!userDocSnapshot.exists()) {
              console.error('User document not found');
              return;
          }
  
          const userData = userDocSnapshot.data();
          if (userData && userData.depositAmount) {
              setBalance(userData.depositAmount);
          } else {
              console.error('Deposit amount not found in user document');
          }
      } catch (error) {
          console.error('Error fetching balance:', error);
      } finally {
          setIsLoading(false); 
      }
  };

    fetchBalance();
  }, [setBalance]); // Run fetchBalance only when setBalance changes

  const handleDigitClick = (digit: string) => {
    setAmount(prevAmount => prevAmount + digit);
  };

  const handleDeleteClick = () => {
    setAmount(prevAmount => prevAmount.slice(0, -1));
  };

  const handleWithdrawal = async () => {
    if (amount.trim() === '') return; // Prevent empty withdrawals
    const withdrawalAmount = Number(amount);
    if (isNaN(withdrawalAmount)) return; // Ensure the input is a valid number
  
    try {
      const user = auth.currentUser;
      if (!user) {
        console.error('No user signed in');
        return;
      }
      const uid = user.uid;
  
      const userDocRef = doc(firestore, 'coinbaseusers', uid); // Ensure firestore is correctly imported and initialized
      const userDocSnapshot = await getDoc(userDocRef);
      if (!userDocSnapshot.exists()) {
        console.error('User document not found');
        return;
      }
  
      const userData = userDocSnapshot.data();
      if (userData && userData.depositAmount) {
        const currentDepositAmount = userData.depositAmount;
        const updatedDepositAmount = currentDepositAmount - withdrawalAmount;
  
        // Update deposit amount in the database
        await setDoc(userDocRef, { depositAmount: updatedDepositAmount }, { merge: true });
  
        // Update balance state
        setBalance(updatedDepositAmount);
        setWithdrawnAmount(withdrawalAmount);
        setAmount('');
      } else {
        console.error('Deposit amount not found in user document');
      }
    } catch (error) {
      console.error('Error handling withdrawal:', error);
    }
  };
  

  return (
    <LayoutComp desc='Enter the amount you want to withdraw'>
      <Box display={['block', 'block', 'flex']} >
        <Box className="" w={['full', 'full', '35%']}>
          <Image src={atmimg} />
        </Box>
        <Box className="" w={['full', 'full', '65%']} pos='relative'>
          <Buttons imageText={atmcardimg} title="Enter amount to withdraw" placeholder="1.000" inputId="amount" onDigitClick={handleDigitClick} onDeleteClick={handleDeleteClick} value={amount} />
          <Text mt={4} textAlign="center">
            {isLoading && 'Loading...'} {/* Show loading message while fetching balance */}
            {withdrawnAmount !== null && `You have successfully withdrawn $${withdrawnAmount}`}
          </Text>
          <Box mt={4} textAlign='center'>
            <button onClick={handleWithdrawal}>Withdraw</button>
          </Box>
          <Link to='/home-page'>
            <Box mt={2} textAlign='center' bg='blue.900' py='3' px='6' color='white' borderRadius='20px' bottom={['15%']} left='20px' onClick={() => setAmount('')}> Cancel</Box>
          </Link>
        
        </Box>
      </Box>
    </LayoutComp>
  );
};

export default WithdrawMoney;






