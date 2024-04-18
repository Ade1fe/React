
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore } from '../firebase'; 
import { User } from 'firebase/auth';

const useBalance = () => {
  const [balance, setBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    console.log("unscribe", unsubscribe);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      if (currentUser) {
        try {
          const userDocRef = doc(firestore, 'coinbaseusers', currentUser.uid);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            if (userData && userData.depositAmount) {
              setBalance(userData.depositAmount);
            } else {
              console.error('Deposit amount not found in user document');
            }
          } else {
            console.error('User document not found');
          }
        } catch (error) {
          console.error('Error fetching balance:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchBalance();
  }, [currentUser]);

  return { balance, isLoading };
};

export default useBalance;
