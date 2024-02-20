import React from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface CustomButtonProps extends ButtonProps {
  // Define custom props for the button
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  buttonColor?: string;
  borderColor?: string;
  isLoading?: boolean;
  hoverBgColor?: string;
  bgColor?: string;
  ml?: string;
  mr?: string;
  mt?:  string;
  mb?: string;
  onClick?: () => void; 
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  width,
  height,
  padding,
  buttonColor,
  borderColor,
  isLoading,
  hoverBgColor,
  bgColor,
  ml,
  mb,
  mt,
  mr,
  onClick,
  ...rest
}) => {
  return (
    <Button
      width={width}
      height={height}
      padding={padding}
      color={buttonColor}
      bg={bgColor}
      borderColor={borderColor}
      isLoading={isLoading}
      mb={mb}
      mt={mt}
      ml={ml}
      mr={mr}
      _hover={{ bg: hoverBgColor }}
      onClick={onClick} 
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
