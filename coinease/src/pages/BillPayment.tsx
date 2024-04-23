// import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Select, Input, FormControl, FormHelperText, FormLabel, Text, Image } from '@chakra-ui/react';
// import { LayoutComp } from '.';
// import { airtimeimg, lightdimg, smartimg } from '../assets/imgs';
// import { Link } from 'react-router-dom';

// interface CustomBoxProps {
//   title?: string;
//   amount?: string;
//   cashback?: string;
//   children?: React.ReactNode;
// }

// // Reusable TextBlock component
// const CustomBox = ({ title, amount, cashback, children, }: CustomBoxProps) => {
  
//   return (
//     <Box className="" p="4" shadow="md" rounded="md"  w={['150px','170px', '185px', '200px']} my='2' mx={['auto', ]}>
//       <Text mb='2' fontSize={['md', 'lg']}>
//         {title}
//       </Text>
//       <Text fontSize={['sm', 'lg']}>
//         {amount}
//       </Text>
//       <Text fontSize={['xs', 'sm']} color='green.400'>
//         {cashback}
//       </Text>
//       {children}
//     </Box>
//   );
// };

// // Reusable TextBlock component
// const AirtimeBox = ({  amount, cashback, children, }: CustomBoxProps) => {
  
//   return (
//     <Box className="" p="4" shadow="md" rounded="md" w={['150px','170px', '185px', '200px']} my='2' mx={['auto', '0']}>
  
//       <Text fontSize={['sm', 'lg']} textAlign='center'>
//         {amount}
//       </Text>
//       <Text fontSize={['xs', 'sm']} color='blue.600' textAlign='center'>
//         {cashback}
//       </Text>
//       {children}
//     </Box>
//   );
// };

// const BillPayment = () => {
//   return (
//     <LayoutComp desc='Select a transaction'>
//       <Box className="" w={['100%','93%','95%',"100%" ]} mx='auto'>
//         <Tabs variant='enclosed'>
//           <TabList >
//             <Tab textTransform='capitalize'>TV</Tab>
//             <Tab textTransform='capitalize'>Electric</Tab>
//             <Tab textTransform='capitalize'>Airtime</Tab>
//             <Link to="/home-page"> <Tab textTransform='capitalize'>Cancel</Tab> </Link> 
//           </TabList>
//           <TabPanels>
//             <TabPanel p='0' display={['block','block','block', 'flex']} justifyContent='space-between'>
//               <Box w={['100%','100%','100%', '50%']} mx={['auto','auto', '0']}>
//                 <Select placeholder="Select TV service" my='5'>
//                   <option value="gotv">GOtv</option>
//                   <option value="dstv">DStv</option>
//                   <option value="startimes">StarTimes</option>
//                   <option value="startimes-on">StarTimes ON</option>
//                   <option value="box-office">Box Office</option>
//                   <option value="netflix">Netflix</option>
//                   <option value="showmax">Showmax</option>
//                 </Select>
//                 <FormControl mb='5'>
//                   <FormLabel>Smartcard Number </FormLabel>
//                   <Input type='text' />
//                   <FormHelperText>We'll never share your cardnumber.</FormHelperText>
//                 </FormControl>
             

//               {/* Reusable Box component with additional styling */}
//              <Box display={['flex']} flexWrap='wrap' justifyContent='space-evenly' gap='4' className="">
//              <CustomBox
//                 title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <CustomBox
//                 title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <CustomBox
//                 title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />
//                <CustomBox
//                 title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <CustomBox
//                 title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <CustomBox
//                 title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />
//              </Box>
//                </Box>

//                <Box className="" w={['full' ,'90%','80%' ,'45%' ,'40%']} mt={['1rem','1rem', '1rem', '0']} mx={['auto','auto','auto','0']} >
//                 <Image src={smartimg} w='full' h='full' objectFit='contain' />
//                </Box>
//             </TabPanel>
//             <TabPanel p='0' display={['block','block','block', 'flex']} justifyContent='space-between'>
//               <Box w={['100%','100%','100%', '50%']} mx={['auto','auto', '0']}>
//                 <Select placeholder="Select Biller" my='5'>
//                   <option value="gotv">Ikeja Electric</option>
//                   <option value="dstv">Ibadan Electric</option>
//                   <option value="startimes">Abuja Electric</option>
//                   <option value="startimes-on">Eko Electric</option>
//                   <option value="box-office">Port Harcourt Electric</option>
//                   <option value="netflix">Aba Electric</option>
//                   <option value="showmax">jos Electric</option>
//                   <option value="showmax">Kaduna Electric</option>
//                 </Select>

