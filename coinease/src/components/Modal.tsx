import { Button, Box, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

interface ModalProps {
    closeModal: () => void;
    action: (amount: string, accountNumber?: string, bankName?: string) => void;
    gridItemWidth: string; // New prop to pass grid item width
    itemType: string; // New prop to determine the type of grid item
}

const Modal: React.FC<ModalProps> = ({ closeModal, action, itemType }) => {
    const [amount, setAmount] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');

    const handleDigitClick = (digit: string) => {
        setAmount(prevAmount => prevAmount + digit);
    };

    const handleDeleteClick = () => {
        setAmount(prevAmount => prevAmount.slice(0, -1));
    };

    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            {itemType === "Send Money" && (
                <>
                    <Input
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        type="text"
                        placeholder="Enter account number"
                        mb={4}
                    />
                    <Input
                        value={bankName}
                        onChange={(e) => setBankName(e.target.value)}
                        type="text"
                        placeholder="Enter bank name"
                        mb={4}
                    />
                </>
            )}
            {itemType !== "Send Money" && (
                <Box display='flex' flexWrap='wrap' gap={4} mb={4} justifyContent='center' bg='transparent'>
                    {[...Array(10).keys()].map((digit) => (
                        <Button key={digit} _hover={{ bg: "gray.600" }} color="black" fontSize={['md', 'lg', "x-large"]} shadow='xl' boxSize='60px' mx='auto' bg='#081e2b' borderRadius='50%' onClick={() => handleDigitClick(digit.toString())}>
                            {digit}
                        </Button>
                    ))}
                    <Button mt='20px' bg="#081e2b" _hover={{ bg: "gray.600" }} w='150px' color='black' borderRadius='md' onClick={handleDeleteClick}>Delete</Button>
                </Box>
            )}
            <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                placeholder="Enter amount"
                mb={4}
            />
            <Button onClick={() => action(amount, accountNumber, bankName)}>Confirm</Button>
            <Button onClick={closeModal}>Cancel</Button>
        </Box>
    );
}

export default Modal;
