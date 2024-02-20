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
      // p={6}
      // borderRadius="md"
      // boxShadow="lg"
      // bg="rgba(128,0,128,0.04)"
      // bg='red.400'
      // border="1px solid rgba(81, 0, 135, 0.1)"
      // style={{ backdropFilter: 'blur(10px)' }}
      w={['100vw', '100vw', '100vw', '99vw']}
      padding={5}
      h={["80vh", '85vh', "90vh", "100vh"]}
      m='auto'
      textAlign="center"
    >
      <div className="">{children}</div>
    </Box>
  );
};

export default OverlayComp;
