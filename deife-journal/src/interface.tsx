
// import { BoxProps, ResponsiveValue ,ButtonProps as CBProps,} from "@chakra-ui/react";


export interface InputProps {
    label: string;
    name: string;
    value: string;
    color: string | undefined; 
    type?: string;
    error: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.SyntheticEvent) => void;
    isDisabled?: boolean; 
    width?: string[];
    fontWeight?: string;
    errorColor?: string;
    touched?: boolean;
  }


  export interface FormValues {
    emailUsername: string;
    password: string;
  }

  export interface signupValues {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }