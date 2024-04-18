

// import React, { useEffect, useState } from 'react';
// import { Box, Button, Icon, Image, Text } from '@chakra-ui/react';
// import { MdOutlineTouchApp } from "react-icons/md";
// import { cardimg, masetro, mastar, plus, visa } from '../assets/imgs';
// import { useNavigate } from 'react-router-dom';
// import { auth } from '../firebase';

// const Hero = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       setIsLoggedIn(!!user);
//     });
//     return unsubscribe;
//   }, []);

//   const goToNextPage = () => {
//     if (isLoggedIn) {
//       navigate("/home-page");
//     } else {
//       navigate("/sign-up");
//     }
//   };

//   return (
//     <Box pb='20px'>
//       <Box display={['block', 'block', 'flex']} mt={['2rem', '2.5rem' , '3rem']} maxW={['1100px']} justifyContent='space-between' gap='3' mx='auto' alignItems='center'>
//         <Box w={['100%', '100%', '50%']}>
//           <Text fontSize={['md','lg','x-large', 'xx-large']} className="subtitles " mb={'1'}>Welcome to </Text>
//           <Text fontSize={[ 'lg', 'x-large', 'xx-large', 'xxx-large']} mb={8} className="logo">
//             COINEASE Bank
//           </Text>
//           <Text className="" fontSize={[ 'md','lg', 'x-large']} mb='2'>
//             Please insert your card
//           </Text>
//           <Box display='flex' alignItems='center' gap='2' className="subtitles " mb={8}>
//             <Image src={masetro} w='80px' />
//             <Image src={plus} w='80px' />
//             <Image src={mastar} w='80px' />
//             <Image src={visa} w='60px' />
//           </Box>
//           {!isLoggedIn && <Button className="" onClick={goToNextPage}>Cardless Withdrawal</Button>}
//         </Box>
//         <Image w={['100%', '100%', '50%']} onClick={goToNextPage} cursor='pointer' src={cardimg} />
//       </Box>
//       <Text mt={['4rem', '5rem',  '7rem', "10rem"]} fontSize={["sm", 'md',]} className="subtitles "cursor='pointer' onClick={goToNextPage}>
//         <Icon as={MdOutlineTouchApp} boxSize={8} /> For your convenience, this ATM features a touch screen interface. Simply follow the instructions on the screen and tap pn the card to continue.
//       </Text>
//     </Box>
//   );
// };

// export default Hero;































// Hero.tsx
import React, { useEffect, useState } from 'react';
import { Box, Button, Icon, Image, Text } from '@chakra-ui/react';
import { MdOutlineTouchApp } from "react-icons/md";
import { cardimg, masetro, mastar, plus, visa } from '../assets/imgs';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Hero = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoggedIn(!!user);
    });
    return unsubscribe;
  }, []);

  const goToNextPage = () => {
    if (isLoggedIn) {
      navigate("/home-page");
    } else {
      navigate("/sign-up");
    }
  };

  return (
    <Box pb='20px'>
      <Box display={['block', 'block', 'flex']} mt={['2rem', '2.5rem' , '3rem']} maxW={['1100px']} justifyContent='space-between' gap='3' mx='auto' alignItems='center'>
        <Box w={['100%', '100%', '50%']}>
          <Text fontSize={['md','lg','x-large', 'xx-large']} className="subtitles " mb={'1'}>Welcome to </Text>
          <Text fontSize={[ 'lg', 'x-large', 'xx-large', 'xxx-large']} mb={8} className="logo">
            COINEASE Bank
          </Text>
          <Text className="" fontSize={[ 'md','lg', 'x-large']} mb='2'>
            Please insert your card
          </Text>
          <Box display='flex' alignItems='center' gap='2' className="subtitles " mb={8}>
            <Image src={masetro} w='80px' />
            <Image src={plus} w='80px' />
            <Image src={mastar} w='80px' />
            <Image src={visa} w='60px' />
          </Box>
          {!isLoggedIn && <Button className="" onClick={goToNextPage}>Cardless Withdrawal</Button>}
        </Box>
        <Image w={['100%', '100%', '50%']} onClick={goToNextPage} cursor='pointer' src={cardimg} />
      </Box>
      <Text mt={['4rem', '5rem',  '7rem', "10rem"]} fontSize={["sm", 'md',]} className="subtitles "cursor='pointer' onClick={goToNextPage}>
        <Icon as={MdOutlineTouchApp} boxSize={8} /> For your convenience, this ATM features a touch screen interface. Simply follow the instructions on the screen and tap pn the card to continue.
      </Text>
    </Box>
  );
};

export default Hero;
