import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

const HeaderChats: React.FC = () => {
const backgroundColor = useThemeColor({}, 'background');
const buttonBackgroundColor = useThemeColor({},'buttonBackgroundTabs');
const buttonActiveOn = useThemeColor({}, 'buttonActiveOn'); 
const textColor = useThemeColor({}, 'text');

  return (
    <SafeAreaView>
      <View style={[styles.principalContainer, {backgroundColor}]}>
        <View style={styles.firstContainer}>
          <TouchableOpacity style={[styles.iconContainer1, {backgroundColor: buttonBackgroundColor}]}>
            <Ionicons name="ellipsis-horizontal" size={20} color={textColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity style={[styles.iconContainer, {backgroundColor: buttonBackgroundColor}]}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Meta_AI_logo.png' }}
              style={styles.metaIcon} 
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconContainer, {backgroundColor: buttonBackgroundColor}]}>
            <Ionicons name="camera-outline" size={20} color={textColor} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconContainer, {backgroundColor:buttonActiveOn}]}>
            <AntDesign name="plus" size={20} color={backgroundColor}/>
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
  },
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    flex: 1, 
    paddingHorizontal:10,
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1, 
    paddingRight: 16,
    paddingHorizontal: 150,
  },
  iconContainer1: {
    padding: 5,
    borderRadius: 50,
  },
  iconContainer: {
    padding: 5,
    borderRadius: 50,
  },
  metaIcon: {
    width: 20,
    height: 20,
  },
});

export default HeaderChats;
