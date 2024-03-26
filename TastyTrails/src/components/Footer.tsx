import { Box, Text, Icon, Flex, Spacer, Stack, Image } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { logos } from "../assets";

const Footer = () => {
  return (
    <Box as="footer"  color="black" pt="8" mt={['4rem',]} mb={['60px','60px', '30px']}>
      <Box maxW="1340px" mx="auto" px="4">
        <Stack direction={['column', 'column', 'row']} spacing={['4', '4', '8', '12']} justify="space-between" align="flex-start">
          <Box flex="1" mb={['4', '4', '0']}>
            <Text fontWeight="bold" mb="2">About Company</Text>
            <Text fontSize={['sm', 'md']} fontWeight="500" color="gray.600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore possimus minus tempora nostrum rerum.</Text>
            <Flex mt="4" gap="2">
              <Icon boxSize="6" color="blue.300" as={FaFacebook} />
              <Icon boxSize="6" color="red.400" as={FaInstagram} />
              <Icon boxSize="6" color="blue.500" as={FaTwitter} />
            </Flex>
          </Box>
          <Box flex="1" mb={['4', '4', '0']}> 
          <Image src={logos} />
          </Box>
          <Box flex="1" mb={['4', '4', '0']}>
            <Text fontWeight="bold" mb="2">Contact Us</Text>
            <Flex direction="column" gap="2">
              <Flex align="center">
                <Icon p="2" borderRadius="50%" bg="blue.200" boxSize="8" as={FaPhoneAlt} />
                <Text ml="2" fontSize={['sm', 'md']} fontWeight="500">+1 (555) 123-4567</Text>
              </Flex>
              <Flex align="center">
                <Icon p="2" borderRadius="50%" bg="blue.200" boxSize="8" as={FaPhoneAlt} />
                <Text ml="2" fontSize={['sm', 'md']} fontWeight="500">info@example.com</Text>
              </Flex>
            </Flex>
          </Box>
        </Stack>
        <Flex mt="8" alignItems="center">
          <Spacer />
          <Text fontSize={['sm', 'md']} fontWeight="500">© 2024 Your Company. All rights reserved.</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
