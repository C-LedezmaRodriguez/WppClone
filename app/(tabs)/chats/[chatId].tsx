import React, { FC, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { auth } from '@/firebase.Config';
import { onAuthStateChanged } from 'firebase/auth';
import { sendMessage, getMessages } from '@/firebase/fbmessages';

import TextApp from '@/components/TextApp';
import TextInputApp from "@/components/TextInputApp";

import { Message } from '@/models/chats';
import { widthSizes } from '@/constants/Sizes';

const ChatScreen: FC = () => {
  const { chatId } = useLocalSearchParams();
  const [messages, setMessages] = useState<Message[]>([]); // Usando la interfaz Message
  const [newMessage, setNewMessage] = useState('');
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      if (userId) {
        try {
          setLoading(true);
          const chatMessages = await getMessages(userId, chatId as string);
          setMessages(chatMessages);
        } catch (error) {
          console.error('Error al obtener mensajes:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchMessages();
  }, [chatId, userId]);

  const handleSendMessage = async () => {
    if (newMessage.trim() && userId) {
      await sendMessage(userId, chatId as string, newMessage);
      setNewMessage('');
    }
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <View style={styles.message}>
      <TextApp text={item.message} />
      <TextApp text={new Date(item.createdAt).toLocaleTimeString()} />{' '}
      {/* Convertir el timestamp a una fecha legible */}
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <TextApp text={'Cargando mensajes...'} />
      ) : (
        <FlatList
          data={messages}
          keyExtractor={(item) => item.createdAt.toString()} // Usar el timestamp como clave
          renderItem={renderMessage}
          inverted // Invierte la lista para mostrar el último mensaje en la parte inferior
        />
      )}
      <TextInputApp
        value={newMessage}
        onChangeText={setNewMessage}
        placeholder="Escribe un mensaje..."
        style={styles.input}
      />
      <Button title="Enviar" onPress={handleSendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    padding: widthSizes[10],
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: widthSizes[10],
    margin: widthSizes[10],
  },
});

export default ChatScreen;
