// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function IndexScreen() {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//       router.replace('/tabs' as any); // Redirecciona a la pantalla de chats en las tabs
//     }, 3000); // Simula un tiempo de carga de 3 segundos

//     return () => clearTimeout(timer); // Limpia el temporizador al desmontar
//   }, [router]);

//   return (
//     <View style={styles.loadingContainer}>
//       {loading ? <Text style={styles.loadingText}>Loading...</Text> : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import uploadMessages from '../scripts/uploadMessages'; 

export default function IndexScreen() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadMessagesAndRedirect = async () => {
      try {
        await uploadMessages(); 
      } catch (error) {
        console.error('Error al cargar los mensajes:', error);
      } finally {
        setLoading(false);
        router.replace('/tabs' as any); 
      }
    };

    const timer = setTimeout(() => {
      loadMessagesAndRedirect(); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <View style={styles.loadingContainer}>
      {loading ? <Text style={styles.loadingText}>Loading...</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});