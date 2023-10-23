import { Box, Text, Flex, Link, Icon } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={2}>
      <Flex justify="space-between" align="center" px={4}>
        <Text>&copy; 2023 Your Deife-Books</Text>
        <Flex>
          <Link href="https://twitter.com/yourtwitter" isExternal mx={2}>
            <Icon as={FaTwitter} boxSize={5} />
          </Link>
          <Link href="https://facebook.com/yourfacebook" isExternal mx={2}>
            <Icon as={FaFacebook} boxSize={5} />
          </Link>
          <Link href="https://instagram.com/yourinstagram" isExternal mx={2}>
            <Icon as={FaInstagram} boxSize={5} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
