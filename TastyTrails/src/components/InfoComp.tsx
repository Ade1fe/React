import { Box, Icon, Text } from "@chakra-ui/react"
import { AiOutlineClockCircle } from "react-icons/ai"
import { FiMapPin, FiPhone } from "react-icons/fi"


const InfoComp = () => {
  return (
    <Box className="subtitle" textAlign='center' display='flex' flexWrap='wrap' gap={[5,8,12,14,16]} justifyContent='center' maxWidth='1340px' mx='auto' mt={['3rem']}>
        <Box className="" p={9}>
            <Icon as={AiOutlineClockCircle} color='white' bg='orange.400' p='3' borderRadius='50%' boxSize={[10]}  />
            <Text fontWeight='600' fontSize={['md', 'lg']}>Today 10:00am - 10:00pm</Text>
            <Text fontSize={['xs', 'sm']}>Working time</Text>
        </Box>

        <Box className="" px={16}  py={9} borderLeftWidth='1px' borderRightWidth='1px'>
        <Icon as={FiMapPin} color='white' bg='orange.400' p='3' borderRadius='50%' boxSize={[10]} />
            <Text fontWeight='600' fontSize={['md', 'lg']}>Washington, D.C., DC,USA</Text>
            <Text fontSize={['xs', 'sm']}>Our Location</Text>
        </Box>
      
      <Box className=""  p={9}>
      <Icon as={FiPhone} color='white' bg='orange.400' p='3' borderRadius='50%' boxSize={[10]}  />
        <Text fontWeight='600' fontSize={['md', 'lg']}>+0123 456 7891</Text>
        <Text  fontSize={['xs', 'sm']}>Phone Number</Text>
      </Box>
    </Box>
  )
}

export default InfoComp
