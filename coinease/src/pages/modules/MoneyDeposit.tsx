
import React, { useState, useEffect } from 'react';
import { Box, Image, Text } from "@chakra-ui/react";
import { Buttons } from "../../components";
import { atmcardimg, atmimg } from "../../assets/imgs";
import { Link } from "react-router-dom";
import { LayoutComp } from '..';
import { auth, firestore } from '../../firebase';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';

type MoneyDepositProps = {
  setBalance: React.Dispatch<React.SetStateAction<number | null>>;
};

const MoneyDeposit: React.FC<MoneyDepositProps> = ({ setBalance }) => {
  const [amount, setAmount] = useState('');
  const [moneyToDeposit, setMoneyToDeposit] = useState<number | null>(null);
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
  };

  const handleDeleteClick = () => {
    setAmount(prevAmount => prevAmount.slice(0, -1));
  };

  const handleDeposit = async () => {
    if (amount.trim() === '') return; 
    const moneyToDeposit = Number(amount);
    if (isNaN(moneyToDeposit)) {
      console.error('Invalid amount entered');
      setAmount('');
      return;
    }
  
    try {
      setIsLoading(true); 
      const { uid } = currentUser || {};
      if (!uid) {
        throw new Error('No user signed in');
      }
  
      const userDocRef = doc(firestore, 'coinbaseusers', uid);
      const userDocSnapshot = await getDoc(userDocRef);
      if (!userDocSnapshot.exists()) {
        throw new Error('User document not found');
      }
  
      const userData = userDocSnapshot.data();
      if (userData && userData.depositAmount !== undefined) {
        const currentDepositAmount = userData.depositAmount;
        const updatedDepositAmount = currentDepositAmount + moneyToDeposit;
  
        // Update deposit amount in the database
        await setDoc(userDocRef, { 
          depositAmount: updatedDepositAmount,
          userId: uid // Adding userId to the document data
        }, { merge: true });
  
        const transactionData = {
          amount: moneyToDeposit,
          type: 'deposit',
          timestamp: new Date(),
          currentBalance: updatedDepositAmount,
          userId: uid 
        };
        await addDoc(collection(firestore, 'transactions'), transactionData);
  
        setBalance(updatedDepositAmount);
        setMoneyToDeposit(moneyToDeposit);
        setAmount('');
      } else {
        throw new Error('Deposit amount not found in user document');
      }
    } catch (error) {
      console.error('Error handling deposit:', error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <LayoutComp desc='Enter the amount you want to deposit'>
      <Box display={['block', 'block', 'flex']} >
        <Box className="" w={['full', 'full', '35%']}>
          <Image src={atmimg} />
        </Box>
        <Box className="" w={['full', 'full', '65%']} pos='relative'>
          <Buttons imageText={atmcardimg} title="Enter amount to deposit" placeholder="1.000" inputId="amount" onDigitClick={handleDigitClick} onDeleteClick={handleDeleteClick} onWithdrawClick={handleDeposit} buttonText='Deposit' />
          <Text textAlign='center' className=""> {isLoading && 'Loading...'}</Text>
        
          <Text textAlign='center' className="">  {moneyToDeposit !== null && `You have successfully deposited $${moneyToDeposit}`}</Text>
          {/* <Box mt={4} textAlign='center'>
            <button onClick={handleDeposit}>Deposit</button>
          </Box> */}
          <Link to='/home-page'>
            <Box  mt={['2rem', '2rem', '2rem', '0']} textAlign='center' pos={[ 'static', 'static', 'static', 'absolute']} bg='blue.900' py='3' px='6' color='white' borderRadius='20px' bottom={['15%']} left='20px'> Cancel</Box>
          </Link>
        </Box>
      </Box>
    </LayoutComp>
  );
};

export default MoneyDeposit;
