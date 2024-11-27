import React, { FC, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

import HeaderCalls from '@/components/HeaderCalls';
import TextApp from '@/components/TextApp';
import TextInputApp from '@/components/TextInputApp';

import { useThemeColor } from '@/hooks/useThemeColor';
import { widthSizes, heightSizes } from '@/constants/Sizes';

const CallsScreen: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const backgroundColor = useThemeColor({}, 'backgroundCalls');
  const searchInputColor = useThemeColor({}, 'searchInput');
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
    <SafeAreaView style={[{flex:1}, { backgroundColor }]}>
      <HeaderCalls />
      <TextApp style={[styles.title, { color: textColor }]} text={'Calls'} fontWeight={'bold'} />
      <TextInputApp
        style={[{ backgroundColor: searchInputColor, borderColor: borderColor }]}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.favoritesContainer}>
        <TextApp style={[styles.favoritesTitle, { color: textColor }]} text={'Favorites'} fontWeight={'bold'} />
      </View>
      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: buttonBackgroundColor}]}
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
  title: {
    margin: widthSizes[10],
    fontSize: heightSizes[25],
  },
  content: {
    flex: 1,
    padding: widthSizes[30],
    justifyContent: 'center',
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
