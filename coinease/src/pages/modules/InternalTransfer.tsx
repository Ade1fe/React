

// import React, { useEffect, useState } from 'react';
// import { Box, Image, useToast } from "@chakra-ui/react";
// import { TwoFieldsButtons } from "../../components";
// import { atmimg } from "../../assets/imgs";
// import { Link } from "react-router-dom";
// import { LayoutComp } from '..';
// import { auth, firestore } from '../../firebase';
// import { User } from 'firebase/auth';
// import { collection, addDoc, doc, getDoc, setDoc, query, where, getDocs } from 'firebase/firestore'; // Import Firestore functions

// const InternalTransfer: React.FC = () => {
//   const [amount, setAmount] = useState<string>('');
//   const [accountNumber, setAccountNumber] = useState<string>('');
//   const [accountNumberName, setAccountNumberName] = useState<string>('');
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [nextButtonText, setNextButtonText] = useState('Next');
//   const [currentUser, setCurrentUser] = useState<User | null>(null);

//   const inputIds: string[] = ['amountInput', 'accountInput'];
//   const inputTitles: string[] = ['Enter Amount', 'Enter Account Number', 'Account Name'];

//   const toast = useToast();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleDigitClick = (digit: string, inputId: string) => {
//     // Add input validation if needed
//     if (inputId === 'amountInput') {
//       setAmount(prevAmount => prevAmount + digit);
//     } else if (inputId === 'accountInput') {
//       setAccountNumber(prevAccountNumber => prevAccountNumber + digit);
//     }
//   };

//   const handleDeleteClick = (inputId: string) => {
//     // Add input validation if needed
//     if (inputId === 'amountInput') {
//       setAmount(prevAmount => prevAmount.slice(0, -1));
//     } else if (inputId === 'accountInput') {
//       setAccountNumber(prevAccountNumber => prevAccountNumber.slice(0, -1));
//     }
//   };


//   const handleNextClick = async () => {
//     if (activeIndex < inputIds.length) {
//       // Check if all fields are filled
//       if (activeIndex === inputIds.length - 1 && (amount === '' || accountNumber === '')) {
//         toast({
//           title: `Please fill in all fields`,
//           position: "top-right",
//           isClosable: true,
//         });
//         return;
//       }
  
//       setActiveIndex(activeIndex + 1);
//       if (activeIndex === inputIds.length - 1) {
//         setNextButtonText('Send');
//       }
//     } else {
//       // Validate account number length
//       if (accountNumber.length !== 11) {
//         toast({
//           title: `Account number must be 11 characters long`,
//           position: "top-right",
//           isClosable: true,
//         });
//         return;
//       }
  
//       try {
//         setLoading(true);
//         if (!currentUser) return;
  
//         // Check if the account number exists in the 'coinbaseusers' collection
//         const accountQuery = query(collection(firestore, 'coinbaseusers'), where('accountNumber', '==', accountNumber));
//         const accountQuerySnapshot = await getDocs(accountQuery);
//         if (accountQuerySnapshot.empty) {
//           toast({
//             title: `Account number not found`,
//             position: "top-right",
//             isClosable: true,
//           });
//           throw new Error('Account number not found');
//         }
  
//         // Check if the user is trying to send money to themselves
//         if (currentUser.uid === accountQuerySnapshot.docs[0].id) {
//           toast({
//             title: `You cannot send money to yourself`,
//             position: "top-right",
//             isClosable: true,
//           });
//           throw new Error('Cannot send money to yourself');
//         }
  
//         // Proceed with sending money
//         const userDocRef = doc(firestore, 'coinbaseusers', currentUser.uid);
//         const userDocSnapshot = await getDoc(userDocRef);
//         if (userDocSnapshot.exists()) {
//           const userData = userDocSnapshot.data();
//           if (userData && userData.depositAmount) {
//             const currentDepositAmount = userData.depositAmount;
//             const updatedDepositAmount = currentDepositAmount - parseFloat(amount);
  
