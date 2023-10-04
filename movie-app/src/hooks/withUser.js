import React from 'react';
import { useAuth } from '../hooks/useAuth'; // Adjust the import path if needed

const withUser = (WrappedComponent) => {
  return function WithUser(props) {
    const { currentUser } = useAuth(); // Use your custom authentication hook here

    // Pass the user information as a prop to the wrapped component
    return <WrappedComponent {...props} user={currentUser} />;
  };
};

export default withUser;
