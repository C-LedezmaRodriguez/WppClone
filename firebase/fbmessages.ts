// import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
// import { db } from '@/firebase.Config'; 

// export const sendMessage = async (chatId: string, senderId: string, text: string) => {
//   try {
//     const message = {
//       senderId,
//       text,
//       timestamp: Date.now(),
//     };   
   
//     await addDoc(collection(db, 'chats', chatId, 'messages'), message);
//     console.log('Mensaje enviado:', message);
//   } catch (error) {
//     console.error('Error al enviar mensaje:', error);
//     throw error;
//   }
// };

// export const getMessages = async (chatId: string) => {
//   try {
//     const messagesQuery = query(collection(db, 'chats', chatId, 'messages'));
//     const querySnapshot = await getDocs(messagesQuery);
    
//     const messages = querySnapshot.docs.map(doc => doc.data());
//     return messages;
//   } catch (error) {
//     console.error('Error al obtener mensajes:', error);
//     throw error;
//   }
// };
import { collection, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase.Config'; 

// Función para enviar un mensaje
export const sendMessage = async (userId: string, chatId: string, text: string) => {
  try {
    const message = {
      message: text,
      createdAt: Date.now(), // Timestamp
    };

    const chatDocRef = doc(db, 'chats', userId);

    const userChatDoc = await getDoc(chatDocRef);

    if (userChatDoc.exists()) {
      
      const userChats = userChatDoc.data().chats;
      const updatedChat = {
        ...userChats[chatId],
        messages: [...userChats[chatId].messages, message],
      };


      await updateDoc(chatDocRef, {
        [`chats.${chatId}`]: updatedChat,
      });

      console.log('Mensaje enviado:', message);
    } else {
      console.error('No se encontró el documento del usuario.');
    }
  } catch (error) {
    console.error('Error al enviar mensaje:', error);
    throw error;
  }
};

// Función para obtener los mensajes de un chat
export const getMessages = async (userId: string, chatId: string) => {
  try {
    // Referencia al documento del usuario en chats
    const chatDocRef = doc(db, 'chats', userId);

    // Obtén el documento actual del usuario
    const userChatDoc = await getDoc(chatDocRef);

    if (userChatDoc.exists()) {
      // Accede al chat específico dentro del documento del usuario
      const userChats = userChatDoc.data().chats;
      const chatMessages = userChats[chatId]?.messages || [];

      return chatMessages;
    } else {
      console.error('No se encontró el documento del usuario.');
      return [];
    }
  } catch (error) {
    console.error('Error al obtener mensajes:', error);
    throw error;
  }
};
