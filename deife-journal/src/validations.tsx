// validations.tsx

import * as Yup from "yup";

// const signsValidation = Yup.object().shape({
//     emailUsername: Yup.string()
//     .required("Required"),
//   password: Yup.string()
//     .required("Required")
//     .matches(
//       /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
//       "Password must contain at least 8 characters, one uppercase, one lowercase, one digit, and one special character"
//     ),
//   confirmPassword: Yup.string()
//     .required("Please confirm your password")
//     .test('passwords-match', 'Passwords must match', function (value) {
//       return this.parent.password === value;
//     }),
// });

// export default signsValidation;



export const signsValidation = Yup.object().shape({
  emailUsername: Yup.string().required('Email/Username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ),
});
