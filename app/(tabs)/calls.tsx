import { useState} from 'react';
import { View, Text, StyleSheet,SafeAreaView, TextInput, TouchableOpacity, FlatList} from 'react-native';
import HeaderCalls from '@/components/HeaderCalls';
import { useThemeColor } from '@/hooks/useThemeColor';

const CallsScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const backgroundColor = useThemeColor({}, 'backgroundCalls');
  const backgroundColorSearch = useThemeColor({}, 'background');
  const buttonBackgroundColor = useThemeColor({}, 'buttonBackgroundTabs');
  const textColor = useThemeColor({}, 'text');


  const handleAddFavorite = () => {
    if (searchQuery.trim()) {
      setFavorites([...favorites, searchQuery.trim()]);
      setSearchQuery('');
    }
  };
  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <HeaderCalls />
      <Text style={[styles.title, {color:textColor}]} >Calls</Text>
      <TextInput
        style={[styles.searchInput, {backgroundColor: buttonBackgroundColor}]}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.favoritesContainer}>
        <Text style={[styles.favoritesTitle, {color:textColor}]}>Favorites</Text>
      </View>
      <TouchableOpacity style={[styles.addButton, {backgroundColor: backgroundColorSearch}]} onPress={handleAddFavorite}>
        <Text style={[styles.addButtonText, {color: textColor}]}>Add favorite</Text>
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
  title:{
    fontWeight: 'bold',
    margin: 10,
    fontSize: 25,
  },
  content: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  searchInput: {
    margin: 10,
    padding: 8,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 10,
  },
  addButton: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  addButtonText: {
    textAlign: 'left'
  },
  favoritesContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  favoritesTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },

});

export default CallsScreen;
