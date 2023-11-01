import React, { ReactNode } from 'react';
import { Footer, Navbar } from '../assets';
import { Box } from '@chakra-ui/react';

interface MainlayoutProps {
  children: ReactNode;
}

const Mainlayout: React.FC<MainlayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Box mt={12} className="">{children}</Box>
      <Footer />
    </div>
  );
}

export default Mainlayout;