//                 <Select placeholder="Payment Item" my='5'>
//                   <option value="gotv">Prepaid</option>
//                   <option value="gotv">Postpaid</option>
//                 </Select>
//                 <FormControl mb='5'>
//                   <FormLabel>Meter Number </FormLabel>
//                   <Input type='text' />
//                   <FormHelperText>We'll never share your meternumber.</FormHelperText>
//                 </FormControl>
             

//               {/* Reusable Box component with additional styling */}
//               <Text className="">Select Amount</Text>
//              <Box display={['flex']} flexWrap='wrap' justifyContent='space-evenly' gap='4' className="">
//              <AirtimeBox
//                 // title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <AirtimeBox
//                 // title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <AirtimeBox
//                 // title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />
//                <AirtimeBox
//                 // title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <AirtimeBox
//                 // title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <AirtimeBox
//                 // title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />
//              </Box>
//                </Box>

//                <Box className="" w={['full' ,'90%','80%' ,'45%' ,'40%']} mt={['1rem','1rem', '1rem', '0']} mx={['auto','auto','auto','0']}>
//                 <Image src={lightdimg} />
//                </Box>
//             </TabPanel>
//             <TabPanel p='0' display={['block','block','block', 'flex']} justifyContent='space-between'>
//               <Box w={['100%','100%','100%', '50%']} mx={['auto','auto', '0']}>
//                 <Select placeholder="Select a network " my='5'>
//                   <option value="gotv">Airtel</option>
//                   <option value="dstv">MTN</option>
//                   <option value="startimes">GLO</option>
//                   <option value="startimes-on">9mobile</option>
//                   <option value="box-office">Smile</option>
//                 </Select>

//                 <FormControl mb='5'>
//                   <FormLabel>Phone Number </FormLabel>
//                   <Input type='text' />
//                   <FormHelperText>We'll never share your phonenumber.</FormHelperText>
//                 </FormControl>
             

//               {/* Reusable Box component with additional styling */}
//               <Text className="">Select Amount</Text>
//            <Box display={['flex']} flexWrap='wrap' justifyContent='space-evenly' gap='4' className="">
//              <AirtimeBox
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <AirtimeBox
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <AirtimeBox
//                 // title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />
//                <AirtimeBox
//                 // title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <AirtimeBox
//                 // title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />

//                <AirtimeBox
//                 // title="Jinja/month"
//                 amount="#2700"
//                 cashback="#20 cashback"
//               />
//              </Box>
//                </Box>

//                <Box className="" w={['full' ,'90%','80%' ,'45%' ,'40%']} mt={['1rem','1rem', '1rem', '0']} mx={['auto','auto','auto','0']}>
//                 <Image src={airtimeimg} />
//                </Box>
//             </TabPanel>

//           </TabPanels>
//         </Tabs>
//       </Box>
//     </LayoutComp>
//   );
// };

// export default BillPayment;



































