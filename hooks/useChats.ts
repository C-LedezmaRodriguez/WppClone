// import { useEffect, useState } from 'react';
// import { db } from '@/firebase.Config'; 
// import { collection, onSnapshot } from 'firebase/firestore';

// const useChats = () => {
//   const [chats, setChats] = useState<any[]>([]);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, 'chats'), (snapshot) => {
//       const chatsData: any[] = [];
//       snapshot.forEach((doc) => {
//         chatsData.push({ id: doc.id, ...doc.data() });
//       });
//       setChats(chatsData);
//     });

//     return () => unsubscribe();
//   }, []);

//   return chats;
// };

// export default useChats;
import { useState, useEffect} from 'react';
import { collection, query, where, onSnapshot, doc } from 'firebase/firestore';
import { db } from '@/firebase.Config';
import { ChatDetail } from '@/models/chats';

const useChats = (userId: string) => {
  const [chats, setChats] = useState<ChatDetail[]>([]); 

  useEffect(() => {
    const chatsRef = collection(db, 'chats');
    const myChatRef = doc(chatsRef, userId);
    // const q = (myChatRef, where('userId', '==', userId)); 
    const q = collection(myChatRef, 'chats')
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedChats: ChatDetail[] = [];
      snapshot.forEach((doc) => {
        const chatData = doc.data();
        fetchedChats.push({
          id: doc.id, 
          name: chatData.name,
          lastName: chatData.lastName, 
          type: chatData.type,
          messages: chatData.messages || [],
        });
        console.log(chatData)
      });
      setChats(fetchedChats); 
    });

    return unsubscribe; 
  }, [userId]);

  return chats; 
};

export default useChats;
