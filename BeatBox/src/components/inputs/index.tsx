


import { useState } from "react";
import { Flex, Input as ChakraInput, Text, IconButton, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { InputProps } from "../../interface";

const Input = (props: InputProps) => {
  const {  name, value, error, onChange, onBlur, type, isDisabled, width, errorColor, fontSize, placeholder, backgroundcolor, icon } = props;
  
  const isPassword = type === 'password'; 

  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex direction="column" p='2px' gap="4px" w={width} overflow='hidden'>
      <InputGroup>
        {icon && (
          <InputLeftElement mt={3} ml={3} pointerEvents="none" color="white" fontSize="1.2em">
            {icon}
          </InputLeftElement>
        )}
        <ChakraInput
          name={name}
          value={value}
          onChange={onChange}
          color={'black.100'}
          w='full'
          onBlur={onBlur}
          fontSize={fontSize}
          borderRadius="10px"
          placeholder={placeholder}
          h="50px"
          pr='5'
          pl={10}
          shadow='base'
          focusBorderColor="transparent"
          borderColor="transparent"
          backgroundColor={backgroundcolor}
          border={error ? "1px solid #f00" : "none"}
          type={isPassword ? (showPassword ? "text" : "password") : type} 
          disabled={isDisabled}
          _focus={{
            borderColor: "transparent",
            boxShadow: "none",
            outline: "none",
          }}
        />
        {isPassword && ( 
          <InputRightElement border='0' mt='15px' mr='10px'>
            <IconButton
              aria-label={showPassword ? "Hide password" : "Show password"}
              icon={showPassword ? <FaEyeSlash /> : <FaEye />} 
              onClick={togglePasswordVisibility}
              variant="ghost"
              color="gray.500"
              border='0'
              _hover={{ border: '0px' }}
              _active={{ border: '0px' }}
            />
          </InputRightElement>
        )}
      </InputGroup>
      {/* {label && (
        <Text color={color} fontSize="14px" textAlign="left" fontWeight={fontWeight}>
          {label}
        </Text>
      )} */}
      {error && (
        <Text color={errorColor} fontSize="10px">
          {error}
        </Text>
      )}
    </Flex>
  );
};

export default Input;