//             // Add the transaction to Firestore
//             const transactionsCollection = collection(firestore, 'transactions');
//             await addDoc(transactionsCollection, {
//               amount: parseFloat(amount),
//               accountNumber,
//               type: 'send-money',
//               timestamp: new Date(),
//               userId: currentUser.uid,
//               bankName: "Coinbase Bank",
//               currentBalance: updatedDepositAmount,
//             });
  
//             // Update deposit amount in the database
//             await setDoc(userDocRef, { depositAmount: updatedDepositAmount }, { merge: true });
//           }
//         }
  
//         // Reset state after successful transaction
//         setAmount('');
//         setAccountNumber('');
//         setAccountNumberName('');
//         setActiveIndex(0);
//       } catch (error) {
//         console.error('Error sending money:', error);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };
  
  

//   return (
//     <LayoutComp desc='Enter the amount you want to send'>
//       <Box display={['block', 'flex']} >
//         <Box className="" w={['full', 'full', '35%']}>
//           <Image src={atmimg} />
//         </Box>
//         <Box className="" w={['full', 'full', '65%']} pos='relative'>
//           <TwoFieldsButtons
//             placeholder="Enter something"
//             inputIds={inputIds}
//             titles={inputTitles}
//             amount={amount}
//             accountNumber={accountNumber}
//             accountNumberName={accountNumberName}
//             onDigitClick={(digit: string, inputId: string) => handleDigitClick(digit, inputId)}
//             onDeleteClick={(inputId: string) => handleDeleteClick(inputId)}
//             onNextClick={() => handleNextClick()}
//             activeIndex={activeIndex}
//             nextButtonText={loading ? 'Loading...' : nextButtonText} 
          
//           />

//           <Link to='/home-page'>
//             <Box  mt={['2rem', '2rem', '2rem', '0']} textAlign='center' pos={[ 'static', 'static', 'static', 'absolute']} bg='blue.900' py='3' px='6' color='white' borderRadius='20px' bottom={['15%']} left='20px'> Cancel</Box>
//           </Link>
//         </Box>
//       </Box>
//     </LayoutComp>
//   );
// };

// export default InternalTransfer;
































// import React, { useEffect, useState } from 'react';
// import { Box, Image, useToast } from "@chakra-ui/react";
// import { TwoFieldsButtons } from "../../components";
// import { atmimg } from "../../assets/imgs";
// import { Link } from "react-router-dom";
// import { LayoutComp } from '..';
// import { auth, firestore } from '../../firebase';
// import { User } from 'firebase/auth';
// import { collection, addDoc, doc, getDoc, setDoc, query, where, getDocs } from 'firebase/firestore'; // Import Firestore functions

// const InternalTransfer: React.FC = () => {
//   const [amount, setAmount] = useState<string>('');
//   const [accountNumber, setAccountNumber] = useState<string>('');
//   const [accountNumberName, setAccountNumberName] = useState<string>('');
//   const [activeIndex, setActiveIndex] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [nextButtonText, setNextButtonText] = useState('Next');
//   const [currentUser, setCurrentUser] = useState<User | null>(null);

//   const inputIds: string[] = ['amountInput', 'accountInput'];
//   const inputTitles: string[] = ['Enter Amount', 'Enter Account Number', 'Account Name'];

//   const toast = useToast();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleDigitClick = (digit: string, inputId: string) => {
//     // Add input validation if needed
//     if (inputId === 'amountInput') {
//       setAmount(prevAmount => prevAmount + digit);
//     } else if (inputId === 'accountInput') {
//       setAccountNumber(prevAccountNumber => prevAccountNumber + digit);
//     }
//   };

//   const handleDeleteClick = (inputId: string) => {
//     // Add input validation if needed
//     if (inputId === 'amountInput') {
//       setAmount(prevAmount => prevAmount.slice(0, -1));
//     } else if (inputId === 'accountInput') {
//       setAccountNumber(prevAccountNumber => prevAccountNumber.slice(0, -1));
//     }
//   };


