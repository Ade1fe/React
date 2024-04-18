

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, firestore, onAuthStateChanged } from '../firebase';

const useBalance = () => {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const uid = user.uid;
          const userDocRef = doc(firestore, 'coinbaseusers', uid);
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
        }
      } else {
        console.error('No user signed in');
      }
    });

    return unsubscribe;
  }, []);

  return balance;
};

export default useBalance;
