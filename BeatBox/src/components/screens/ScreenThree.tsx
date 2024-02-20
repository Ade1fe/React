
import { Box, Icon, Image, Text } from '@chakra-ui/react';
import { CustomButton, OverLayComp } from '..';
import { playbtn } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

const ScreenTwo = () => {
  const navigate = useNavigate();

  return (
    <OverLayComp>
      <Image src={playbtn} boxSize={20} mx='auto' className='slide-in-right' />
      <Box px={4} display="flex" position='absolute' w='full' left='0' bottom='30px' flexDirection='column' justifyContent='space-evenly'>
        <Text className='slide-in-left' fontFamily='Kode Mono, monospace' fontWeight='bold' fontSize={['x-large', 'xx-large', 'xxx-large']}>
          Identify
        </Text>
        <Text className='slide-in-right' fontFamily='Kanit, sans-serif' fontWeight='400' fontSize={['lg', 'x-large', 'xx-large']}>
        Discover lyrics and information about the media playing in your surroundings.
        </Text>
        <CustomButton
          width="100px"
          padding="10px"
          buttonColor="purple.300"
          borderColor="Purple.500"
          bgColor=""
          ml='auto'
          onClick={() => navigate('/auth/signup')}
          hoverBgColor="purple.500"
          transition='all .2s ease-in-out'
          mr='10px'
          className='slide-in-left'
        >
          <Icon as={FaLongArrowAltRight} boxSize={[6, 7, 8, 9]} />
        </CustomButton>
      </Box>
    </OverLayComp>
  );
}

export default ScreenTwo;
