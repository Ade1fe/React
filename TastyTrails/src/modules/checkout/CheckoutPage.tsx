
import React, { useEffect, useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Text, Icon, GridItem,  } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { firestore } from "../../firebase";
import { FaCheck } from 'react-icons/fa';
import { Footer, Navbar } from '../../components';

interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expirationDate: string;
  cvv: string;
}

interface CheckoutData {
  subtotal: number;
  tax: number;
  total: number;
}

const CheckoutPage: React.FC = () => {

  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  // const toast = useToast();
  const location = useLocation();
  const checkoutData: CheckoutData = location.state && location.state.checkoutData;

  
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user); // Update isAuthenticated state based on user authentication
    });

    return () => unsubscribe(); 
  }, [auth]);

    const fetchUserData = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      try {
        const userDocRef = doc(firestore, 'foodappusers', user.uid);
        const docSnapshot = await getDoc(userDocRef);
  
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          setAddress(userData.address || '');
          setEmail(userData.email || '');
          setPhoneNumber(userData.phonenumber || '');
          localStorage.setItem('userData', JSON.stringify(userData));
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error getting document:', error);
      }
    }
  };
  
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (!storedUserData) {
      fetchUserData();
    } else {
      const userData = JSON.parse(storedUserData);
      setAddress(userData.address || '');
      setEmail(userData.email || '');
      setPhoneNumber(userData.phonenumber || '');
    }
  }, []);




  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof PaymentInfo) => {
    setPaymentInfo({ ...paymentInfo, [field]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can handle the payment submission logic
    console.log(paymentInfo);
  };

  

  return (
 <div className="">
     <Navbar isAuthenticated={isAuthenticated} /> 
<Box display={['block', 'block', 'flex']} alignItems='flex-start' justifyContent='space-between' maxW='1340px' mx='auto' gap='20px' px='20px'>

<Box className="" w={['100%', '85%', '80%', '50%']} mx={['auto', 'auto', '0']}>
<Text fontSize="2xl" fontWeight="bold" mb="4">
        Product Checkout
      </Text>
<Box mt="4" >
<Text fontSize={['md', 'lg', 'xl']} mb={['10px']} fontWeight='900'>Shipping Address</Text>
<Box border='1px' px='3' pt='1' pb='15px' mb={['30px']}>
 
  <FormControl id="address" mt="4">
    <FormLabel p='0' fontWeight='700'>Address Book <Icon as={FaCheck} /> </FormLabel>
    <Input value={address} px='1' border='none' focusBorderColor='white' outline='none' outlineColor='none' onChange={(e) => setAddress(e.target.value)} />
  </FormControl>
</Box>



<Box className="">
<Text fontSize={['md', 'lg', 'xl']} mb={['10px']} fontWeight='900'>Contact Info</Text>
<Box  border='1px' px='3' pt='1' pb='15px' mb='10px'>
 
 <FormControl id="email" mt="4" >
   <FormLabel p='0' fontWeight='700'>Email Address *</FormLabel>
   <Input type="email" px='1' border='none' focusBorderColor='white' outline='none' outlineColor='none' value={email} readOnly onChange={(e) => setEmail(e.target.value)} />
 </FormControl>

</Box>

<Box  border='1px' px='3' pt='1' pb='15px'>
<FormControl id="phoneNumber" mt="4">
   <FormLabel fontWeight='700'>Phone Number *</FormLabel>
   <Input type="tel" px='1' border='none' focusBorderColor='white' outline='none' outlineColor='none' value={phoneNumber}  onChange={(e) => setPhoneNumber(e.target.value)} />
 </FormControl>
</Box>
</Box>


</Box>


<Box  mx="auto" mt="4">
<Text fontSize={['md', 'lg', 'xl']} mb={['10px']} fontWeight='900'>Payment Method</Text>
      
      <Box border='1px'  p="4">
        <form onSubmit={handleSubmit}>
          <FormControl mb="4">
            <FormLabel>Card Number</FormLabel>
            <Input
              type="text"
              placeholder="Enter card number"
              w={['70%']}
              value={paymentInfo.cardNumber}
              onChange={(e) => handleInputChange(e, 'cardNumber')}
            />
          </FormControl>
      
       <Box display={['block', 'flex']} alignItems='center' w='full' gap='10px'>
       <FormControl mb="4" display="inline-block" w={['100%', '40%']}>
            <FormLabel>Expiration Date</FormLabel>
            <Input
              type="text"
              placeholder="MM/YY"
              value={paymentInfo.expirationDate}
              onChange={(e) => handleInputChange(e, 'expirationDate')}
            />
          </FormControl>
          <FormControl mb="4" display="inline-block" w={['100%', '40%']}>
            <FormLabel>CVV</FormLabel>
            <Input
              type="text"
              placeholder="CVV"
              value={paymentInfo.cvv}
              onChange={(e) => handleInputChange(e, 'cvv')}
            />
          </FormControl>
          <Button type="submit" _hover={{bg: "#222"}}  fontSize={['sm']} px='20px' color='white' bg="black" mt="4" w={['100%', '20%']}>
            Pay Now
          </Button>
       </Box>
          <Text fontSize='sm' color='#222'>Your card details will be securely saved for swift payments, while rest assured, your CVV will not be stored.</Text>
        </form>
      </Box>
    </Box>

    </Box>


  <Box display="grid"   gridTemplateColumns="repeat(2, 1fr)" gap={2} w={['100%', '70%', '40%', '35%',]} mt={['2rem','3rem','4rem', '5rem']} border='1px' p='4' mx={['auto', 'auto', '0']}>
            <GridItem textTransform='capitalize' fontSize={['lg']} fontWeight='bold' colSpan={2}>Order Summary</GridItem>
            <Text>SubTotal</Text>
            <Text textAlign="right">${checkoutData?.subtotal}</Text>
            <Text>Tax (10%)</Text>
            <Text textAlign="right">${checkoutData?.tax}</Text>
            <Text>Total</Text>
            <Text textAlign="right">${checkoutData?.total}</Text>
            <GridItem colSpan={2} bg="black" color='white' py='1' textAlign='center'>
              <Button  bg='black'    mx='auto' w='full' fontSize='lg' _hover={{bg: "#222"}}  color='white'>Make Payment</Button>
            </GridItem>
          </Box>

</Box>
<Footer />
 </div>
  );
};

export default CheckoutPage;



