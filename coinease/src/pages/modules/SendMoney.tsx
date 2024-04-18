

import React, { useState, useEffect } from 'react';
import { Box, Image, Spinner, Button } from "@chakra-ui/react";
import { TwoFieldsButtons } from "../../components";
import { atmimg } from "../../assets/imgs";
import { Link } from "react-router-dom";
import { LayoutComp } from '..';
import { collection, addDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore, auth } from '../../firebase'; 
import { User } from 'firebase/auth';

const SendMoney = () => {
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [nextButtonText, setNextButtonText] = useState('Next');

  const inputIds = ['amountInput', 'accountInput'];
  const inputTitles = ['Enter Amount', 'Enter Account Number', 'Choose Bank']; 
  const bankOptions = [
    { value: 'bank1', label: 'Bank 1' },
    { value: 'bank2', label: 'Bank 2' },
    { value: 'bank3', label: 'Bank 3' }
  ];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleNextClick = async () => {
    if (activeIndex < inputIds.length) {
      setActiveIndex(activeIndex + 1);
      if (activeIndex === inputIds.length - 1) {
        setNextButtonText('Send');
      }
    } else {
      try {
        setSending(true);
        if (!currentUser) return;
  
        // Proceed with sending money
        const userDocRef = doc(firestore, 'coinbaseusers', currentUser.uid);
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
              selectedBank,
              type: 'send-money',
              timestamp: new Date(),
              userId: currentUser.uid,
              currentBalance: updatedDepositAmount,
              bankReceiverAccountNumber: accountNumber,
            });
  
            // Update deposit amount in the database
            await setDoc(userDocRef, { depositAmount: updatedDepositAmount }, { merge: true });
          }
        }
  
        // Reset state after successful transaction
        setAmount('');
        setAccountNumber('');
        setSelectedBank('');
        setActiveIndex(0);
      } catch (error) {
        console.error('Error sending money:', error);
      } finally {
        setSending(false);
      }
    }
  };
  
  

  const handleDigitClick = (digit: string, inputId: string) => {
    if (inputId === 'amountInput') {
      setAmount(prevAmount => prevAmount + digit);
    } else if (inputId === 'accountInput') {
      setAccountNumber(prevAccountNumber => prevAccountNumber + digit);
    }
  };

  const handleDeleteClick = (inputId: string) => {
    if (inputId === 'amountInput') {
      setAmount(prevAmount => prevAmount.slice(0, -1));
    } else if (inputId === 'accountInput') {
      setAccountNumber(prevAccountNumber => prevAccountNumber.slice(0, -1));
    }
  };

  const handleBankChange = (bankValue: string) => {
    setSelectedBank(bankValue);
  };

  return (
    <LayoutComp desc='Enter the amount you want to send'>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Spinner size="xl" />
        </Box>
      ) : (
        <Box display={['block', 'block', 'flex']} >
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
              bankOptions={bankOptions}
              selectedBank={selectedBank}
              onBankChange={handleBankChange}
              onDigitClick={(digit, inputId) => handleDigitClick(digit, inputId)}
              onDeleteClick={(inputId) => handleDeleteClick(inputId)}
              onNextClick={handleNextClick}
              activeIndex={activeIndex}
              nextButtonText={nextButtonText}
            />
            <Link to='/home-page'>
              <Box  mt={['2rem', '2rem', '2rem', '0']} textAlign='center' pos={[ 'static', 'static', 'static', 'absolute']} bg='blue.900' py='3' px='6' color='white' borderRadius='20px' bottom={['15%']} left='20px'> Cancel</Box>
            </Link>
          </Box>
        </Box>
      )}
    </LayoutComp>
  );
};

export default SendMoney;
