// import { Box, Grid, GridItem, Icon, Image, Text , Link} from '@chakra-ui/react';
// import { logoimg } from '../assets/imgs';
// import { useState, useEffect } from 'react';
// import { FaMoneyBillAlt, FaBalanceScale, FaMoneyCheckAlt, FaMoneyBillWave, FaCoins, FaExchangeAlt, FaCog, FaKey } from 'react-icons/fa';

// const HomePage = () => {
//     const [greeting, setGreeting] = useState('');

//     useEffect(() => {
//         const hour = new Date().getHours();
//         if (hour >= 5 && hour < 12) {
//             setGreeting('Good morning');
//         } else if (hour >= 12 && hour < 18) {
//             setGreeting('Good afternoon');
//         } else {
//             setGreeting('Good evening');
//         }
//     }, []);

//     return (
//         <Box color='white' className='texts' mx='auto' maxW={'1340px'} px='20px'>
//             <Box display='flex' justifyContent='space-between' alignItems='center' py='20px'>
//                 <Box display='flex' alignItems='center' gap='1'>
//                     <Image boxSize='50px' src={logoimg} alt="Logo" />
//                     <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
//                 </Box>
//                 <Text>Logout</Text>
//             </Box>

//             <Box  mt={['3rem', '4rem', '5rem']}>
//                 <Text fontSize={['md', 'lg', 'x-large']}>{greeting}, Pearls</Text>
//                 <Text fontSize={['sm', 'md']}>Please select your transaction</Text>
//             </Box>

//             <Grid
//                 templateColumns="repeat(5, 1fr)"
//                 gap={2}
//                 mt={['3rem',]}
//                 borderRadius='20px'
//                 overflow='hidden'
//                 boxShadow="xl"
//             >
              
//                 <GridItem colSpan={[5, 2]} bg=''>
//                     <Box textAlign="center" px='4'  py='12' bg='#050b10'>
//                         <Icon as={FaMoneyBillAlt} boxSize={8} />
//                         <Text mt={2}  bg='#050b10'>Money Withdrawal</Text>
//                     </Box>
//                 </GridItem>
//                 <GridItem colSpan={[5, 1]} border='2px solid #030b10' >
//                     <Box textAlign="center" px='4'  py='12' bg='#030b10'>
//                         <Icon as={FaBalanceScale} boxSize={8} />
//                         <Text mt={2} bg='#030b10'>Balance Inquiry</Text>
//                     </Box>
//                 </GridItem>
//                 <GridItem colSpan={[5, 1]}>
//                     <Box textAlign="center" px='4'  py='12' bg='#030b10'>
//                         <Icon as={FaMoneyCheckAlt} boxSize={8} />
//                         <Text mt={2} bg='#030b10'>Send Money</Text>
//                     </Box>
//                 </GridItem>
//                 <GridItem colSpan={[5, 1]}>
//                     <Box textAlign="center" px='4'  py='12' bg='#030b10'>
//                         <Icon as={FaMoneyBillWave} boxSize={8} />
//                         <Text mt={2} bg='#030b10'>Bill Payment</Text>
//                     </Box>
//                 </GridItem>
//                 <GridItem colSpan={[5, 2]}>
//                     <Box textAlign="center" px='4'  py='12'  bg='#050b10'>
//                         <Icon as={FaExchangeAlt} boxSize={8} />
//                         <Text mt={2}  bg='#050b10'>Money Deposit</Text>
//                     </Box>
//                 </GridItem>
//                 <GridItem colSpan={[5, 1]}>
//                     <Box textAlign="center" px='4'  py='12' bg='#030b10'>
//                         <Icon as={FaCoins} boxSize={8} />
//                         <Text mt={2} bg='#030b10'>Internal Transfer</Text>
//                     </Box>
//                 </GridItem>

//                 {/* Second Row */}
               
//                 <GridItem colSpan={[5, 1]} >
//                     <Box textAlign="center" px='4'  py='12' bg='#030b10'>
//                         <Icon as={FaCog} boxSize={8} />
//                         <Text mt={2} bg='#030b10'>Account Settings</Text>
//                     </Box>
//                 </GridItem>
//                 <GridItem colSpan={[5, 1]}>
//                     <Box textAlign="center" px='4'  py='12' bg='#030b10'>
//                         <Icon as={FaKey} boxSize={8} />
//                         <Text mt={2} bg='#030b10'>Change Pin</Text>
//                     </Box>
//                 </GridItem>
             
