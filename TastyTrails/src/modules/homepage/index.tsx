

import { Box } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';
import { Navbar, HeroOne, InfoComp, PopularMenu, Services, NewsLetter, Footer } from '../../components';
import { useEffect, useState } from 'react';

const Homepage = () => {
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsAuthenticated(!!user); // Update isAuthenticated state based on user authentication
    });

    return () => unsubscribe(); 
  }, [auth]);
  
  return (
    <div>
      <Box className='text-fonts'>
        <Box px="20px">
        <Navbar isAuthenticated={isAuthenticated} /> 
        </Box>
        <Box px="20px">
          <HeroOne />
        </Box>
        <Box>
          <InfoComp />
        </Box>
        <Box px="20px" mt={['6rem']}>
          {/* Render other components */}
          <PopularMenu />
        </Box>
        <Box px="20px">
          <Services />
        </Box>
        <Box className="" bg='black' mb={['9rem']}>
          <NewsLetter />
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default Homepage;
