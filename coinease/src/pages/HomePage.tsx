

import { Box, Grid, GridItem, Icon,  Text, Link } from '@chakra-ui/react';
import React from 'react';
import { FaMoneyBillAlt, FaBalanceScale, FaMoneyCheckAlt, FaMoneyBillWave, FaCoins, FaExchangeAlt, FaCog, FaKey } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import { Greetings } from '../components';


const HomePage: React.FC = () => {
    const navigate = useNavigate();
   
    const gridItems = [
        { icon: FaMoneyBillAlt, label: "Money Withdrawal", action: () => navigate("/with-draw-money") },
        { icon: FaBalanceScale, label: "Balance Inquiry", action: () => console.log('Balance Inquiry clicked') },
        { icon: FaMoneyCheckAlt, label: "Send Money", action: () => navigate('/sendMoney') },
        { icon: FaMoneyBillWave, label: "Bill Payment", action: () => navigate('/bill-payment') },
        { icon: FaExchangeAlt, label: "Money Deposit", action: () => console.log('Money Deposit clicked') },
        { icon: FaCoins, label: "Internal Transfer", action: () => console.log('Internal Transfer clicked') },
        { icon: FaCog, label: "Account Settings", action: () => console.log('Account Settings clicked') },
        { icon: FaKey, label: "Change Pin", action: () => console.log('Change Pin clicked') }
    ];

    return (
        <Box color='black' className='texts' mx='auto' maxW={'1340px'} px='20px'>
     
            <Greetings desc='Please select your transaction'/>

            <Grid
                templateColumns="repeat(5, 1fr)"
                gap={2}
                mt={['3rem',]}
                borderRadius='20px'
                overflow='hidden'
                // boxShadow="sm"
            >
                {gridItems.map((item, index) => (
                    <GridItem key={index} style={{ gridColumn: index === 0 || index === 4 ? 'span 2' : 'span 1' }} cursor='pointer' shadow='md'>
                        <Box textAlign="center" px='4' py='12' bg={index === 0 || index === 4  ? '#ddd' : '#f1f1f1'} onClick={item.action}>
                            <Icon as={item.icon} boxSize={8} bg='transparent' />
                            <Text mt={2} bg={index === 0 || index === 4  ? '#ddd' : '#f1f1f1'}>{item.label}</Text>
                        </Box>
                    </GridItem>
                ))}
            </Grid>

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
