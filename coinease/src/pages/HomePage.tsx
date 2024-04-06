import { Box, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react';
import { logoimg } from '../assets/imgs';
import { useState, useEffect } from 'react';
import { FaMoneyBillAlt, FaBalanceScale, FaMoneyCheckAlt, FaMoneyBillWave, FaCoins, FaExchangeAlt, FaCog, FaKey } from 'react-icons/fa';

const HomePage = () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            setGreeting('Good morning');
        } else if (hour >= 12 && hour < 18) {
            setGreeting('Good afternoon');
        } else {
            setGreeting('Good evening');
        }
    }, []);

    return (
        <Box color='white' className='texts'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Box display='flex' alignItems='center' gap='1'>
                    <Image boxSize='50px' src={logoimg} alt="Logo" />
                    <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
                </Box>
                <Text>Logout</Text>
            </Box>

            <Box>
                <Text fontSize={['md', 'lg', 'x-large']}>{greeting}, Pearls</Text>
                <Text fontSize={['sm', 'md']}>Please select your transaction</Text>
            </Box>

            <Grid gridTemplateColumns="repeat(5, 1fr)" gridGap={2} h={['400px']} bg='#070707' borderRadius='20px' shadow='base' overflow='hidden' textAlign='center'>
                <GridItem  bg='#030b10' color='black' colSpan={2} py='10' display='grid' justifyContent='center'><Icon color='black' bg='white' as={FaMoneyBillWave} boxSize={[8 , 10, 12]} mx='auto'  /> Money Withdrawal</GridItem>
                <GridItem bg='#070707' colSpan={1} py='10' boxSize={[8 , 10, 12]} mx='auto' display='grid' justifyContent='center'><Icon as={FaBalanceScale} boxSize={[8 , 10, 12]} mx='auto'  /> Balance Inquiry</GridItem>
                <GridItem bg='#070707' colSpan={1} py='10' boxSize={[8 , 10, 12]} mx='auto' display='grid' justifyContent='center'><Icon bg='#070707' as={FaMoneyCheckAlt} boxSize={[8 , 10, 12]} mx='auto' /> Send Money</GridItem>
                <GridItem bg='#070707' colSpan={1} py='10' boxSize={[8 , 10, 12]} mx='auto' display='grid' justifyContent='center'><Icon as={FaMoneyBillAlt} boxSize={[8 , 10, 12]} mx='auto' /> Bill Payment</GridItem>
                <GridItem bg='#030b10' color='black' colSpan={2} py='10' display='grid' justifyContent='center'><Icon color='black' bg='white' as={FaCoins} boxSize={[8 , 10, 12]} mx='auto' /> Money Deposit</GridItem>
                <GridItem bg='#070707' colSpan={1} py='10' boxSize={[8 , 10, 12]} mx='auto' display='grid' justifyContent='center'><Icon as={FaExchangeAlt} boxSize={[8 , 10, 12]} mx='auto' /> Internal Transfer</GridItem>
                <GridItem bg='#070707' colSpan={1} py='10' boxSize={[8 , 10, 12]} mx='auto' display='grid' justifyContent='center'><Icon as={FaCog} /> Account Settings</GridItem>
                <GridItem bg='#070707' colSpan={1} py='10' boxSize={[8 , 10, 12]} mx='auto' display='grid' justifyContent='center'><Icon as={FaKey} /> Pin Change</GridItem>
            </Grid>
        </Box>
    );
}

export default HomePage;