//   const handleNextClick = async () => {
//     if (activeIndex < inputIds.length) {
//       // Check if all fields are filled
//       if (activeIndex === inputIds.length - 1 && (amount === '' || accountNumber === '')) {
//         toast({
//           title: `Please fill in all fields`,
//           position: "top-right",
//           isClosable: true,
//         });
//         return;
//       }
  
//       setActiveIndex(activeIndex + 1);
//       if (activeIndex === inputIds.length - 1) {
//         setNextButtonText('Send');
//       }
//     } else {
//       // Validate account number length
//       if (accountNumber.length !== 11) {
//         toast({
//           title: `Account number must be 11 characters long`,
//           position: "top-right",
//           isClosable: true,
//         });
//         return;
//       }
  
//       try {
//         setLoading(true);
//         if (!currentUser) return;
      
//         // Check if the account number exists in the 'coinbaseusers' collection
//         const accountQuery = query(collection(firestore, 'coinbaseusers'), where('accountNumber', '==', accountNumber));
//         const accountQuerySnapshot = await getDocs(accountQuery);
//         if (accountQuerySnapshot.empty) {
//           toast({
//             title: `Account number not found`,
//             position: "top-right",
//             isClosable: true,
//           });
//           throw new Error('Account number not found');
//         }
      
//         // Check if the user is trying to send money to themselves
//         if (currentUser.uid === accountQuerySnapshot.docs[0].id) {
//           toast({
//             title: `You cannot send money to yourself`,
//             position: "top-right",
//             isClosable: true,
//           });
//           throw new Error('Cannot send money to yourself');
//         }
      
//         // Proceed with sending money
//         const userDocRef = doc(firestore, 'coinbaseusers', currentUser.uid);
//         const userDocSnapshot = await getDoc(userDocRef);
//         if (userDocSnapshot.exists()) {
//           const userData = userDocSnapshot.data();
//           if (userData && userData.depositAmount) {
//             const currentDepositAmount = userData.depositAmount;
//             const updatedDepositAmountSender = currentDepositAmount - parseFloat(amount);
      
//             // Add the transaction to Firestore for the sender
//             const transactionsCollection = collection(firestore, 'transactions');
//             await addDoc(transactionsCollection, {
//               amount: -parseFloat(amount), // negative amount for sender
//               accountNumber,
//               type: 'send-money',
//               timestamp: new Date(),
//               userId: currentUser.uid,
//               bankName: "Coinbase Bank",
//               currentBalance: updatedDepositAmountSender,
//             });
      
//             // Update deposit amount of sender in the database
//             await setDoc(userDocRef, { depositAmount: updatedDepositAmountSender }, { merge: true });
      
//             // Update deposit amount of recipient
//             const recipientDocRef = doc(firestore, 'coinbaseusers', accountQuerySnapshot.docs[0].id);
//             const recipientDocSnapshot = await getDoc(recipientDocRef);
//             if (recipientDocSnapshot.exists()) {
//               const recipientData = recipientDocSnapshot.data();
//               if (recipientData && recipientData.depositAmount) {
//                 const currentRecipientDepositAmount = recipientData.depositAmount;
//                 const updatedDepositAmountRecipient = currentRecipientDepositAmount + parseFloat(amount);
      
//                 // Add the transaction to Firestore for the recipient
//                 await addDoc(transactionsCollection, {
//                   amount: parseFloat(amount), // positive amount for recipient
//                   accountNumber: accountNumber, // recipient's account number
//                   type: 'receive-money',
//                   timestamp: new Date(),
//                   userId: accountQuerySnapshot.docs[0].id, // recipient's user ID
//                   bankName: "Coinbase Bank",
//                   currentBalance: updatedDepositAmountRecipient,
//                 });
                
      
//                 // Update deposit amount of recipient in the database
//                 await setDoc(recipientDocRef, { depositAmount: updatedDepositAmountRecipient }, { merge: true });
//               }
//             }
//           }
//         }
      
//         // Reset state after successful transaction
//         setAmount('');
//         setAccountNumber('');
//         setAccountNumberName('');
//         setActiveIndex(0);
//       } catch (error) {
//         console.error('Error sending money:', error);
//       } finally {
//         setLoading(false);
//       }
      
