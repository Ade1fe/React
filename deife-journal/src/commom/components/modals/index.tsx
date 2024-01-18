import React, { ReactNode } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text } from '@chakra-ui/react';

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  errorMessage: ReactNode; 
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onClose, errorMessage }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent textAlign='center' bg='white'>
        <ModalHeader color='red.600'>Error</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{errorMessage}</Text>
          <Text fontWeight='700'> You may need to refresh</Text>
        </ModalBody>
        <ModalFooter>
          <Text colorScheme="purple" onClick={onClose}>
            
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ErrorModal;
