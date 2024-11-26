import { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import HeaderCalls from '@/components/HeaderCalls';
import { useThemeColor } from '@/hooks/useThemeColor';
import { widthSizes, heightSizes } from '@/constants/Sizes'

const CallsScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const backgroundColor = useThemeColor({}, 'backgroundCalls');
  const backgroundColorSearch = useThemeColor({}, 'background');
  const buttonBackgroundColor = useThemeColor({}, 'buttonBackgroundTabs');
  const textColor = useThemeColor({}, 'text');
  const borderColor = useThemeColor({}, 'borderColor')

  const handleAddFavorite = () => {
    if (searchQuery.trim()) {
      setFavorites([...favorites, searchQuery.trim()]);
      setSearchQuery('');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <HeaderCalls />
      <Text style={[styles.title, { color: textColor }]}>Calls</Text>
      <TextInput
        style={[styles.searchInput, { backgroundColor: buttonBackgroundColor, borderColor: borderColor}]}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.favoritesContainer}>
        <Text style={[styles.favoritesTitle, { color: textColor }]}>Favorites</Text>
      </View>
      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: backgroundColorSearch }]}
        onPress={handleAddFavorite}
      >
        <Text style={[styles.addButtonText, { color: textColor }]}>Add favorite</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text>llamaditas</Text>
      </View>
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
    fontWeight: 'bold',
    fontSize: heightSizes[18], 
    marginBottom: heightSizes[10],
  },
});

export default CallsScreen;
