
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const Usage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p="4" maxW="600px" mx="auto">
      <Button onClick={onOpen} mb="4">
         Usage Instructions
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Usage Instructions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb="2"><strong>Usage:</strong></Text>
            <Text mb="2">Say "hi" or "hello" to greet the chatbot.</Text>
            <Text mb="2"><strong>Example:</strong> You: hi</Text>

            <Text mb="2">Ask for movie recommendations by genre.</Text>
            <Text mb="2"><strong>Example:</strong> You: recommend action movies</Text>

            <Text mb="2">Ask for movie recommendations by cast name.</Text>
            <Text mb="2"><strong>Example:</strong> You: recommend movies by Leonardo DiCaprio</Text>

            <Text mb="2">Ask for top-rated movies.</Text>
            <Text mb="2"><strong>Example:</strong> You: top movies</Text>

            <Text mb="2">Ask for a list of available genres.</Text>
            <Text mb="2"><strong>Example:</strong> You: list genres</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Usage;
