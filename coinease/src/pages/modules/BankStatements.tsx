
import React, { useState, useEffect } from 'react';
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Spinner } from "@chakra-ui/react";
import { LayoutComp } from '..';
import { Link } from "react-router-dom";
import { firestore, auth } from '../../firebase'; 
import { collection, getDocs, query, where } from 'firebase/firestore';

interface Transaction {
  id: string;
  amount: number | string;
  type: 'withdrawal' | 'deposit' | 'send-money';
  timestamp: string;
  currentBalance: number | string;
  selectedBank: string | '-';
  accountNumber: string | number;
  bankReceiverAccountNumber: string | number;
  bankName: string | number;
}

const BankStatements: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          throw new Error('No user signed in');
        }

        const transactionsCollection = collection(firestore, 'transactions');
        const userTransactionsQuery = query(transactionsCollection, where('userId', '==', user.uid));
        const snapshot = await getDocs(userTransactionsQuery);

        const transactionsData: Transaction[] = snapshot.docs.map(doc => {
          const data = doc.data();
          const timestamp = data.timestamp ? data.timestamp.toDate().toLocaleString() : '';
          console.log("bankName,", data.bankName);
          return {
            id: doc.id,
            amount: data.amount || '-', 
            type: data.type,
            timestamp: timestamp,
            currentBalance: data.currentBalance || '-', 
            selectedBank: data.selectedBank || '-', 
            accountNumber: data.accountNumber || '-', 
            bankReceiverAccountNumber: data.bankReceiverAccountNumber || '-',
            bankName: data.bankName || '-', // Default to '-' if bankName is not available
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
  }, []);

  return (
    <LayoutComp desc="'Hey, here's your ">
      <Box>
        {loading ? ( 
          <Spinner  thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'/>
        ) : (
          <TableContainer overflow="auto" maxHeight="calc(100vh - 200px)">
            <Table minWidth="100%" >
              <Thead>
                <Tr fontSize={['xs']}>
                  <Th fontSize={['xs']}>Date</Th>
                  <Th fontSize={['xs']}>Account Name</Th>
                  <Th fontSize={['xs']}>Withdraw</Th>
                  <Th fontSize={['xs']}>Deposit</Th>
                  <Th fontSize={['xs']}>Send Money</Th>
                  <Th fontSize={['xs']}>Bank Name</Th>
                  <Th isNumeric fontSize={['xs']}>Balance</Th>
                </Tr>
              </Thead>
              <Tbody fontSize={['sm']}>
                {transactions.map((transaction, index) => (
                  <Tr key={index}>
                    <Td>{transaction.timestamp}</Td>
                    <Td>{transaction.accountNumber}</Td>
                    <Td>{transaction.type === 'withdrawal' ? transaction.amount : '-'}</Td>
                    <Td>{transaction.type === 'deposit' ? transaction.amount : '-'}</Td>
                    <Td>{transaction.type === 'send-money' ? transaction.amount : '-'}</Td>
                    <Td>{transaction.selectedBank !== '-' ? transaction.selectedBank : transaction.bankName}</Td>
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