//             </Grid>
          
//             <Box mt={['3rem', '4rem', '5rem', '8rem']} textAlign="center">
//                 For more inquiries, reach out to us at {' '}
//                 <Link href="tel:+1234567890">+1234567890</Link>,{' '}
//                 <Link href="tel:+12234555">+12234555</Link>, and email at {' '}
//                 <Link href="mailto:info@gmail.com">info@gmail.com</Link>
//             </Box>
//         </Box>
//     );
// }

// export default HomePage;




















// import { Box, Grid, GridItem, Icon, Image, Text, Link } from '@chakra-ui/react';
// import React, { useState, useEffect } from 'react';
// import { FaMoneyBillAlt, FaBalanceScale, FaMoneyCheckAlt, FaMoneyBillWave, FaCoins, FaExchangeAlt, FaCog, FaKey } from 'react-icons/fa';

// import { logoimg } from '../assets/imgs';

// const HomePage: React.FC = () => {
//     const [greeting, setGreeting] = useState('');
   
//     const gridItems = [
//         { icon: FaMoneyBillAlt, label: "Money Withdrawal", action: () => console.log('Money Withdrawal clicked') },
//         { icon: FaBalanceScale, label: "Balance Inquiry", action: () => console.log('Balance Inquiry clicked') },
//         { icon: FaMoneyCheckAlt, label: "Send Money", action: () => console.log('Send Money clicked') },
//         { icon: FaMoneyBillWave, label: "Bill Payment", action: () => console.log('Bill Payment clicked') },
//         { icon: FaExchangeAlt, label: "Money Deposit", action: () => console.log('Money Deposit clicked') },
//         { icon: FaCoins, label: "Internal Transfer", action: () => console.log('Internal Transfer clicked') },
//         { icon: FaCog, label: "Account Settings", action: () => console.log('Account Settings clicked') },
//         { icon: FaKey, label: "Change Pin", action: () => console.log('Change Pin clicked') }
//     ];

//     useEffect(() => {
//         const hour = new Date().getHours();
//         if (hour >= 5 && hour < 12) {
//             setGreeting('Good morning');
//         } else if (hour >= 12 && hour < 18) {
//             setGreeting('Good afternoon');
//         } else {
//             setGreeting('Good evening');
//         }
//     }, []);

//     return (
//         <Box color='white' className='texts' mx='auto' maxW={'1340px'} px='20px'>
//             <Box display='flex' justifyContent='space-between' alignItems='center' py='20px'>
//                 <Box display='flex' alignItems='center' gap='1'>
//                     <Image boxSize='50px' src={logoimg} alt="Logo" />
//                     <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
//                 </Box>
//                 <Text>Logout</Text>
//             </Box>

//             <Box mt={['3rem', '4rem', '5rem']}>
//                 <Text fontSize={['md', 'lg', 'x-large']}>{greeting}, Pearls</Text>
//                 <Text fontSize={['sm', 'md']}>Please select your transaction</Text>
//             </Box>

//             <Grid
//                 templateColumns="repeat(5, 1fr)"
//                 gap={2}
//                 mt={['3rem',]}
//                 borderRadius='20px'
//                 overflow='hidden'
//                 boxShadow="xl"
//             >
//                 {gridItems.map((item, index) => (
//                     <GridItem key={index} style={{ gridColumn: index === 0 || index === 4 ? 'span 2' : 'span 1' }} >
//                         <Box textAlign="center" px='4' py='12' bg={index === 0 ? '#050b10' : '#030b10'}>
//                             <Icon as={item.icon} boxSize={8} />
//                             <Text mt={2} bg={index === 0 ? '#050b10' : '#030b10'}>{item.label}</Text>
//                         </Box>
//                     </GridItem>
//                 ))}
//             </Grid>

//             <Box mt={['3rem', '4rem', '5rem', '8rem']} textAlign="center">
//                 For more inquiries, reach out to us at {' '}
//                 <Link href="tel:+1234567890">+1234567890</Link>,{' '}
//                 <Link href="tel:+12234555">+12234555</Link>, and email at {' '}
//                 <Link href="mailto:info@gmail.com">info@gmail.com</Link>
//             </Box>
//         </Box>
//     );
// }

