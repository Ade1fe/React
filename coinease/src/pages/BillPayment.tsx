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






























import React, { useEffect, useState } from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Select, Input, FormControl, FormHelperText, FormLabel, Text, Image } from '@chakra-ui/react';
import { LayoutComp } from '.';
import { smartimg } from '../assets/imgs';
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

const CustomBox = ({ title, amount, cashback, onClick }: CustomBoxProps) => (
  <Box p="4" shadow="md" rounded="md" w={['150px','170px', '185px', '200px']} my='2' mx={['auto', ]} onClick={onClick}>
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

const BillPayment: React.FC<{ setBalance: React.Dispatch<React.SetStateAction<number | null>> }> = ({ setBalance }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [depositAmount, setDepositAmount] = useState<number | null>(null);
  const [userDocRef, setUserDocRef] = useState<DocumentReference<DocumentData> | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      if (currentUser) {
        try {
          const docRef = doc(firestore, 'coinbaseusers', currentUser.uid);
          setUserDocRef(docRef); // Set userDocRef state
          const userDocSnapshot = await getDoc(docRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            if (userData && userData.depositAmount !== undefined) {
              setDepositAmount(userData.depositAmount);
              setBalance(userData.depositAmount);
            } else {
              console.error('Deposit amount not found or invalid in user document');
            }
          } else {
            console.error('User document not found for currentUser');
          }
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    fetchBalance();
  }, [currentUser, setBalance]);

  const deductAmount = async (amountToDeduct: number) => {
    if (!currentUser || !userDocRef) {
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
      console.log("Document updated successfully");

      const transactionsCollection = collection(firestore, 'transactions');
      await addDoc(transactionsCollection, {
        userId: currentUser.uid,
        amount: -amountToDeduct,
        timestamp: new Date(),
      });
    } catch (error) {
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
                <Select placeholder="Select TV service" my='5'>
                  <option value="gotv">GOtv</option>
                  <option value="dstv">DStv</option>
                  <option value="startimes">StarTimes</option>
                  <option value="startimes-on">StarTimes ON</option>
                  <option value="box-office">Box Office</option>
                  <option value="netflix">Netflix</option>
                  <option value="showmax">Showmax</option>
                </Select>
                <FormControl mb='5'>
                  <FormLabel>Smartcard Number</FormLabel>
                  <Input type='text' />
                  <FormHelperText>We'll never share your card number.</FormHelperText>
                </FormControl>

                <Box display={['flex']} flexWrap='wrap' justifyContent='space-evenly' gap='4'>
                  <CustomBox
                    title="Jinja/month"
                    amount="#5100"
                    cashback="#20 cashback"
                    onClick={() => deductAmount(200)}
                  />
                  {/* Other CustomBox components */}
                </Box>
              </Box>
              <Box w={['full' ,'90%','80%' ,'45%' ,'40%']} mt={['1rem','1rem', '1rem', '0']} mx={['auto','auto','auto','0']}>
                <Image src={smartimg} w='full' h='full' objectFit='contain' />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </LayoutComp>
  );
};

export default BillPayment;







