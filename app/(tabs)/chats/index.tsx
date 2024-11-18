// import { View, Text, FlatList, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import useChats from '@/hooks/useChats';

// interface Chat {
//   id: string;
//   senderId: string;
//   lastMessage: string;
//   timestamp: number;
// }

// const ChatsScreen: React.FC = () => {
//   const chats = useChats();

//   const renderItem = ({ item }: { item: Chat }) => (
//     <TouchableOpacity style={styles.chatContainer}>
//       <MaterialIcons name="person" size={24} color="black" style={styles.icon} />
//       <View style={styles.chatDetails}>
//         <Text style={styles.sender}>{item.senderId}</Text>
//         <Text style={styles.lastMessage}>{item.lastMessage}</Text>
//         <Text style={styles.timestamp}>
//           {new Date(item.timestamp).toLocaleTimeString()}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={chats}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   chatContainer: {
//     flexDirection: 'row',
//     padding: 20,
//     borderBottomWidth: 2,
//     borderBottomColor: '#ccc',
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
//   icon: {
//     marginRight: 10,
//   },
//   chatDetails: {
//     flexDirection: 'column',
//   },
//   sender: {
//     fontWeight: 'bold',
//   },
//   lastMessage: {
//     color: 'gray',
//   },
//   timestamp: {
//     fontSize: 10,
//     color: 'lightgray',
//   },
// });

// export default ChatsScreen;

import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import useChats from '@/hooks/useChats';
import { ChatDetail } from '@/models/chats';
import Header from '@/components/HeaderChats';

const ChatsScreen: React.FC = () => {
  const userId = 'SObya8AzAYBgI98kdAcc';
  const chats: ChatDetail[] = useChats(userId);
  const [filteredChats, setFilteredChats] = useState<ChatDetail[]>(chats); 
  const [filter, setFilter] = useState<'all' | 'unread' | 'favorites' | 'groups'>('all'); 
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    applyFilter(filter);
  }, [filter, chats]);

  const applyFilter = (type: 'all' | 'unread' | 'favorites' |'groups') => {
    setFilter(type);
    if (type === 'unread') {
      setFilteredChats(chats.filter(chat => chat.messages?.length === 0));
    } else if (type === 'groups') {
      setFilteredChats(chats.filter(chat => chat.name.includes('Group')));
    } else if (type === 'favorites') {
      setFilteredChats(chats.filter(chat => chat.name.includes('Favorites'))); 
    } else {
      setFilteredChats(chats);
    }
  };

  const renderItem = ({ item }: { item: ChatDetail }) => (
    <TouchableOpacity
      style={styles.chatContainer}
      onPress={() => router.push(`/chats/${item.id}`)}
    >
      <View style={styles.chatDetails}>
        <Text style={styles.sender}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.messages?.[0]?.message || "No messages yet"}</Text>
        <Text style={styles.timestamp}>
          {item.messages?.[0]?.createdAt 
            ? new Date(item.messages[0].createdAt).toLocaleTimeString() 
            : ""}
        </Text>
      </View>
    </TouchableOpacity> 
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.title} >Chats</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Ask Meta AI or Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => applyFilter('all')} style={filter === 'all' ? styles.activeFilterButton : styles.filterButton}>
          <Text style={[styles.filterText, filter === 'all' && styles.activeFilterText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => applyFilter('unread')} style={filter === 'unread' ? styles.activeFilterButton : styles.filterButton}>
          <Text style={[styles.filterText, filter === 'unread' && styles.activeFilterText]}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => applyFilter('favorites')} style={filter === 'favorites' ? styles.activeFilterButton : styles.filterButton}>
          <Text style={[styles.filterText, filter === 'favorites' && styles.activeFilterText]}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => applyFilter('groups')} style={filter === 'groups' ? styles.activeFilterButton : styles.filterButton}>
          <Text style={[styles.filterText, filter === 'groups' && styles.activeFilterText]}>Groups</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  title:{
    fontWeight: 'bold',
    margin: 10,
    fontSize: 25,
  },
  chatContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  chatDetails: {
    flexDirection: 'column',
  },
  sender: {
    fontWeight: 'bold',
  },
  lastMessage: {
    color: 'gray',
  },
  timestamp: {
    fontSize: 10,
    color: 'lightgray',
  },
  searchInput: {
    margin: 10,
    padding: 8,
    borderColor: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor:'#f5f5f5'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  filterButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor:'#f5f5f5',
  },
  activeFilterButton: {
    // paddingLeft:10,
    // paddingRight:10,
    padding:10,
    borderRadius: 20,
    backgroundColor: '#8fbc8f',
  },
  filterText: {
    color: 'lightgray',
  },
  activeFilterText: {
    color:'#075E54',
    fontWeight: 'bold',
  },
});

export default ChatsScreen;