// export default HomePage;

// <Input placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} /> 

    {/* <Input ref={inputRef} placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} /> */}



















// import { Box, Grid, GridItem, Icon, Image, Text, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input, Button } from '@chakra-ui/react';
// import React, { useState, useEffect, useRef } from 'react';
// import { FaMoneyBillAlt, FaBalanceScale, FaMoneyCheckAlt, FaMoneyBillWave, FaCoins, FaExchangeAlt, FaCog, FaKey } from 'react-icons/fa';

// import { logoimg } from '../assets/imgs';

// const HomePage: React.FC = () => {
//     const [greeting, setGreeting] = useState('');
//     const [modalOpen, setModalOpen] = useState(false);
//     const [modalContent, setModalContent] = useState<{ label: string, action: () => void, fields?: React.ReactNode } | null>(null);
//     const [amount, setAmount] = useState('');
//     const inputRef = useRef<HTMLInputElement>(null); 

//     useEffect(() => {
//         const hour = new Date().getHours();
//         if (hour >= 5 && hour < 12) {
//             setGreeting('Good morning');
//         } else if (hour >= 12 && hour < 18) {
//             setGreeting('Good afternoon');
//         } else {
//             setGreeting('Good evening');
//         }
//     }, []);
    
//     const gridItems = [
//         { icon: FaMoneyBillAlt, label: "Money Withdrawal", action: () => handleGridItemClick("Money Withdrawal"), fields: <Input ref={inputRef} placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />},
//         { icon: FaBalanceScale, label: "Balance Inquiry", action: () => handleGridItemClick("Balance Inquiry") },
//         { icon: FaMoneyCheckAlt, label: "Send Money", action: () => handleGridItemClick("Send Money") },
//         { icon: FaMoneyBillWave, label: "Bill Payment", action: () => handleGridItemClick("Bill Payment") },
//         { icon: FaExchangeAlt, label: "Money Deposit", action: () => handleGridItemClick("Money Deposit") },
//         { icon: FaCoins, label: "Internal Transfer", action: () => handleGridItemClick("Internal Transfer") },
//         { icon: FaCog, label: "Account Settings", action: () => handleGridItemClick("Account Settings") },
//         { icon: FaKey, label: "Change Pin", action: () => handleGridItemClick("Change Pin") }
//     ];

//     const handleGridItemClick = (label: string) => {
//         const selectedItem = gridItems.find(item => item.label === label);
//         if (selectedItem) {
//             setModalContent(selectedItem);
//             setModalOpen(true);
//         }
//     };

//     const handleCloseModal = () => {
//         setModalOpen(false);
//         setModalContent(null);
//     };

//     const handleDigitClick = (digit: string) => {
//         if (inputRef.current) {
//             inputRef.current.focus(); // Focus on the input element
//             setAmount(prevAmount => prevAmount + digit);
//         }
//     };

//     const handleDeleteClick = () => {
//         if (inputRef.current) {
//             inputRef.current.focus(); // Focus on the input element
//             setAmount(prevAmount => prevAmount.slice(0, -1));
//         }
//     };

//     const handleSubmit = () => {
//         // You can handle form submission here
//         console.log("Form submitted");
//     };

//     return (
//         <Box color='white' className='texts' mx='auto' maxW={'1340px'} px='20px'>
//             <Box display='flex' justifyContent='space-between' alignItems='center' py='20px'>
//                 <Box display='flex' alignItems='center' gap='1'>
//                     <Image boxSize='50px' src={logoimg} alt="Logo" />
//                     <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
//                 </Box>
//                 <Text>Logout</Text>
//             </Box>

//             <Box mt={['3rem', '4rem', '5rem']}>
//                 <Text fontSize={['md', 'lg', 'x-large']}>{greeting}, Pearls</Text>
//                 <Text fontSize={['sm', 'md']}>Please select your transaction</Text>
//             </Box>

//             <Grid
//                 templateColumns="repeat(5, 1fr)"
//                 gap={2}
//                 mt={['3rem',]}
//                 borderRadius='20px'
//                 overflow='hidden'
//                 boxShadow="xl"
//             >
//                 {gridItems.map((item, index) => (
//                     <GridItem key={index} style={{ gridColumn: index === 0 || index === 4 ? 'span 2' : 'span 1' }} >
//                         <Box textAlign="center" px='4' py='12' bg={index === 0 ? '#050b10' : '#030b10'} onClick={item.action}>
//                             <Icon as={item.icon} boxSize={8} />
//                             <Text mt={2} bg={index === 0 ? '#050b10' : '#030b10'}>{item.label}</Text>
//                         </Box>
//                     </GridItem>
//                 ))}
//             </Grid>

