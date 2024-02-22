
import  { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface OverlayCompProps {
  children: ReactNode;
}

const OverlayComp = ({ children }: OverlayCompProps) => {
  return (
    <Box
      color='white'
   
      height='100vh'
      width='100vw'
      display='flex'
      justifyContent='center'
      alignItems='center'
     className='background'
      zIndex={999}  
      textAlign='center'

    >
      <Box width='100%'  className='comp-body'   height='100%' padding={5}>
        {children}
      </Box>
    </Box>
  );
};

export default OverlayComp;
