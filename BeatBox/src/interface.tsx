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
    fontSize?: string[];
    placeholder?: string;
    backgroundcolor?: string;
    icon?: JSX.Element; 
  }