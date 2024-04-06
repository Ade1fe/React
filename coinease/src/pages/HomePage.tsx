import { Box, Grid, GridItem, Icon, Image, Text , Link} from '@chakra-ui/react';
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
        <Box color='white' className='texts' mx='auto' maxW={'1340px'} px='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center' py='20px'>
                <Box display='flex' alignItems='center' gap='1'>
                    <Image boxSize='50px' src={logoimg} alt="Logo" />
                    <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
                </Box>
                <Text>Logout</Text>
            </Box>

            <Box  mt={['3rem', '4rem', '5rem']}>
                <Text fontSize={['md', 'lg', 'x-large']}>{greeting}, Pearls</Text>
                <Text fontSize={['sm', 'md']}>Please select your transaction</Text>
            </Box>

            <Grid
                templateColumns="repeat(5, 1fr)"
                gap={2}
                mt={['3rem',]}
                borderRadius='20px'
                overflow='hidden'
                boxShadow="xl"
            >
              
                <GridItem colSpan={[5, 2]} bg=''>
                    <Box textAlign="center" px='4'  py='12' bg='#050b10'>
                        <Icon as={FaMoneyBillAlt} boxSize={8} />
                        <Text mt={2}  bg='#050b10'>Money Withdrawal</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={[5, 1]} border='2px solid #030b10' >
                    <Box textAlign="center" px='4'  py='12' bg='#030b10'>
                        <Icon as={FaBalanceScale} boxSize={8} />
                        <Text mt={2} bg='#030b10'>Balance Inquiry</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={[5, 1]}>
                    <Box textAlign="center" px='4'  py='12' bg='#030b10'>
                        <Icon as={FaMoneyCheckAlt} boxSize={8} />
                        <Text mt={2} bg='#030b10'>Send Money</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={[5, 1]}>
                    <Box textAlign="center" px='4'  py='12' bg='#030b10'>
                        <Icon as={FaMoneyBillWave} boxSize={8} />
                        <Text mt={2} bg='#030b10'>Bill Payment</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={[5, 2]}>
                    <Box textAlign="center" px='4'  py='12'  bg='#050b10'>
                        <Icon as={FaExchangeAlt} boxSize={8} />
                        <Text mt={2}  bg='#050b10'>Money Deposit</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={[5, 1]}>
                    <Box textAlign="center" px='4'  py='12' bg='#030b10'>
                        <Icon as={FaCoins} boxSize={8} />
                        <Text mt={2} bg='#030b10'>Internal Transfer</Text>
                    </Box>
                </GridItem>

                {/* Second Row */}
               
                <GridItem colSpan={[5, 1]} >
                    <Box textAlign="center" px='4'  py='12' bg='#030b10'>
                        <Icon as={FaCog} boxSize={8} />
                        <Text mt={2} bg='#030b10'>Account Settings</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={[5, 1]}>
                    <Box textAlign="center" px='4'  py='12' bg='#030b10'>
                        <Icon as={FaKey} boxSize={8} />
                        <Text mt={2} bg='#030b10'>Change Pin</Text>
                    </Box>
                </GridItem>
             
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
