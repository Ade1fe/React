import { InfoOutlineIcon, CheckCircleIcon } from '@chakra-ui/icons';
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
  VStack,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';


const Usage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p="4" maxW="600px" mx="auto">
      <Button onClick={onOpen} mb="4" colorScheme="teal">
        Usage Instructions
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Usage Instructions</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing={4}>
              <Text fontSize="lg"><strong>Usage:</strong></Text>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={InfoOutlineIcon} color="teal.500" />
                  Say "hi" or "hello" to greet the chatbot.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="teal.500" />
                  <Text as="span" fontWeight="bold">Example:</Text> You: hi
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoOutlineIcon} color="teal.500" />
                  Ask for movie recommendations by genre.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="teal.500" />
                  <Text as="span" fontWeight="bold">Example:</Text> You: recommend action movies
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoOutlineIcon} color="teal.500" />
                  Ask for movie recommendations by cast name.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="teal.500" />
                  <Text as="span" fontWeight="bold">Example:</Text> You: recommend movies by Leonardo DiCaprio
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoOutlineIcon} color="teal.500" />
                  Ask for top-rated movies.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="teal.500" />
                  <Text as="span" fontWeight="bold">Example:</Text> You: top movies
                </ListItem>
                <ListItem>
                  <ListIcon as={InfoOutlineIcon} color="teal.500" />
                  Ask for a list of available genres.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="teal.500" />
                  <Text as="span" fontWeight="bold">Example:</Text> You: list genres
                </ListItem>
              </List>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="teal">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Usage;
