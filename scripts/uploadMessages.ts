import { collection, doc, setDoc, writeBatch } from 'firebase/firestore';
import { db } from '@/firebase.Config'; 
import messages from '@/data/messagesData';

const uploadMessages = async () => {
  try {
    const batch = writeBatch(db);

    messages.forEach((message) => {
      const messageRef = doc(collection(db, 'chats', message.messageId, 'messages')); 
        batch.set(messageRef, {
        senderId: message.senderId,
        text: message.text,
        timestamp: message.timestamp,
      });
    });

    await batch.commit(); 
    console.log('Mensajes subidos exitosamente');
  } catch (error) {
    console.error('Error al subir los mensajes: ', error);
  }
};

export default uploadMessages;
