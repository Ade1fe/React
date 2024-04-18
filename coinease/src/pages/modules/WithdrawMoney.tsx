

import React, { useState, useEffect } from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import { Buttons } from "../../components";
import { atmcardimg, atmimg } from "../../assets/imgs";
import { Link } from "react-router-dom";
import { LayoutComp } from '..';
import { auth, firestore } from '../../firebase';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { User } from 'firebase/auth'; // Import User type from firebase/auth

const WithdrawMoney: React.FC<{ setBalance: React.Dispatch<React.SetStateAction<number | null>> }> = ({ setBalance }) => {
  const [amount, setAmount] = useState('');
  const [withdrawnAmount, setWithdrawnAmount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false); // Set loading to false when user state changes
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      if (currentUser) {
        try {
          const userDocRef = doc(firestore, 'coinbaseusers', currentUser.uid);
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
        } catch (error) {
          console.error('Error fetching balance:', error);
        } finally {
          setIsLoading(false); // Set loading to false after fetching balance
        }
      }
    };

    fetchBalance();
  }, [currentUser, setBalance]);

  const handleDigitClick = (digit: string) => {
    setAmount(prevAmount => prevAmount + digit);
    console.log(" ", digit);
  };

  const handleDeleteClick = () => {
    setAmount(prevAmount => prevAmount.slice(0, -1));
  };

  const handleWithdrawal = async () => {
    if (amount.trim() === '') return;
    
    // Capture the withdrawal amount before processing
    const withdrawalAmount = Number(amount);
    if (isNaN(withdrawalAmount)) return;
  
    try {
      if (!currentUser) {
        console.error('No user signed in');
        return;
      }
  
      const userDocRef = doc(firestore, 'coinbaseusers', currentUser.uid);
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
  
        // Save transaction
        const transactionData = {
          amount: withdrawalAmount,
          type: 'withdrawal',
          timestamp: new Date(),
          currentBalance: updatedDepositAmount,
        };
        await addDoc(collection(firestore, 'transactions'), transactionData);
  
        // Update state
        setAmount('');
        setBalance(updatedDepositAmount);
        setWithdrawnAmount(withdrawalAmount);
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
            {isLoading && 'Loading...'}
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
