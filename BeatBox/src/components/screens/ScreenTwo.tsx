
import { Box, Icon, Image, Text } from '@chakra-ui/react';
import { CustomButton, OverLayComp } from '..';
import { playbtn } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ScreenTwo = () => {
  const navigate = useNavigate();

  return (
    <OverLayComp>
      <Image src={playbtn} boxSize={20} mt='10' mx='auto' className='slide-in-left' />
      <Box  px={4}  display="flex" h='25vh' position='absolute' w='full' left='0' bottom='30px' flexDirection='column' justifyContent='space-evenly'>
        <Text className='slide-in-right' fontFamily='Kode Mono, monospace' fontWeight='bold' fontSize={['x-large', 'xx-large', 'xxx-large']}>
          Artists
        </Text>
        <Text className='slide-in-left' fontFamily='Kanit, sans-serif' fontWeight='400' fontSize={['lg', 'x-large', 'xx-large']}>
          Discover and connect with talented musicians near you.
        </Text>
        <CustomButton
          width="100px"
          padding="10px"
          buttonColor="purple.300"
          borderColor="Purple.500"
          bgColor=""
          ml='auto'
          onClick={() => navigate('/screen-three')}
          hoverBgColor="purple.500"
          transition='all .2s ease-in-out'
          mr='10px'
          className='slide-in-right'
        >
          <Icon as={FaLongArrowAltRight} boxSize={[6, 7, 8, 9]} />
        </CustomButton>
      </Box>
    </OverLayComp>
  );
}

export default ScreenTwo;