//             <Modal isOpen={modalOpen} onClose={handleCloseModal}>
//                 <ModalOverlay bg='white'/>
//                 <ModalContent zIndex='999' bg='white'>
//                     <ModalHeader bg='white'>{modalContent?.label}</ModalHeader>
//                     <ModalCloseButton bg='white'/>
//                     <ModalBody bg='white'>
//                     {modalContent?.fields}
//                     <Box display='flex' flexWrap='wrap' gap={4} mb={4} justifyContent='center' bg='transparent'>
//                         {[...Array(10).keys()].map((digit) => (
//                             <Button key={digit} _hover={{bg: "gray.600"}} color="white" fontSize={['md', 'lg', "x-large"]} shadow='xl' boxSize='60px' mx='auto'  bg='#081e2b' borderRadius='50%' onClick={() => handleDigitClick(digit.toString())}>
//                                 {digit}
//                             </Button>
//                         ))}
//                         <Button mt='20px' bg="#081e2b" _hover={{bg: "gray.600"}}  w='150px' color='white'  borderRadius='md' onClick={handleDeleteClick}>Delete</Button>
//                     </Box>
                
//                     <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
//                         Submit
//                     </Button>
//                 </ModalBody>
//                 </ModalContent>
//             </Modal>

//             <Box mt={['3rem', '4rem', '5rem', '8rem']} textAlign="center">
//                 For more inquiries, reach out to us at {' '}
//                 <Link href="tel:+1234567890">+1234567890</Link>,{' '}
//                 <Link href="tel:+12234555">+12234555</Link>, and email at {' '}
//                 <Link href="mailto:info@gmail.com">info@gmail.com</Link>
//             </Box>
//         </Box>
//     );
// }

// export default HomePage;














// import { useEffect, useRef, useState } from 'react';
// import { Box, Grid, GridItem, Icon, Image, Text, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input, Button } from '@chakra-ui/react';
// import { FaMoneyBillAlt, FaBalanceScale, FaMoneyCheckAlt, FaMoneyBillWave, FaCoins, FaExchangeAlt, FaCog, FaKey } from 'react-icons/fa';

// import { logoimg } from '../assets/imgs';

// const HomePage: React.FC = () => {
//     const [greeting, setGreeting] = useState('');
//     const [modalOpen, setModalOpen] = useState(false);
//     const [modalContent, setModalContent] = useState<{ label: string, action: () => void } | null>(null);
//     const [amount, setAmount] = useState('');

//     useEffect(() => {
//         const hour = new Date().getHours();
//         if (hour >= 5 && hour < 12) {
//             setGreeting('Good morning');
//         } else if (hour >= 12 && hour < 18) {
//             setGreeting('Good afternoon');
//         } else {
//             setGreeting('Good evening');
//         }
//     }, []);

//     const inputRef = useRef<HTMLInputElement>(null);

//     const gridItems = [
//         { icon: FaMoneyBillAlt, label: "Money Withdrawal", action: () => handleGridItemClick("Money Withdrawal") },
//         { icon: FaBalanceScale, label: "Balance Inquiry", action: () => handleGridItemClick("Balance Inquiry") },
//         { icon: FaMoneyCheckAlt, label: "Send Money", action: () => handleGridItemClick("Send Money") },
//         { icon: FaMoneyBillWave, label: "Bill Payment", action: () => handleGridItemClick("Bill Payment") },
//         { icon: FaExchangeAlt, label: "Money Deposit", action: () => handleGridItemClick("Money Deposit") },
//         { icon: FaCoins, label: "Internal Transfer", action: () => handleGridItemClick("Internal Transfer") },
//         { icon: FaCog, label: "Account Settings", action: () => handleGridItemClick("Account Settings") },
//         { icon: FaKey, label: "Change Pin", action: () => handleGridItemClick("Change Pin") }
//     ];

