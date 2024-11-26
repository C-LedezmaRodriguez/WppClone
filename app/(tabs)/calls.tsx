import React, { FC, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import HeaderCalls from '@/components/HeaderCalls';
import TextApp from '@/components/TextApp';

import { useThemeColor } from '@/hooks/useThemeColor';
import { widthSizes, heightSizes } from '@/constants/Sizes';

const CallsScreen: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const backgroundColor = useThemeColor({}, 'backgroundCalls');
  const backgroundColorSearch = useThemeColor({}, 'background');
  const buttonBackgroundColor = useThemeColor({}, 'buttonBackgroundTabs');
  const textColor = useThemeColor({}, 'text');
  const borderColor = useThemeColor({}, 'borderColor');

  const handleAddFavorite = () => {
    if (searchQuery.trim()) {
      setFavorites([...favorites, searchQuery.trim()]);
      setSearchQuery('');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <HeaderCalls />
      <TextApp style={[styles.title, { color: textColor }]} text={'Calls'} fontWeight={'bold'} />
      <TextInput
        style={[styles.searchInput, { backgroundColor: buttonBackgroundColor, borderColor: borderColor }]}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.favoritesContainer}>
        <TextApp style={[styles.favoritesTitle, { color: textColor }]} text={'Favorites'} fontWeight={'bold'} />
      </View>
      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: backgroundColorSearch }]}
        onPress={handleAddFavorite}
      >
        <TextApp style={[styles.addButtonText, { color: textColor }]} text={'Add favorite'} />
      </TouchableOpacity>
      <View style={styles.content}>
        <TextApp text={'llamaditas'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    margin: widthSizes[10],
    fontSize: heightSizes[25],
  },
  content: {
    flex: 1,
    padding: widthSizes[30],
    justifyContent: 'center',
  },
  searchInput: {
    margin: widthSizes[10],
    padding: heightSizes[8],
    borderWidth: 1,
    borderRadius: widthSizes[10],
  },
  addButton: {
    marginHorizontal: widthSizes[10],
    paddingVertical: heightSizes[10],
    paddingHorizontal: widthSizes[8],
    borderRadius: widthSizes[10],
  },
  addButtonText: {
    textAlign: 'left',
    fontSize: heightSizes[15],
  },
  favoritesContainer: {
    marginTop: heightSizes[20],
    paddingHorizontal: widthSizes[10],
  },
  favoritesTitle: {
    fontSize: heightSizes[18],
    marginBottom: heightSizes[10],
  },
});

export default CallsScreen;
