import  { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface OverlayCompProps {
  children: ReactNode;
}

const OverlayComp = ({ children }: OverlayCompProps) => {
  return (
    <Box
    color='white'
    position='relative'
      p={6}
      borderRadius="md"
      boxShadow="lg"
      bg="rgba(128,0,128,0.04)"
      border="1px solid rgba(81, 0, 135, 0.1)"
      style={{ backdropFilter: 'blur(10px)' }}
      w={['full', 'full', 'full', '99%']}
      padding={5}
      h="100vh"
      mx='auto'
      textAlign="center"
    >
      <div className="">{children}</div>
    </Box>
  );
};

export default OverlayComp;
