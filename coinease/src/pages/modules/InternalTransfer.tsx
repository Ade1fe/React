

import React, { useState } from 'react';
import { Box, Image, useToast } from "@chakra-ui/react";
import { TwoFieldsButtons } from "../../components";
import { atmimg } from "../../assets/imgs";
import { Link } from "react-router-dom";
import { LayoutComp } from '..';
import { auth, firestore } from '../../firebase';
import { collection, addDoc, doc, getDoc, setDoc, query, where, getDocs } from 'firebase/firestore'; // Import Firestore functions

const InternalTransfer: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [accountNumberName, setAccountNumberName] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [nextButtonText, setNextButtonText] = useState('Next');

  const inputIds: string[] = ['amountInput', 'accountInput'];
  const inputTitles: string[] = ['Enter Amount', 'Enter Account Number', 'Account Name'];

  const toast = useToast();

  const handleDigitClick = (digit: string, inputId: string) => {
    // Add input validation if needed
    if (inputId === 'amountInput') {
      setAmount(prevAmount => prevAmount + digit);
    } else if (inputId === 'accountInput') {
      setAccountNumber(prevAccountNumber => prevAccountNumber + digit);
    }
  };

  const handleDeleteClick = (inputId: string) => {
    // Add input validation if needed
    if (inputId === 'amountInput') {
      setAmount(prevAmount => prevAmount.slice(0, -1));
    } else if (inputId === 'accountInput') {
      setAccountNumber(prevAccountNumber => prevAccountNumber.slice(0, -1));
    }
  };

  const handleNextClick = async () => {
    if (activeIndex < inputIds.length) {
      setActiveIndex(activeIndex + 1);
      if (activeIndex === inputIds.length - 1) {
        setNextButtonText('Send');
      }
    } else {
      try {
        setLoading(true);
        const user = auth.currentUser;
        if (!user) {
          throw new Error('No user signed in');
        }

        // Check if the account number exists in the 'coinbaseusers' collection
        const accountQuery = query(collection(firestore, 'coinbaseusers'), where('accountNumber', '==', accountNumber));
        const accountQuerySnapshot = await getDocs(accountQuery);
        if (accountQuerySnapshot.empty) {
          toast({
            title: `Account number not found`,
            position: "top-right",
            isClosable: true,
          });
          throw new Error('Account number not found');
        }

        // Proceed with sending money
        const userDocRef = doc(firestore, 'coinbaseusers', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          if (userData && userData.depositAmount) {
            const currentDepositAmount = userData.depositAmount;
            const updatedDepositAmount = currentDepositAmount - parseFloat(amount);

            // Add the transaction to Firestore
            const transactionsCollection = collection(firestore, 'transactions');
            await addDoc(transactionsCollection, {
              amount: parseFloat(amount),
              accountNumber,
              type: 'send-money',
              timestamp: new Date(),
              userId: user.uid,
              bankName: "Coinbase Bank",
              currentBalance: updatedDepositAmount,
            });

            // Update deposit amount in the database
            await setDoc(userDocRef, { depositAmount: updatedDepositAmount }, { merge: true });
          }
        }

        // Reset state after successful transaction
        setAmount('');
        setAccountNumber('');
        setAccountNumberName('');
        setActiveIndex(0);
      } catch (error) {
        toast({
          title: `Error sending money:, ${error}`,
          position: "top-right",
          isClosable: true,
        });
        console.error('Error sending money:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <LayoutComp desc='Enter the amount you want to send'>
      <Box display={['block', 'flex']} >
        <Box className="" w={['full', 'full', '35%']}>
          <Image src={atmimg} />
        </Box>
        <Box className="" w={['full', 'full', '65%']} pos='relative'>
          <TwoFieldsButtons
            placeholder="Enter something"
            inputIds={inputIds}
            titles={inputTitles}
            amount={amount}
            accountNumber={accountNumber}
            accountNumberName={accountNumberName}
            onDigitClick={(digit: string, inputId: string) => handleDigitClick(digit, inputId)}
            onDeleteClick={(inputId: string) => handleDeleteClick(inputId)}
            onNextClick={() => handleNextClick()}
            activeIndex={activeIndex}
            nextButtonText={loading ? 'Loading...' : nextButtonText} // Update button text when loading
          
          />

          <Link to='/home-page'>
            <Box  mt={['2rem', '2rem', '2rem', '0']} textAlign='center' pos={[ 'static', 'static', 'static', 'absolute']} bg='blue.900' py='3' px='6' color='white' borderRadius='20px' bottom={['15%']} left='20px'> Cancel</Box>
          </Link>
        </Box>
      </Box>
    </LayoutComp>
  );
};

export default InternalTransfer;