//     const handleGridItemClick = (label: string) => {
//         const selectedItem = gridItems.find(item => item.label === label);
//         if (selectedItem) {
//             setModalContent(selectedItem);
//             setModalOpen(true);
//             setAmount('');
//         }
//     };

//     const handleCloseModal = () => {
//         setModalOpen(false);
//         setModalContent(null);
//     };

//     const handleDigitClick = (digit: string) => {
//         if (inputRef.current) {
//             inputRef.current.focus();
//             setAmount(prevAmount => prevAmount + digit);
//         }
//     };

//     const handleDeleteClick = () => {
//         if (inputRef.current) {
//             inputRef.current.focus();
//             setAmount(prevAmount => prevAmount.slice(0, -1));
//         }
//     };

//     const handleSubmit = () => {
//         console.log("Form submitted");
//     };

//     return (
//         <Box color='white' className='texts' mx='auto' maxW={'1340px'} px='20px'>
//             <Box display='flex' justifyContent='space-between' alignItems='center' py='20px'>
//                 <Box display='flex' alignItems='center' gap='1'>
//                     <Image boxSize='50px' src={logoimg} alt="Logo" />
//                     <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
//                 </Box>
//                 <Text>Logout</Text>
//             </Box>

//             <Box mt={['3rem', '4rem', '5rem']}>
//                 <Text fontSize={['md', 'lg', 'x-large']}>{greeting}, Pearls</Text>
//                 <Text fontSize={['sm', 'md']}>Please select your transaction</Text>
//             </Box>

//             <Grid
//                 templateColumns="repeat(5, 1fr)"
//                 gap={2}
//                 mt={['3rem',]}
//                 borderRadius='20px'
//                 overflow='hidden'
//                 boxShadow="xl"
//             >
//                 {gridItems.map((item, index) => (
//                     <GridItem key={index} style={{ gridColumn: index === 0 || index === 4 ? 'span 2' : 'span 1' }} >
//                         <Box textAlign="center" px='4' py='12' bg={index === 0 ? '#050b10' : '#030b10'} onClick={item.action}>
//                             <Icon as={item.icon} boxSize={8} />
//                             <Text mt={2} bg={index === 0 ? '#050b10' : '#030b10'}>{item.label}</Text>
//                         </Box>
//                     </GridItem>
//                 ))}
//             </Grid>

//             <Modal isOpen={modalOpen} onClose={handleCloseModal}>
//                 <ModalOverlay bg='white'/>
//                 <ModalContent zIndex='999' bg='white'>
//                     <ModalHeader bg='white'>{modalContent?.label}</ModalHeader>
//                     <ModalCloseButton bg='white'/>
//                     <ModalBody bg='white'>
//                         <Input ref={inputRef} placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
//                         <Box display='flex' flexWrap='wrap' gap={4} mb={4} justifyContent='center' bg='transparent'>
//                             {[...Array(10).keys()].map((digit) => (
//                                 <Button key={digit} _hover={{bg: "gray.600"}} color="white" fontSize={['md', 'lg', "x-large"]} shadow='xl' boxSize='60px' mx='auto'  bg='#081e2b' borderRadius='50%' onClick={() => handleDigitClick(digit.toString())}>
//                                     {digit}
//                                 </Button>
//                             ))}
//                             <Button mt='20px' bg="#081e2b" _hover={{bg: "gray.600"}}  w='150px' color='white'  borderRadius='md' onClick={handleDeleteClick}>Delete</Button>
//                         </Box>
//                         <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
//                             Submit
//                         </Button>
//                     </ModalBody>
//                 </ModalContent>
//             </Modal>

//             <Box mt={['3rem', '4rem', '5rem', '8rem']} textAlign="center">
//                 For more inquiries, reach out to us at {' '}
//                 <Link href="tel:+1234567890">+1234567890</Link>,{' '}
//                 <Link href="tel:+12234555">+12234555</Link>, and email at {' '}
//                 <Link href="mailto:info@gmail.com">info@gmail.com</Link>
//             </Box>
//         </Box>
//     );
// }

// export default HomePage;























import { useEffect, useRef, useState } from 'react';
import { Box, Grid, GridItem, Icon, Image, Text, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input, Button } from '@chakra-ui/react';
import { FaMoneyBillAlt, FaBalanceScale, FaMoneyCheckAlt, FaMoneyBillWave, FaCoins, FaExchangeAlt, FaCog, FaKey } from 'react-icons/fa';

