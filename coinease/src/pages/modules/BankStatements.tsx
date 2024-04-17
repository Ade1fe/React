

import React, { useState, useEffect } from 'react';
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Spinner } from "@chakra-ui/react";
import { LayoutComp } from '..';
import { Link } from "react-router-dom";
import { firestore } from '../../firebase'; 
import { collection, getDocs } from 'firebase/firestore';

interface Transaction {
  id: string;
  amount: number | string;
  type: 'withdrawal' | 'deposit' | 'send-money';
  timestamp: string;
  currentBalance: number | string;
  selectedBank: string | '-';
  date?: Date;
  accountName?: string;
  cardNumber?: string;
  balance?: number;
  accountNumber?: string | number;
}

const BankStatements: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]); 
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactionsCollection = collection(firestore, 'transactions');
        const snapshot = await getDocs(transactionsCollection);
        const transactionsData: Transaction[] = snapshot.docs.map(doc => {
          const data = doc.data();
          // Check if the timestamp exists and is a function before calling toDate()
          const timestamp =
            data.timestamp && typeof data.timestamp.toDate === 'function'
              ? data.timestamp.toDate().toLocaleString()
              : '';
          return {
            id: doc.id,
            amount: data.amount || '-', 
            type: data.type,
            timestamp: timestamp,
            currentBalance: data.currentBalance || '-', // Use '-' if currentBalance is not available
            selectedBank: data.selectedBank || '-', // Use '-' if selectedBank is not available
            accountNumber: data.accountNumber || '-', // Use '-' if accountNumber is not available
          };
        });
        setTransactions(transactionsData);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };
    
    fetchTransactions();
  }, []);

  return (
    <LayoutComp desc="'Hey, here's your ">
      <Box>
        {loading ? ( // Display loading spinner if loading is true
          <Spinner  thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'/>
        ) : (
          <TableContainer overflow="auto" maxHeight="calc(100vh - 200px)">
            <Table minWidth="100%">
              <Thead>
                <Tr fontSize={['sm']}>
                  <Th fontSize={['sm']}>Date</Th>
                  <Th fontSize={['sm']}>Account Name</Th>
                  <Th fontSize={['sm']}>CardNumber</Th>
                  <Th fontSize={['sm']}>Withdraw</Th>
                  <Th fontSize={['sm']}>Deposit</Th>
                  <Th fontSize={['sm']}>Send Money</Th>
                  <Th fontSize={['sm']}>Bank Name</Th>
                  <Th isNumeric fontSize={['sm']}>Balance</Th>
                </Tr>
              </Thead>
              <Tbody fontSize={['sm']}>
                {transactions.map((transaction, index) => (
                  <Tr key={index}>
                    <Td>{transaction.timestamp}</Td>
                    <Td>{transaction.accountName ? transaction.amount : '-'}</Td>
                    <Td>{transaction.cardNumber ? transaction.amount : '-'}</Td>
                    <Td>{transaction.type === 'withdrawal' ? transaction.amount : '-'}</Td>
                    <Td>{transaction.type === 'deposit' ? transaction.amount : '-'}</Td>
                    <Td>{transaction.type === 'send-money' ? transaction.amount : '-'}</Td>
                    <Td>{transaction.selectedBank}</Td>
                    <Td isNumeric>{transaction.currentBalance}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
        <Link to='/home-page'>
          <Box className="" mt='2' bg='blue.900' py='3' px='6' textAlign='center' color='white' borderRadius='10px' bottom={['30%']} left='20px'> Cancel</Box>
        </Link>
      </Box>
    </LayoutComp>
  );
};

export default BankStatements;
