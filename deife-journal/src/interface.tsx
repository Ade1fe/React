
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

  export interface forgotPassword {
    email: string;
   
  }

  export interface SignInResponse {
    userId: string;
    token: string;
  }

  export interface ResetPasswords{
   
    email: string;
    otp: string;
    password: string;
    confirmPassword: string;

  }

  export interface ProfileKeys{
    firstname: string,
    secondname: string,
    email: string,
    username: string,
  }

  export interface FileItem {
    title: string;
    content: string;
    folder?: string;
    index?: number;
  }