import { logoimg } from '../assets/imgs';

const HomePage: React.FC = () => {
    const [greeting, setGreeting] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<{ label: string, action: () => void } | null>(null);
    const [amount, setAmount] = useState('');

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

    const inputRef = useRef<HTMLInputElement>(null);

    const gridItems = [
        { icon: FaMoneyBillAlt, label: "Money Withdrawal", action: () => handleGridItemClick("Money Withdrawal") },
        { icon: FaBalanceScale, label: "Balance Inquiry", action: () => handleGridItemClick("Balance Inquiry") },
        { icon: FaMoneyCheckAlt, label: "Send Money", action: () => handleGridItemClick("Send Money") },
        { icon: FaMoneyBillWave, label: "Bill Payment", action: () => handleGridItemClick("Bill Payment") },
        { icon: FaExchangeAlt, label: "Money Deposit", action: () => handleGridItemClick("Money Deposit") },
        { icon: FaCoins, label: "Internal Transfer", action: () => handleGridItemClick("Internal Transfer") },
        { icon: FaCog, label: "Account Settings", action: () => handleGridItemClick("Account Settings") },
        { icon: FaKey, label: "Change Pin", action: () => handleGridItemClick("Change Pin") }
    ];

    const gridItemsRequiringInput = ["Money Withdrawal", "Send Money", "Bill Payment", "Money Deposit", "Internal Transfer", "Change Pin"];

    const handleGridItemClick = (label: string) => {
        const selectedItem = gridItems.find(item => item.label === label);
        if (selectedItem) {
            setModalContent(selectedItem);
            setModalOpen(true);
            if (!gridItemsRequiringInput.includes(label)) {
                setAmount(''); // Clear the amount if the selected item does not require input
            }
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setModalContent(null);
    };

    const handleDigitClick = (digit: string) => {
        if (inputRef.current) {
            inputRef.current.focus();
            setAmount(prevAmount => prevAmount + digit);
        }
    };

    const handleDeleteClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            setAmount(prevAmount => prevAmount.slice(0, -1));
        }
    };

    const handleSubmit = () => {
        console.log("Form submitted");
    };

    return (
        <Box color='white' className='texts' mx='auto' maxW={'1340px'} px='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center' py='20px'>
                <Box display='flex' alignItems='center' gap='1'>
                    <Image boxSize='50px' src={logoimg} alt="Logo" />
                    <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
                </Box>
                <Text>Logout</Text>
            </Box>

            <Box mt={['3rem', '4rem', '5rem']}>
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
                {gridItems.map((item, index) => (
                    <GridItem key={index} style={{ gridColumn: index === 0 || index === 4 ? 'span 2' : 'span 1' }} >
                        <Box textAlign="center" px='4' py='12' bg={index === 0 ? '#050b10' : '#030b10'} onClick={item.action}>
                            <Icon as={item.icon} boxSize={8} />
                            <Text mt={2} bg={index === 0 ? '#050b10' : '#030b10'}>{item.label}</Text>
                        </Box>
                    </GridItem>
                ))}
            </Grid>

            <Modal isOpen={modalOpen} onClose={handleCloseModal}>
                <ModalOverlay bg='white'/>
                <ModalContent zIndex='999' bg='white'>
                    <ModalHeader bg='white'>{modalContent?.label}</ModalHeader>
                    <ModalCloseButton bg='white'/>
                    <ModalBody bg='white'>
                        {gridItemsRequiringInput.includes(modalContent?.label ?? "") && (
                            <>
                                <Input ref={inputRef} placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                                <Box display='flex' flexWrap='wrap' gap={4} mb={4} justifyContent='center' bg='transparent'>
                                    {[...Array(10).keys()].map((digit) => (
                                        <Button key={digit} _hover={{bg: "gray.600"}} color="white" fontSize={['md', 'lg', "x-large"]} shadow='xl' boxSize='60px' mx='auto'  bg='#081e2b' borderRadius='50%' onClick={() => handleDigitClick(digit.toString())}>
                                            {digit}
                                        </Button>
                                    ))}
                                    <Button mt='20px' bg="#081e2b" _hover={{bg: "gray.600"}}  w='150px' color='white'  borderRadius='md' onClick={handleDeleteClick}>Delete</Button>
                                </Box>
                                <Button mt={4} colorScheme="teal" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>

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
