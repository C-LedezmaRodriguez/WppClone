// import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// const SettingsScreen: React.FC = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <Text>Ajustes</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     backgroundColor: 'white',
//   },
//   content: {
//     flex: 1,
//     padding: 30,
//     borderBottomWidth: 2,
//     borderBottomColor: '#ccc',
//     justifyContent: 'center',
//   },
// });

// export default SettingsScreen;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SettingsOption = {
  id: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
};

const settingsOptions: SettingsOption[] = [
  { id: '1', label: 'Lists', icon: 'albums' },
  { id: '2', label: 'Broadcast messages', icon: 'megaphone' },
  { id: '3', label: 'Starred messages', icon: 'star' },
  { id: '4', label: 'Link devices', icon: 'link' },
];

const SettingsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {settingsOptions.map((option) => (
        <TouchableOpacity key={option.id} style={styles.option}>
          <Ionicons name={option.icon} size={24} color="#075E54" style={styles.icon} />
          <Text style={styles.label}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  icon: {
    marginRight: 16,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
});

export default SettingsScreen;