// Imports
import React, { useEffect, useState } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Select, Input, FormControl, FormHelperText, FormLabel, Text, Image, useToast } from '@chakra-ui/react';
import { LayoutComp } from '.';
import { lightdimg, smartimg } from '../assets/imgs';
import { Link } from 'react-router-dom';
import { User } from 'firebase/auth';
import { auth, firestore } from '../firebase';
import { DocumentData, DocumentReference, addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';



interface CustomBoxProps {
  title: string;
  amount: string;
  cashback: string;
  onClick?: () => void;
}


// CustomBox Component
const CustomBox = ({ title, amount, cashback, onClick }: CustomBoxProps) => (
  <Box p="4" shadow="md" rounded="md" w={['150px', '170px', '185px', '200px']} my='2' mx={['auto']} onClick={onClick}>
    <Text mb='2' fontSize={['md', 'lg']}>
      {title}
    </Text>
    <Text fontSize={['sm', 'lg']}>
      {amount}
    </Text>
    <Text fontSize={['xs', 'sm']} color='green.400'>
      {cashback}
    </Text>
  </Box>
);


const CustomBoxs = ({  amount, cashback, onClick}: CustomBoxProps) => {
  
  return (
    <Box className="" p="4" shadow="md" rounded="md" w={['150px','170px', '185px', '200px']} my='2' mx={['auto', '0']}  onClick={onClick}>
  
      <Text fontSize={['sm', 'lg']} textAlign='center'>
        {amount}
      </Text>
      <Text fontSize={['xs', 'sm']} color='blue.600' textAlign='center'>
        {cashback}
      </Text>
     
    </Box>
  );
};
// BillPayment Component
const BillPayment: React.FC<{ setBalance: React.Dispatch<React.SetStateAction<number | null>> }> = ({ setBalance }) => {
  // State variables
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [depositAmount, setDepositAmount] = useState<number | null>(null);
  const [userDocRef, setUserDocRef] = useState<DocumentReference<DocumentData> | null>(null);
  const [smartcardNumber, setSmartcardNumber] = useState<string>('');
  const [smartcardError, setSmartcardError] = useState<string>('');
  const [selectedTVService, setSelectedTVService] = useState<string>('');
  const [selectedBiller, setSelectedBiller] = useState<string>('');
  const [paymentItem, setPaymentItem] = useState<string>('');
  const [meterNumber, setMeterNumber] = useState<string>('');

  // Other hooks
  const toast = useToast();

  // Fetch user balance on component mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Fetch balance from Firestore
  useEffect(() => {
    const fetchBalance = async () => {
      if (currentUser) {
        try {
          const docRef = doc(firestore, 'coinbaseusers', currentUser.uid);
          setUserDocRef(docRef);
          const userDocSnapshot = await getDoc(docRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            if (userData && userData.depositAmount !== undefined) {
              setDepositAmount(userData.depositAmount);
              setBalance(userData.depositAmount);
            } else {
              toast({
                title: `Deposit amount not found or invalid in user document`,
                position: "top-right",
                isClosable: true,
              });
              console.error('Deposit amount not found or invalid in user document');
            }
          } else {
            toast({
              title: `User document not found for currentUser`,
              position: "top-right",
              isClosable: true,
            });
            console.error('User document not found for currentUser');
          }
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    fetchBalance();
  }, [currentUser, setBalance, toast]);

  // Handle smartcard number change
  const handleSmartcardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^\d+$/.test(inputValue) && inputValue.length <= 14) {
      setSmartcardNumber(inputValue);
      setSmartcardError('');
    } else {
      setSmartcardError('Invalid smartcard number. Please enter a valid 14-digit number.');
    }
  };

  // Handle TV service change
  const handleTVServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTVService(event.target.value);
  };

 // Handle biller change
const handleBillerChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedBillerValue = event.target.value;

  // Update the selected biller state
  setSelectedBiller(selectedBillerValue);

  // Save the selected biller to Firestore
  try {
    if (currentUser && userDocRef) {
      // Update the Firestore document with the selected biller
      await setDoc(userDocRef, { selectedBiller: selectedBillerValue }, { merge: true });
      toast({
        title: `Selected biller saved successfully`,
        position: "top-right",
        isClosable: true,
      });
    } else {
      // Handle the case when currentUser or userDocRef is not available
      toast({
        title: `Error: currentUser or userDocRef not available`,
        position: "top-right",
        isClosable: true,
        status: "error",
      });
    }
  } catch (error) {
    // Handle errors if saving to Firestore fails
    console.error('Error saving selected biller to Firestore:', error);
    toast({
      title: `Error saving selected biller: ${error.message}`,
      position: "top-right",
      isClosable: true,
      status: "error",
    });
  }
};


  // Handle payment item change
  const handlePaymentItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentItem(event.target.value);
  };

  // Handle meter number change
  const handleMeterNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeterNumber(event.target.value);
  };

  // Deduct amount from user's balance
  const deductAmount = async (amountToDeduct: number) => {
    if (!currentUser || !userDocRef) {
      toast({
        title: `No currentUser or userDocRef found`,
        position: "top-right",
        isClosable: true,
      });
      console.error('No currentUser or userDocRef found');
      return;
    }

    try {
      const newDepositAmount = depositAmount !== null ? depositAmount - amountToDeduct : null;
      setDepositAmount(newDepositAmount);

      await setDoc(userDocRef, {
        depositAmount: newDepositAmount,
        userId: currentUser.uid
      }, { merge: true });

      toast({
        title: `Amount deducted successfully"`,
        position: "top-right",
        isClosable: true,
      });




 const transactionsCollection = collection(firestore, 'transactions');
      await addDoc(transactionsCollection, {
        amount: -amountToDeduct,
        type: selectedTVService === '' ? 'Electric Service' : 'TV Service',
        smartcardNumber: selectedTVService !== '' ? smartcardNumber : '', // Use smartcardNumber if TV service, otherwise empty string
        serviceType: selectedTVService === '' ? '' : selectedTVService, // Use selected TV service as service type if TV service, otherwise empty string
        meterNumber: selectedTVService === '' ? meterNumber : '', // Use meterNumber if Electric service, otherwise empty string
        biller: selectedBiller,
        paymentItem: paymentItem,
        timestamp: new Date(),
        currentBalance: newDepositAmount,
        userId: currentUser.uid,
      });

      console.log("smartcardNumber", smartcardNumber);

 


    } catch (error) {
      toast({
        title: `Error deducting amount: ${error}`,
        position: "top-right",
        isClosable: true,
      });
      console.error('Error deducting amount:', error);
    }
  };

  return (
    <LayoutComp desc='Select a transaction'>
      <Box w={['100%','93%','95%',"100%" ]} mx='auto'>
        <Tabs variant='enclosed'>
          <TabList>
            <Tab textTransform='capitalize'>TV</Tab>
            <Tab textTransform='capitalize'>Electric</Tab>
            <Tab textTransform='capitalize'>Airtime</Tab>
            <Link to="/home-page"> <Tab textTransform='capitalize'>Cancel</Tab> </Link>
          </TabList>
          <TabPanels>
            <TabPanel p='0' display={['block','block','block', 'flex']} justifyContent='space-between'>
              <Box w={['100%','100%','100%', '50%']} mx={['auto','auto', '0']}>
                <Select placeholder="Select TV service" my='5' value={selectedTVService} onChange={handleTVServiceChange}>
                  <option value="gotv">GOtv</option>
                  <option value="dstv">DStv</option>
                  <option value="startimes">StarTimes</option>
                  <option value="startimes-on">StarTimes ON</option>
                  <option value="box-office">Box Office</option>
                  <option value="netflix">Netflix</option>
                  <option value="showmax">Showmax</option>
                </Select>
                
                <FormControl mb='5' isInvalid={smartcardError !== ''}>
                  <FormLabel>Smartcard Number</FormLabel>
                  <Input type='text' value={smartcardNumber} onChange={handleSmartcardChange} />
                  <Text color="red.500" fontSize='x-small'>{smartcardError}</Text>
                  <FormHelperText>We'll never share your card number.</FormHelperText>
                </FormControl>

                <Box display={['flex']} flexWrap='wrap' justifyContent='space-evenly' gap='4'>
                <CustomBox
                    title="jinja/month"
                    amount="#2700"
                    cashback="#20 cashback"   
                    onClick={() => deductAmount(7)}           />
                </Box>
              </Box>
              <Box w={['full' ,'90%','80%' ,'45%' ,'40%']} mt={['1rem','1rem', '1rem', '0']} mx={['auto','auto','auto','0']}>
                <Image src={smartimg} w='full' h='full' objectFit='contain' />
              </Box>
            </TabPanel>


            <TabPanel p='0' display={['block','block','block', 'flex']} justifyContent='space-between'>
              <Box w={['100%','100%','100%', '50%']} mx={['auto','auto', '0']}>
                <Select placeholder="Select Biller" my='5' onChange={handleBillerChange}>
                  <option value="ikeja-electric">Ikeja Electric</option>
                  <option value="ibadan-electric">Ibadan Electric</option>
                  <option value="abuja-electric">Abuja Electric</option>
                  <option value="eko-electric">Eko Electric</option>
                  <option value="port-electric">Port Harcourt Electric</option>
                  <option value="aba-electric">Aba Electric</option>
                  <option value="jos-electric">jos Electric</option>
                  <option value="kaduna-electric">Kaduna Electric</option>
                </Select>

                <Select placeholder="Payment Item" my='5' onChange={handlePaymentItemChange}>
                  <option value="prepaid">Prepaid</option>
                  <option value="postpaid">Postpaid</option>
                </Select>
                <FormControl mb='5'>
                  <FormLabel>Meter Number </FormLabel>
                  <Input type='text' value={meterNumber} onChange={handleMeterNumberChange} />
                  <Text color="red.500" fontSize='x-small'>{smartcardError}</Text>
                  <FormHelperText>We'll never share your meternumber.</FormHelperText>
                </FormControl>

                <Text className="">Select Amount</Text>
                <Box display={['flex']} flexWrap='wrap' justifyContent='space-evenly' gap='4' className="">
                <CustomBoxs
                    title=""
                    amount="#2700"
                    cashback="#20 cashback"   
                    onClick={() => deductAmount(7)}           />
                </Box>
              </Box>
              <Box className="" w={['full' ,'90%','80%' ,'45%' ,'40%']} mt={['1rem','1rem', '1rem', '0']} mx={['auto','auto','auto','0']}>
                <Image src={lightdimg} />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </LayoutComp>
  );
};

export default BillPayment;
