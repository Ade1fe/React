import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Grid } from '@chakra-ui/react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');
  const [activeInputField, setActiveInputField] = useState<string>('');

  const handleDigitClick = (digit: string) => {
    // Update cardNumber or pin based on the active input field
    if (activeInputField === 'cardNumber') {
      setCardNumber(prevCardNumber => prevCardNumber + digit);
    } else if (activeInputField === 'pin') {
      setPin(prevPin => prevPin + digit);
    }

    // Log the clicked digit
    console.log('Clicked Digit:', digit);
  };

  const handleDeleteClick = () => {
    // Delete last digit from cardNumber or pin based on the active input field
    if (activeInputField === 'cardNumber') {
      setCardNumber(prevCardNumber => prevCardNumber.slice(0, -1));
    } else if (activeInputField === 'pin') {
      setPin(prevPin => prevPin.slice(0, -1));
    }
  };

  const handleInputFocus = (inputId: string) => {
    // Set the active input field ID when it gains focus
    setActiveInputField(inputId);
    // Set focus to the input element
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login submission, you can perform validation here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Card Number:', cardNumber);
    console.log('PIN:', pin);
  };

  return (
    <Box maxW="400px" mx="auto" mt="50px" color='white'>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Card Number</FormLabel>
          <Input
            id="cardNumber"
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            onFocus={() => handleInputFocus('cardNumber')}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>PIN</FormLabel>
          <Input
            id="pin"
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            onFocus={() => handleInputFocus('pin')}
          />
        </FormControl>
        <Grid templateColumns="repeat(3, 1fr)" gap={2} mb={4}>
          {[...Array(10).keys()].map((digit) => (
            <Button key={digit} onClick={() => handleDigitClick(digit.toString())}>
              {digit}
            </Button>
          ))}
          <Button onClick={handleDeleteClick}>Delete</Button>
        </Grid>
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
