

import React, { useEffect, useState } from 'react';
import { Box, Image, useToast } from "@chakra-ui/react";
import { TwoFieldsButtons } from "../../components";
import { atmimg } from "../../assets/imgs";
import { Link } from "react-router-dom";
import { LayoutComp } from '..';
import { auth, firestore } from '../../firebase';
import { User } from 'firebase/auth';
import { collection, addDoc, doc, getDoc, setDoc, query, where, getDocs } from 'firebase/firestore'; // Import Firestore functions

const InternalTransfer: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [accountNumberName, setAccountNumberName] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [nextButtonText, setNextButtonText] = useState('Next');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const inputIds: string[] = ['amountInput', 'accountInput'];
  const inputTitles: string[] = ['Enter Amount', 'Enter Account Number', 'Account Name'];

  const toast = useToast();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (accountNumber) {
      const fetchAccountName = async () => {
        try {
          const accountQuery = query(collection(firestore, 'coinbaseusers'), where('accountNumber', '==', accountNumber));
          const accountQuerySnapshot = await getDocs(accountQuery);
          if (!accountQuerySnapshot.empty) {
            const accountData = accountQuerySnapshot.docs[0].data();
            console.log('Recipient account data:', accountData); // Log recipient account data
            if (accountData && accountData.name) {
              setAccountNumberName(accountData.name);
            } else {
              setAccountNumberName('Account Name not found');
            }
          } else {
            setAccountNumberName('Account Number not found');
          }
        } catch (error) {
          console.error('Error fetching account name:', error);
          setAccountNumberName('Error fetching account name');
        }
      };
      fetchAccountName();
    } else {
      setAccountNumberName('');
    }
  }, [accountNumber]);

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
      // Check if all fields are filled
      if (activeIndex === inputIds.length - 1 && (amount === '' || accountNumber === '')) {
        toast({
          title: `Please fill in all fields`,
          position: "top-right",
          isClosable: true,
        });
        return;
      }
  
      setActiveIndex(activeIndex + 1);
      if (activeIndex === inputIds.length - 1) {
        setNextButtonText('Send');
      }
    } else {
      // Validate account number length
      if (accountNumber.length !== 11) {
        toast({
          title: `Account number must be 11 characters long`,
          position: "top-right",
          isClosable: true,
        });
        return;
      }
  
      try {
        setLoading(true);
        if (!currentUser) return;
  
        // Prevent current user from sending money to themselves
        if (currentUser.uid === accountNumber) {
          throw new Error('Cannot send money to yourself');
        }
  
        // Fetch sender's account information
        const currentUserDocRef = doc(firestore, 'coinbaseusers', currentUser.uid);
        const currentUserDocSnapshot = await getDoc(currentUserDocRef);
        if (!currentUserDocSnapshot.exists()) {
          throw new Error('Sender account not found');
        }
  
        const senderData = currentUserDocSnapshot.data();
        if (!senderData) {
          throw new Error('Sender account data not found');
        }
  
        // Proceed with sending money
        const transactionsCollection = collection(firestore, 'transactions');
        const currentSenderDeposit = parseFloat(senderData.depositAmount || '0');
        const updatedSenderDeposit = currentSenderDeposit - parseFloat(amount);
        if (updatedSenderDeposit < 0) {
          throw new Error('Insufficient funds');
        }
  
        // Retrieve recipient's account information
        const recipientQuery = query(collection(firestore, 'coinbaseusers'), where('accountNumber', '==', accountNumber));
        const recipientQuerySnapshot = await getDocs(recipientQuery);
        if (recipientQuerySnapshot.empty) {
          throw new Error('Recipient account not found');
        }
  
        const recipientData = recipientQuerySnapshot.docs[0].data();
        if (!recipientData) {
          throw new Error('Recipient account data not found');
        }
  
       
        // Update sender's deposit amount in Firestore
        await setDoc(currentUserDocRef, { depositAmount: updatedSenderDeposit }, { merge: true });
  
        // Add transaction document for sender
        await addDoc(transactionsCollection, {
          amount: -parseFloat(amount),
          // accountNumber: accountNumber, 
          accountNumber: accountNumber,
          senderAccountNumber: senderData.accountNumber,
          receiverAccountNumber: accountNumber,
          type: 'send-money',
          timestamp: new Date(),
          userId: currentUser.uid,
          bankName: "Coinbase Bank",
          currentBalance: updatedSenderDeposit,
        });
  
        // Update deposit amount of recipient
        const recipientDocRef = doc(firestore, 'coinbaseusers', recipientQuerySnapshot.docs[0].id);
        const recipientDocSnapshot = await getDoc(recipientDocRef);
        if (recipientDocSnapshot.exists()) {
          const recipientData = recipientDocSnapshot.data();
          if (recipientData && recipientData.depositAmount) {
            const currentRecipientDepositAmount = recipientData.depositAmount;
            const updatedDepositAmountRecipient = currentRecipientDepositAmount + parseFloat(amount);
  

               // Add transaction document for recipient
               await addDoc(transactionsCollection, {
                amount: parseFloat(amount),
                accountNumber: accountNumber,
              senderAccountNumber: accountNumber,
                type: 'receive-money',
                timestamp: new Date(),
                userId: recipientQuerySnapshot.docs[0].id,
                bankName: "Coinbase Bank",
                currentBalance: updatedDepositAmountRecipient,
              });
  
            // Update deposit amount of recipient in the database
            await setDoc(recipientDocRef, { depositAmount: updatedDepositAmountRecipient }, { merge: true });
          }
        }
  
        // Handle success and update UI
        toast({
          title: `Money sent successfully`,
          position: "top-right",
          isClosable: true,
        });
        setAmount('');
        setAccountNumber('');
        setActiveIndex(0);
        setNextButtonText('Next');
      } catch (error) {
        console.error('Error sending money:', error);
        toast({
          title: `Error sending money: ${error.message}`,
          status: "error",
          position: "top-right",
          isClosable: true,
        });
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
            nextButtonText={loading ? 'Loading...' : nextButtonText}
          />

          <Link to='/home-page'>
            <Box mt={['2rem', '2rem', '2rem', '0']} textAlign='center' pos={['static', 'static', 'static', 'absolute']} bg='blue.900' py='3' px='6' color='white' borderRadius='20px' bottom={['15%']} left='20px'> Cancel</Box>
          </Link>
        </Box>
      </Box>
    </LayoutComp>
  );
};

export default InternalTransfer;
