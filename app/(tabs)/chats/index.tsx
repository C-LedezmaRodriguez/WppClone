import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import useChats from '@/hooks/useChats';
import { ChatDetail } from '@/models/chats';
import Header from '@/components/HeaderChats';
import { AntDesign } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';


const ChatsScreen: React.FC = () => {

  const searchInputColor = useThemeColor({}, 'searchInput');
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const btnBackgroundFilterChat = useThemeColor({}, 'btnBackgroundFilterChat');
  const activeFilterColor = useThemeColor({}, 'buttonFilterTextChat'); 
  const filterButtonColor = useThemeColor({}, 'textBackgroundTabs');
  const textSearchColor = useThemeColor({}, 'textSearch');
  const buttonBackgroundTabsColor = useThemeColor({}, 'buttonBackgroundTabs')

  const userId = 'SObya8AzAYBgI98kdAcc';
  const chats: ChatDetail[] = useChats(userId);
  const [filteredChats, setFilteredChats] = useState<ChatDetail[]>(chats); 
  const [filter, setFilter] = useState<'all' | 'unread' | 'favorites' | 'groups' >('all'); 
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    applyFilter(filter);
  }, [filter, chats]);

  const applyFilter = (type: 'all' | 'unread' | 'favorites' | 'groups') => {
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
      style={[styles.chatContainer, { backgroundColor }]} 
      onPress={() => router.push(`/chats/${item.id}`)}
    >
      <View style={styles.chatDetails}>
        <Text style={[styles.sender, { color: textColor }]}>{item.name}</Text>
        <Text style={[styles.lastMessage, { color: textColor }]}>{item.messages?.[0]?.message || "No messages yet"}</Text>
        <Text style={[styles.timestamp, { color: textSearchColor }]}>
          {item.messages?.[0]?.createdAt 
            ? new Date(item.messages[0].createdAt).toLocaleTimeString() 
            : ""}
        </Text>
      </View>
    </TouchableOpacity> 
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Header />
      <Text style={[styles.title, { color: textColor }]}>Chats</Text>
      <TextInput
        style={[styles.searchInput, { backgroundColor: searchInputColor }]} 
        placeholder="Ask Meta AI or Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          onPress={() => applyFilter('all')} 
          style={[styles.btnFilter,
            { backgroundColor: filter === 'all' ? btnBackgroundFilterChat : buttonBackgroundTabsColor}
          ]}
        >
          <Text 
            style={[styles.filterText, {color: filter === 'all' ? activeFilterColor : filterButtonColor}]} 
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => applyFilter('unread')} 
          style={[styles.btnFilter,
            { backgroundColor: filter === 'unread' ? btnBackgroundFilterChat : buttonBackgroundTabsColor }
          ]}
        >
          <Text 
            style={[styles.filterText, {color: filter === 'unread' ? activeFilterColor : filterButtonColor}]}  
          >
            Unread
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => applyFilter('favorites')} 
          style={[styles.btnFilter,
            { backgroundColor: filter === 'favorites' ? btnBackgroundFilterChat : buttonBackgroundTabsColor }
          ]}
        >
          <Text 
            style={[styles.filterText, { color: filter === 'favorites' ? activeFilterColor:filterButtonColor }]}
          >
            Favorites
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => applyFilter('groups')} 
          style={[styles.btnFilter,
            { backgroundColor: filter === 'groups' ? btnBackgroundFilterChat : buttonBackgroundTabsColor}
          ]}
        >
          <Text 
            style={[styles.filterText, { color: filter === 'groups' ? activeFilterColor: filterButtonColor }]} 
          >
            Groups
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconContainer, { backgroundColor: buttonBackgroundTabsColor }]}>
          <AntDesign name="plus" size={20} color={filterButtonColor} />
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
  },
  title: {
    fontWeight: 'bold',
    margin: 10,
    fontSize: 25,
  },
  chatContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 0.2,
    alignItems: 'center',
  },
  chatDetails: {
    flexDirection: 'column',
  },
  sender: {
    fontWeight: 'bold',
  },
  lastMessage: {
    color: 'transparent', 
  },
  timestamp: {
    fontSize: 10,
    color: 'transparent', 
  },
  searchInput: {
    margin: 10,
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'transparent'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  btnFilter:{
    borderRadius: 20,
    paddingHorizontal:8,
  },
  filterText: {
    padding: 8,
    fontWeight:'600'
  },
  activeFilterText: {
    fontWeight: '600',
  },
  iconContainer: {
    paddingHorizontal: 6,
    borderRadius: 50,
    justifyContent: 'center'
  },
});

export default ChatsScreen;
