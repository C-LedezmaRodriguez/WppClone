import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Header: React.FC = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Meta_AI_logo.png' }} style={styles.metaIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="camera-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
            <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    padding: 8,
  },
  metaIcon: {
    width: 24,
    height: 24,
  },
});

export default Header;
