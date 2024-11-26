import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import useChats from '@/hooks/useChats';
import { ChatDetail } from '@/models/chats';
import Header from '@/components/HeaderChats';
import { AntDesign } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { widthSizes, heightSizes } from '@/constants/Sizes';

const ChatsScreen: React.FC = () => {
  const searchInputColor = useThemeColor({}, 'searchInput');
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const btnBackgroundFilterChat = useThemeColor({}, 'btnBackgroundFilterChat');
  const activeFilterColor = useThemeColor({}, 'buttonFilterTextChat'); 
  const filterButtonColor = useThemeColor({}, 'textBackgroundTabs');
  const textSearchColor = useThemeColor({}, 'textSearch');
  const buttonBackgroundTabsColor = useThemeColor({}, 'buttonBackgroundTabs')
  const borderColor = useThemeColor({}, 'borderColor');

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
        style={[styles.searchInput, { backgroundColor: searchInputColor, borderColor: borderColor }]} 
        placeholder="Ask Meta AI or Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.filterContainer}>
        {['all', 'unread', 'favorites', 'groups'].map((type) => (
          <TouchableOpacity
            key={type}
            onPress={() => applyFilter(type as typeof filter)}
            style={[
              styles.btnFilter,
              { backgroundColor: filter === type ? btnBackgroundFilterChat : buttonBackgroundTabsColor },
            ]}
          >
            <Text
              style={[
                styles.filterText,
                { color: filter === type ? activeFilterColor : filterButtonColor },
              ]}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.iconContainer, { backgroundColor: buttonBackgroundTabsColor }]}>
          <AntDesign name="plus" size={widthSizes[20]} color={filterButtonColor} />
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
    margin: widthSizes[10],
  },
  chatContainer: {
    flexDirection: 'row',
    padding: widthSizes[20],
    borderBottomWidth: heightSizes[0.2],
    alignItems: 'center',
  },
  chatDetails: {
    flexDirection: 'column',
  },
  sender: {
    fontWeight: 'bold',
  },
  lastMessage: {},
  timestamp: {},
  searchInput: {
    margin: widthSizes[10],
    padding: widthSizes[8],
    borderWidth: heightSizes[1],
    borderRadius: widthSizes[10],
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: heightSizes[10],
  },
  btnFilter: {
    borderRadius: widthSizes[20],
    paddingHorizontal: widthSizes[8],
  },
  filterText: {
    padding: widthSizes[8],
    fontWeight: '600',
  },
  iconContainer: {
    paddingHorizontal: widthSizes[6],
    borderRadius: widthSizes[50],
    justifyContent: 'center',
  },
});

export default ChatsScreen;
