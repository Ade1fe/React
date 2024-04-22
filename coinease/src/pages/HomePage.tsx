
import React, { useEffect, useState } from 'react';
import { Box, Grid, GridItem, Icon, Text, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import { FaMoneyBillAlt, FaBalanceScale, FaMoneyCheckAlt, FaMoneyBillWave, FaCoins, FaExchangeAlt, FaKey } from 'react-icons/fa';
import { TbFileDollar } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { Greetings } from '../components';
import { auth, firestore } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const [balance, setBalance] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const user = auth.currentUser;
                if (!user) {
                    console.error('No user signed in');
                    return;
                }
                const uid = user.uid;

                const userDocRef = doc(firestore, 'coinbaseusers', uid);
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
    }, []);

    useEffect(() => {
        setIsModalOpen(false); 
    }, [balance]);

    const gridItems = [
        { icon: FaMoneyBillAlt, label: "Money Withdrawal", action: () => navigate("/with-draw-money") },
        { icon: FaBalanceScale, label: "Balance Inquiry", action: () => setIsModalOpen(true) },
        { icon: FaMoneyCheckAlt, label: "Send Money", action: () => navigate('/sendMoney') },
        { icon: FaMoneyBillWave, label: "Bill Payment", action: () => navigate('/bill-payment') },
        { icon: FaExchangeAlt, label: "Money Deposit", action: () => navigate('/money-deposit') },
        { icon: FaCoins, label: "Internal Transfer", action: () => navigate('/internal-transfer') },
        { icon: TbFileDollar, label: "Bank Statement", action: () => navigate('/bank-statements') },
        { icon: FaKey, label: "Change Pin", action: () => console.log('Change Pin clicked') }
    ];

    return (
        <Box color='black' className='texts' mx='auto' maxW={'1340px'} px='20px' mb='2'>
            <Greetings desc='Please select your transaction' />
            <Box className="" overflow="auto" maxHeight="calc(100vh - 200px)" minWidth="100%">
                <Grid
                    templateColumns="repeat(5, 1fr)"
                    gap={2}
                    mt={['3rem',]}
                    borderRadius='20px'
                    overflow='auto'
                    minWidth="100%"
                    pb={['25px', "24px", '0']}
                >
                    {gridItems.map((item, index) => (
                        <GridItem key={index} style={{ gridColumn: index === 0 || index === 4 ? 'span 2' : 'span 1' }} cursor='pointer' shadow='md' h='200px' bg='red' w={['220px', '210px', "initial"]} onClick={item.action}>
                            <Box textAlign="center" px='4' py='12' bg={index === 0 || index === 4 ? '#ddd' : '#f1f1f1'} h='200px' whiteSpace='nowrap' display='flex' flexDir='column' justifyContent='center' alignItems='center'>
                                <Icon as={item.icon} boxSize={20} bg='transparent' shadow='lg' borderRadius='50%' p='5' />
                                <Text mt={2} bg={index === 0 || index === 4 ? '#ddd' : '#f1f1f1'}>{item.label}</Text>
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>New Card Number</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody maxW={'700px'}>
                            <Text>Balance: {isLoading ? 'Loading...' : balance !== null ? `$${balance}` : 'Unavailable'}</Text>
                            <Text>Please copy this number as you will need it to login to your account.</Text>
                        </ModalBody>
                        <ModalFooter />
                    </ModalContent>
                </Modal>
            </Box>
            <Box mt={['3rem', '4rem', '5rem', '8rem']} textAlign="center">
                For more inquiries, reach out to us at {' '}
                <Link href="tel:+1234567890">+1234567890</Link>,{' '}
                <Link href="tel:+12234555">+12234555</Link>, and email at {' '}
                <Link href="mailto:info@gmail.com">info@gmail.com</Link>
            </Box>
        </Box>
    );
}

export default HomePage;
