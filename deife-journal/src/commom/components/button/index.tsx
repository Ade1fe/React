import {
    Button as ChakraButton,
    ButtonProps as CBProps,
  } from "@chakra-ui/react";
  
  interface ButtonProps extends CBProps {
    children: string;
    borderWidth?: string | number;
    borderColor?: string;
  }
  
  const CusttomButton = (props: ButtonProps) => {
    const {
      bg,
      color,
      children,
      width = ["150px", null, "357px"],
      // type = "button",
      // onClick,
      isLoading,
      loadingText,
      borderWidth,
      borderColor,
    } = props;

    const { onClick } = props;
  

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log('Button clicked');
      if (onClick) {
        onClick(event);
      }
    };
    return (
      <ChakraButton
        _hover={{
          opacity: 0.7,
        }}
        color={color}
        bg={bg}
        fontWeight="700"
        fontSize={["14px", "15px", "16px",]}
        borderRadius="30px"
        py="15px"
        width={width}
        h="50px"
        type="submit" 
        onClick={handleButtonClick}
        isLoading={isLoading}
        loadingText={loadingText}
        borderWidth={borderWidth}
        borderColor={borderColor}
      >
        {children}
      </ChakraButton>
    );
  };
  
  export default CusttomButton;