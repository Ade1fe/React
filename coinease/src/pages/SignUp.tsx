import React, { useState, useEffect } from 'react';
import { Box, FormControl, FormLabel, Input, Select, Button, Image, Text } from '@chakra-ui/react';
import { logoimg, signupimg } from '../assets/imgs';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [gender, setGender] = useState('male');
  const [status, setStatus] = useState('single');
  const [work, setWork] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  useEffect(() => {
    console.log('Card Number:', cardNumber);
  }, [cardNumber]);

  const generateCardNumber = () => {
    const newCardNumber = Math.floor(10000000000 + Math.random() * 90000000000);
    setCardNumber(newCardNumber.toString());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    generateCardNumber();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Deposit Amount:', depositAmount);
    console.log('Gender:', gender);
    console.log('Status:', status);
    console.log('Work:', work);
  };

  return (
    <Box className="texts" display={['block', 'flex']} mx='auto' maxW={'1340px'} px='20px' gap='4' pos='relative'>
      <Box className=""  w={["100%", "35%", "40%"]} pos='relative'>
        <Box className="" pos='absolute' top="0" left="0" bg='rgba(0, 0, 0, 0.3)' w="full" h='100%'></Box>
        <Image src={signupimg} w='full' h='full' objectFit='cover' />
      </Box>
      <Box borderRadius="md" boxShadow="md" color='white' w={["100%", "100%", "60%"]} mt={['0', '6rem']}>
        <Box display='flex' alignItems='center' gap='1' pos={['static', 'absolute']} top='20px' mt={['2rem', '0']} mb={['1rem', 0]} right='40px'>
          <Image boxSize='50px' src={logoimg} alt="Logo" />
          <Text ml='-10px' className='logo' fontSize={['lg', 'x-large']}>COINEASE Bank</Text>
        </Box>
        <Text fontSize={['lg', 'x-large', 'xx-large']} mb='2rem' className="subtitles">Create an account</Text>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" border='none'  bg="#030b10"  value={name} onChange={(e) => setName(e.target.value)} />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" border='none'  bg="#030b10"  value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" border='none'  bg="#030b10"  value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <FormControl id="depositAmount" mb={4} >
            <FormLabel>Deposit Amount</FormLabel>
            <Input type="number" border='none'  bg="#030b10"  value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
          </FormControl>
          <FormControl id="gender" mb={4}>
            <FormLabel>Gender</FormLabel>
            <Select value={gender}  border='none'  bg="#030b10"  onChange={(e) => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>
          <FormControl id="status" mb={4}>
            <FormLabel>Status</FormLabel>
            <Select value={status}  border='none'  bg="#030b10"  onChange={(e) => setStatus(e.target.value)}>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </Select>
          </FormControl>
          <FormControl id="work" mb={4}>
            <FormLabel>Work</FormLabel>
            <Input type="text"  border='none'  bg="#030b10"  value={work} onChange={(e) => setWork(e.target.value)} />
          </FormControl>
          <Button type="submit"  border='none' w='200px'  bg="blue.900"  colorScheme="blue">Sign Up</Button>
        </form>
       <Box className="" mt='2rem' pb='2rem' textAlign='center'> <Link to='/sign-in' className="">Already have an account? sign in</Link></Box>
      </Box>
    
    </Box>
  );
};

export default SignUp;
