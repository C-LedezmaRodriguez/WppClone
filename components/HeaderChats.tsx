import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const HeaderChats: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.principalContainer}>
        <View style={styles.firstContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Meta_AI_logo.png' }}
              style={styles.metaIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="camera-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconContainer, styles.circularBorder]}>
            <AntDesign name="plus" size={24} color="black"/>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  principalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    flex: 1, 
  },
  secondContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', 
    flex: 1, 
    paddingRight: 16
  },
  iconContainer: {
    paddingHorizontal: 8,
  },
  circularBorder: {
    width: 40,
    height: 40, 
    borderRadius: 20, 
    borderWidth: 1,
    borderColor: 'green',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  metaIcon: {
    width: 24,
    height: 24,
  },
});

export default HeaderChats;
