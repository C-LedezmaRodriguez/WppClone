import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase.Config'; // Ajusta la ruta según tu configuración de Firebase

export const useMessages = (collectionName: string) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, collectionName));
      const fetchedMessages: any[] = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ id: doc.id, ...doc.data() });
      });
      setMessages(fetchedMessages);
    } catch (err) {
      console.error('Error al obtener los mensajes:', err);
      setError('Error al obtener los mensajes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages(); // Llamar al obtener los mensajes al montar el componente
  }, []);

  return { messages, loading, error };
};
