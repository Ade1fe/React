
// import React, { useState, useEffect } from 'react';
// import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Spinner, Text } from "@chakra-ui/react";
// import { LayoutComp } from '..';
// import { Link } from "react-router-dom";
// import { auth, firestore } from '../../firebase'; 
// import { collection, getDocs } from 'firebase/firestore';
// import { User } from 'firebase/auth';

// interface Transaction {
//   id: string;
//   amount: number | string;
//   type: 'withdrawal' | 'deposit' | 'send-money' | 'receive-money';
//   timestamp: string;
//   currentBalance: number | string;
//   selectedBank: string | '-';
//   accountNumber: string | number;
//   bankReceiverAccountNumber: string | number;
//   bankName: string | number;
//   userId: string;
// }

// const BankStatements: React.FC = () => {
//   const [transactions, setTransactions] = useState<Transaction[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentUser, setCurrentUser] = useState<User | null>(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (currentUser) {
//       const fetchTransactions = async () => {
//         try {
//           const transactionsCollection = collection(firestore, 'transactions');
//           const snapshot = await getDocs(transactionsCollection);
//           const transactionsData: Transaction[] = snapshot.docs.map(doc => {
//             const data = doc.data();
//             const timestamp = data.timestamp ? data.timestamp.toDate().toLocaleString() : '';
//             return {
//               id: doc.id,
//               amount: data.amount || '-', 
//               type: data.type,
//               timestamp: timestamp,
//               currentBalance: data.currentBalance || '-', 
//               selectedBank: data.selectedBank || '-', 
//               accountNumber: data.accountNumber || '-', 
//               bankReceiverAccountNumber: data.bankReceiverAccountNumber || '-',
//               bankName: data.bankName || '-', 
//               userId: data.userId || '-', 
//             };
//           });

//           setTransactions(transactionsData);
//           setLoading(false);
//         } catch (error) {
//           console.error('Error fetching transactions:', error);
//           setLoading(false);
//         }
//       };
      
//       fetchTransactions();
//     }
//   }, [currentUser]); 

//   return (
//     <LayoutComp desc="'Hey, here's your ">
//       <Box>
//         {loading ? ( 
//           <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
//         ) : currentUser ? (
//           <>
//             <Text>Transactions</Text>
//             <TableContainer overflowY="auto" maxHeight="calc(100vh - 200px)" mb="4">
//               <Table minWidth="100%" mb="4">
//                 <Thead>
//                   <Tr fontSize={['xs']}>
//                     <Th fontSize={['xs']}>Date</Th>
//                     <Th fontSize={['xs']}>Account Number</Th>
//                     <Th fontSize={['xs']}>Type</Th>
//                     <Th fontSize={['xs']}>Amount</Th>
//                     <Th fontSize={['xs']}>Bank Name</Th>
//                     <Th isNumeric fontSize={['xs']}>Balance</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody fontSize={['sm']}>
//                   {transactions.map((transaction, index) => (
//                     <Tr key={index}>
//                       <Td>{transaction.timestamp}</Td>
//                       <Td>{transaction.accountNumber}</Td>
//                       <Td>{transaction.type}</Td>
//                       <Td>{transaction.amount}</Td>
//                       <Td>{transaction.selectedBank !== '-' ? transaction.selectedBank : transaction.bankName}</Td>
//                       <Td isNumeric>{transaction.type === 'receive-money' ? '-' : transaction.currentBalance}</Td>
//                     </Tr>
//                   ))}
//                 </Tbody>
//               </Table>
//             </TableContainer>
//           </>
//         ) : (
//           <Text>No user signed in. Please sign in to view transactions.</Text>
//         )}
//         <Link to='/home-page'>
//           <Box mt='2' bg='blue.900' py='3' px='6' textAlign='center' color='white' borderRadius='10px' bottom={['30%']} left='20px'> Cancel</Box>
//         </Link>
//       </Box>
//     </LayoutComp>
//   );
// };

// export default BankStatements;
























import React, { useState, useEffect } from 'react';
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Spinner, Text } from "@chakra-ui/react";
import { LayoutComp } from '..';
import { Link } from "react-router-dom";
import { auth, firestore } from '../../firebase'; 
import { collection, getDocs, query, where } from 'firebase/firestore';
import { User } from 'firebase/auth';

interface Transaction {
  id: string;
  amount: number | string;
  type: 'withdrawal' | 'deposit' | 'send-money' | 'receive-money';
  timestamp: string;
  currentBalance: number | string;
  selectedBank: string | '-';
  accountNumber: string | number;
  bankReceiverAccountNumber: string | number;
  bankName: string | number;
  userId: string;
}

const BankStatements: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (currentUser) {
      const fetchTransactions = async () => {
        try {
          const transactionsCollection = collection(firestore, 'transactions');
          const querySnapshot = await getDocs(
            query(transactionsCollection, where('userId', '==', currentUser.uid))
          );
          const transactionsData: Transaction[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const timestamp = data.timestamp ? data.timestamp.toDate().toLocaleString() : '';
            return {
              id: doc.id,
              amount: data.amount || '-', 
              type: data.type,
              timestamp: timestamp,
              currentBalance: data.currentBalance || '-', 
              selectedBank: data.selectedBank || '-', 
              accountNumber: data.accountNumber || '-', 
              bankReceiverAccountNumber: data.bankReceiverAccountNumber || '-',
              bankName: data.bankName || '-', 
              userId: data.userId || '-', 
            };
          });
  
          setTransactions(transactionsData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching transactions:', error);
          setLoading(false);
        }
      };
      
      fetchTransactions();
    }
  }, [currentUser]);
  

  return (
    <LayoutComp desc="'Hey, here's your ">
      <Box>
        {loading ? ( 
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/>
        ) : currentUser ? (
          <>
            <Text>Transactions</Text>
            <TableContainer overflowY="auto" maxHeight="calc(100vh - 200px)" mb="4">
              <Table minWidth="100%" mb="4">
                <Thead>
                  <Tr fontSize={['xs']}>
                    <Th fontSize={['xs']}>Date</Th>
                    <Th fontSize={['xs']}>Account Number</Th>
                    <Th fontSize={['xs']}>Type</Th>
                    <Th fontSize={['xs']}>Amount</Th>
                    <Th fontSize={['xs']}>Bank Name</Th>
                    <Th isNumeric fontSize={['xs']}>Balance</Th>
                  </Tr>
                </Thead>
                <Tbody fontSize={['sm']}>
                  {transactions.map((transaction, index) => (
                    <Tr key={index}>
                      <Td>{transaction.timestamp}</Td>
                      <Td>{transaction.accountNumber}</Td>
                      <Td>{transaction.type}</Td>
                      <Td>{transaction.amount}</Td>
                      <Td>{transaction.selectedBank !== '-' ? transaction.selectedBank : transaction.bankName}</Td>
                      <Td isNumeric>{transaction.type === 'receive-money' ? '-' : transaction.currentBalance}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <Text>No user signed in. Please sign in to view transactions.</Text>
        )}
        <Link to='/home-page'>
          <Box mt='2' bg='blue.900' py='3' px='6' textAlign='center' color='white' borderRadius='10px' bottom={['30%']} left='20px'> Cancel</Box>
        </Link>
      </Box>
    </LayoutComp>
  );
};

export default BankStatements;
