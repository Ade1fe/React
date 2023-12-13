// validations.tsx

import * as Yup from "yup";


export const signsValidation = Yup.object().shape({
  emailUsername: Yup.string().required('Email/Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
   ,
});


export const signsUpValidation = Yup.object().shape({
  email: Yup.string().email('invalid email').required("Required"),
  username: Yup.string()
  .required("Required")
  .min(2, 'Too Short!')
  .max(17, 'Too Long!')
  .matches(
    /^[a-zA-Z0-9_]+$/,
    'Username can only contain letters, numbers, and underscores'
  ),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
      confirmPassword: Yup.string()
    .required("Please confirm your password")
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});



export const forgetPasswordValidation = Yup.object().shape({
  email: Yup.string().required('Email is required'),
 
});

