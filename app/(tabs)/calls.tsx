import { useState} from 'react';
import { View, Text, StyleSheet,SafeAreaView, TextInput, TouchableOpacity, FlatList} from 'react-native';
import HeaderCalls from '@/components/HeaderCalls';

const CallsScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleAddFavorite = () => {
    if (searchQuery.trim()) {
      setFavorites([...favorites, searchQuery.trim()]);
      setSearchQuery('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderCalls />
      <Text style={styles.title} >Calls</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.favoritesContainer}>
        <Text style={styles.favoritesTitle}>Favorites</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddFavorite}>
        <Text style={styles.addButtonText}>Add favorite</Text>
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
    backgroundColor: '#f5f5f5',
  },
  title:{
    fontWeight: 'bold',
    margin: 10,
    fontSize: 25,
  },
  content: {
    flex: 1,
    padding: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    justifyContent: 'center',
  },
  searchInput: {
    margin: 10,
    padding: 8,
    borderColor: '#f5f5f5',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#eeecea',
  },
  addButton: {
    marginHorizontal: 10,
    padding: 10,
    paddingHorizontal:20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  addButtonText: {
    color: 'black',
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
  favoriteItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
  },
  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CallsScreen;
