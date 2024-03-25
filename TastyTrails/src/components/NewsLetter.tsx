import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { burgerImg } from "../assets";

const NewsLetter = () => {
  return (
    <Box mt={['10rem']} py={10} color='white' zIndex="1" maxWidth='1340px' mx='auto' textAlign='center' pos='relative' display='flex' justifyContent='left' alignItems='center'>
      <Image src={burgerImg} boxSize={['200px', '480px']} pos='absolute' top='-100px' display={['none','none', 'block']} left={0} zIndex="2" />
      <Box zIndex="3" w={['full', 'full', '60%']} ml='auto' >
        <Text fontSize="xl" fontWeight="bold" mb="4">Subscribe To Our Newsletter</Text>
        <Text fontSize="md" w={['80%', '70%', '60%']} mx="auto" mb="8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus mauris sem sed urna venenatis vivamus.
          Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus.
        </Text>
        <Box p='2' bg='white' display='flex' w={['90%','90%','70%','60%']}  mx='auto' rounded="md" borderRadius='14px'>
          <Input placeholder="Type your email.." flex='3' p='2' outlineColor='white' color='black'/>
          <Button p='2' bg='orange.400' flex='1' ml="2" borderRadius='9px'>SUBSCRIBE</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