//     }
//   };
  
  

//   return (
//     <LayoutComp desc='Enter the amount you want to send'>
//       <Box display={['block', 'flex']} >
//         <Box className="" w={['full', 'full', '35%']}>
//           <Image src={atmimg} />
//         </Box>
//         <Box className="" w={['full', 'full', '65%']} pos='relative'>
//           <TwoFieldsButtons
//             placeholder="Enter something"
//             inputIds={inputIds}
//             titles={inputTitles}
//             amount={amount}
//             accountNumber={accountNumber}
//             accountNumberName={accountNumberName}
//             onDigitClick={(digit: string, inputId: string) => handleDigitClick(digit, inputId)}
//             onDeleteClick={(inputId: string) => handleDeleteClick(inputId)}
//             onNextClick={() => handleNextClick()}
//             activeIndex={activeIndex}
//             nextButtonText={loading ? 'Loading...' : nextButtonText} 
          
//           />

//           <Link to='/home-page'>
//             <Box  mt={['2rem', '2rem', '2rem', '0']} textAlign='center' pos={[ 'static', 'static', 'static', 'absolute']} bg='blue.900' py='3' px='6' color='white' borderRadius='20px' bottom={['15%']} left='20px'> Cancel</Box>
//           </Link>
//         </Box>
//       </Box>
//     </LayoutComp>
//   );
// };

// export default InternalTransfer;























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

        // Check if the user is trying to send money to themselves
        if (currentUser.uid === accountQuerySnapshot.docs[0].id) {
          toast({
            title: `You cannot send money to yourself`,
            position: "top-right",
            isClosable: true,
          });
          throw new Error('Cannot send money to yourself');
        }

        // Proceed with sending money
        const userDocRef = doc(firestore, 'coinbaseusers', currentUser.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          if (userData && userData.depositAmount) {
            const currentDepositAmount = userData.depositAmount;
            const updatedDepositAmountSender = currentDepositAmount - parseFloat(amount);

            // Add the transaction to Firestore for the sender
            const transactionsCollection = collection(firestore, 'transactions');
            await addDoc(transactionsCollection, {
              amount: -parseFloat(amount), // negative amount for sender
              accountNumber,
              type: 'send-money',
              timestamp: new Date(),
              userId: currentUser.uid,
              bankName: "Coinbase Bank",
              currentBalance: updatedDepositAmountSender,
            });

            // Update deposit amount of sender in the database
            await setDoc(userDocRef, { depositAmount: updatedDepositAmountSender }, { merge: true });

            // Update deposit amount of recipient
            const recipientDocRef = doc(firestore, 'coinbaseusers', accountQuerySnapshot.docs[0].id);
            const recipientDocSnapshot = await getDoc(recipientDocRef);
            if (recipientDocSnapshot.exists()) {
              const recipientData = recipientDocSnapshot.data();
              if (recipientData && recipientData.depositAmount) {
                const currentRecipientDepositAmount = recipientData.depositAmount;
                const updatedDepositAmountRecipient = currentRecipientDepositAmount + parseFloat(amount);

                // Add the transaction to Firestore for the recipient
                await addDoc(transactionsCollection, {
                  amount: parseFloat(amount), // positive amount for recipient
                  accountNumber: accountNumber, // recipient's account number
                  type: 'receive-money',
                  timestamp: new Date(),
                  userId: accountQuerySnapshot.docs[0].id, // recipient's user ID
                  bankName: "Coinbase Bank",
                  currentBalance: updatedDepositAmountRecipient,
                });


                // Update deposit amount of recipient in the database
                await setDoc(recipientDocRef, { depositAmount: updatedDepositAmountRecipient }, { merge: true });
              }
            }
          }
        }

        // Reset state after successful transaction
        setAmount('');
        setAccountNumber('');
        setAccountNumberName('');
        setActiveIndex(0);
        toast({
          title: `Sent Successful1`,
          position: "top-right",
          isClosable: true,
        });
      } catch (error) {
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
