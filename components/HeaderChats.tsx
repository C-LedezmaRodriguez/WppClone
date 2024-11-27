import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import {fontSizes, heightSizes, widthSizes} from "@/constants/Sizes";

const HeaderChats: React.FC = () => {
const backgroundColor = useThemeColor({}, 'background');
const buttonBackgroundColor = useThemeColor({},'buttonBackgroundTabs');
const buttonPlusColor = useThemeColor({}, 'buttonActiveOn'); 
const textColor = useThemeColor({}, 'text');

  return (
    <SafeAreaView>
      <View style={[styles.principalContainer, {backgroundColor}]}>
        <View style={styles.firstContainer}>
          <TouchableOpacity style={[styles.iconContainer1, {backgroundColor: buttonBackgroundColor}]}>
            <Ionicons name="ellipsis-horizontal" size={widthSizes[20]} color={textColor} />
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
            <Ionicons name="camera-outline" size={widthSizes[20]} color={textColor} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.iconContainer, {backgroundColor:buttonPlusColor}]}>
            <AntDesign name="plus" size={widthSizes[20]} color={backgroundColor}/>
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
    paddingVertical: widthSizes[10],
  },
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    flex: 1, 
    paddingHorizontal: widthSizes[10],
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1, 
    paddingRight: widthSizes[16],
    paddingHorizontal: widthSizes[150],
  },
  iconContainer1: {
    padding: widthSizes[5],
    borderRadius: 50,
  },
  iconContainer: {
    padding: widthSizes[5],
    borderRadius: 50,
  },
  metaIcon: {
    width: widthSizes[20],
    height: heightSizes[20]
  },
});

export default HeaderChats;
