import React, { useState, useEffect, FC } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import TextApp from '@/components/TextApp';
import TextInputApp from '@/components/TextInputApp';
import Header from '@/components/HeaderChats';

import useChats from '@/hooks/useChats';
import { useThemeColor } from '@/hooks/useThemeColor';

import { widthSizes, heightSizes } from '@/constants/Sizes';

import { ChatDetail } from '@/models/chats';

const ChatsScreen: FC = () => {
  const searchInputColor = useThemeColor({}, 'searchInput');
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const btnBackgroundFilterChat = useThemeColor({}, 'btnBackgroundFilterChat');
  const activeFilterColor = useThemeColor({}, 'buttonFilterTextChat');
  const filterButtonColor = useThemeColor({}, 'textBackgroundTabs');
  const textSearchColor = useThemeColor({}, 'textSearch');
  const buttonBackgroundTabsColor = useThemeColor({}, 'buttonBackgroundTabs');
  const borderColor = useThemeColor({}, 'borderColor');

  const userId = 'SObya8AzAYBgI98kdAcc';
  const chats: ChatDetail[] = useChats(userId);
  const [filteredChats, setFilteredChats] = useState<ChatDetail[]>(chats);
  const [filter, setFilter] = useState<'all' | 'unread' | 'favorites' | 'groups'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    applyFilter(filter);
  }, [filter, chats]);

  const applyFilter = (type: 'all' | 'unread' | 'favorites' | 'groups') => {
    setFilter(type);
    if (type === 'unread') {
      setFilteredChats(chats.filter((chat) => chat.messages?.length === 0));
    } else if (type === 'groups') {
      setFilteredChats(chats.filter((chat) => chat.name.includes('Group')));
    } else if (type === 'favorites') {
      setFilteredChats(chats.filter((chat) => chat.name.includes('Favorites')));
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
        <TextApp style={[{ color: textColor }]} text={item.name} fontWeight={'bold'} />
        <TextApp
          style={[styles.lastMessage, { color: textColor }]}
          text={item.messages?.[0]?.message || 'No messages yet'}
        />
        <TextApp
          style={[styles.timestamp, { color: textSearchColor }]}
          text={item.messages?.[0]?.createdAt ? new Date(item.messages[0].createdAt).toLocaleTimeString() : ''}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[{flex:1}, { backgroundColor }]}>
      <Header />
      <TextApp style={[styles.title, { color: textColor }]} text={'Chats'} fontWeight={'bold'} />
      <TextInputApp
        style={[{ backgroundColor: searchInputColor, borderColor: borderColor }]}
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
            <TextApp
              style={[styles.filterText, { color: filter === type ? activeFilterColor : filterButtonColor }]}
              text={type.charAt(0).toUpperCase() + type.slice(1)}
              fontWeight={'600'}
            />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.iconContainer, { backgroundColor: buttonBackgroundTabsColor }]}>
          <AntDesign name="plus" size={widthSizes[20]} color={filterButtonColor} />
        </TouchableOpacity>
      </View>
      <FlatList data={filteredChats} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: widthSizes[10],
    fontSize: heightSizes[25],
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
  lastMessage: {
    fontSize: heightSizes[13],
  },
  timestamp: {
    fontSize: heightSizes[10],
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
  },
  iconContainer: {
    paddingHorizontal: widthSizes[6],
    borderRadius: widthSizes[50],
    justifyContent: 'center',
  },
});

export default ChatsScreen;
