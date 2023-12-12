import {
    Button as ChakraButton,
    ButtonProps as CBProps,
  } from "@chakra-ui/react";
  
  interface ButtonProps extends CBProps {
    children: string;
    borderWidth?: string | number;
    borderColor?: string;
  }
  
  const CustomButton = (props: ButtonProps) => {
    const {
      bg,
      color,
      children,
      width,
      // type = "button",
      onClick,
      isLoading,
      loadingText,
      borderWidth,
      borderColor,
    } = props;

    
    return (
      <ChakraButton
        _hover={{
          opacity: 0.7,
        }}
        color={color}
        bg={bg}
        fontWeight="700"
        fontSize={["14px", "15px", "16px",]}
        borderRadius="10px"
        py="15px"
        width={width}
        h="40px"
        type="submit" 
        onClick={onClick}
        isLoading={isLoading}
        loadingText={loadingText}
        borderWidth={borderWidth}
        borderColor={borderColor}
      >
        {children}
      </ChakraButton>
    );
  };
  
  export default CustomButton;