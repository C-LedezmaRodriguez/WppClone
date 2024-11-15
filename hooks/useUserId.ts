import { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { auth } from '@/firebase.Config'; 
const useUserId = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const authInstance = getAuth(auth);

    const unsubscribe = authInstance.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid); 
      } else {
        setUserId(null); 
      }
    });

    return unsubscribe;
  }, []);

  return userId;
};

export default useUserId;
