import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { Ionicons, MaterialIcons, Entypo, FontAwesome6 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useThemeColor } from '@/hooks/useThemeColor';
import { widthSizes, heightSizes } from '@/constants/Sizes';

type IconLibrary = 'Ionicons' | 'MaterialIcons' | 'Entypo' | 'FontAwesome6';

type SettingsOption = {
  id: string;
  label: string;
  icon: string;
  iconLibrary: IconLibrary;
};

const userOptions = { 
  id: '0', 
  name: 'Juanito Perez', 
  status: 'Available', 
  profileImage: 'https://i0.wp.com/ilusiono.com/wp-content/uploads/2024/03/61f9f108-ccda-452f-994f-7f78ba4f5571.jpg?w=1024&ssl=1' 
};

const firstOptions: SettingsOption[] = [
  { id: '1', label: 'Lists', icon: 'albums', iconLibrary: 'Ionicons' },
  { id: '2', label: 'Broadcast messages', icon: 'megaphone', iconLibrary: 'Ionicons' },
  { id: '3', label: 'Starred messages', icon: 'star', iconLibrary: 'Ionicons' },
  { id: '4', label: 'Link devices', icon: 'computer', iconLibrary: 'MaterialIcons' },
];

const secondOptions: SettingsOption[] = [
  { id: '5', label: 'Account', icon: 'key', iconLibrary: 'Ionicons' },
  { id: '6', label: 'Privacy', icon: 'lock-closed', iconLibrary: 'Ionicons' },
  { id: '7', label: 'Chats', icon: 'chatbubble', iconLibrary: 'Ionicons' },
  { id: '8', label: 'Notifications', icon: 'notification', iconLibrary: 'Entypo' },
  { id: '9', label: 'Storage and data', icon: 'mobiledata-on', iconLibrary: 'MaterialIcons' },
];

const thirdOptions: SettingsOption[] = [
  { id: '10', label: 'Help', icon: 'information-circle', iconLibrary: 'Ionicons' },
  { id: '11', label: 'Invite a friend', icon: 'people', iconLibrary: 'Ionicons' },
];

const otherOptions: SettingsOption[] = [
  { id: '12', label: 'Instagram', icon: 'logo-instagram', iconLibrary: 'Ionicons' },
  { id: '13', label: 'Facebook', icon: 'logo-facebook', iconLibrary: 'Ionicons' },
  { id: '14', label: 'Threads', icon: 'threads', iconLibrary: 'FontAwesome6' },
];

const SettingsScreen: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const backgroundColor = useThemeColor({}, 'backgroundCalls');
  const backgroundColorSection = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const textStatus = useThemeColor({}, 'textBackgroundTabs');
  const buttonBackgroundColor = useThemeColor({}, 'buttonBackgroundTabs');
  const borderColor = useThemeColor({}, 'borderColor');
  
  const renderIcon = (option: SettingsOption) => {
    switch (option.iconLibrary) {
      case 'Ionicons':
        return <Ionicons name={option.icon as keyof typeof Ionicons.glyphMap} size={24} color="#075E54" style={styles.icon} />;
      case 'MaterialIcons':
        return <MaterialIcons name={option.icon as keyof typeof MaterialIcons.glyphMap} size={24} color="#075E54" style={styles.icon} />;
      case 'Entypo':
        return <Entypo name={option.icon as keyof typeof Entypo.glyphMap} size={24} color="#075E54" style={styles.icon} />;
      case 'FontAwesome6':
        return <FontAwesome6 name={option.icon as keyof typeof FontAwesome6.glyphMap} size={24} color="#075E54" style={styles.icon} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={[{flex:1}, {backgroundColor}]}>
      <ScrollView style={[{ flex: 1}, {backgroundColor}]}>
        <Text style={[styles.title, {color:textColor}]} >Settings</Text>
        <TextInput
          style={[styles.searchInput, {backgroundColor: buttonBackgroundColor, borderColor: borderColor}]}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <View style={[styles.userSection, {backgroundColor:backgroundColorSection}]}>
          <Image source={{ uri: userOptions.profileImage }} style={styles.profileImage} />
          <View>
            <Text style={[styles.userName, {color: textColor}]}>{userOptions.name}</Text>
            <Text style={[styles.userStatus, {color: textStatus}]}>{userOptions.status}</Text>
          </View>
        </View>
        <View style={[styles.section, {backgroundColor:backgroundColorSection}]}>
          {firstOptions.map((option) => (
            <TouchableOpacity key={option.id} style={styles.option}>
              {renderIcon(option)}
              <Text style={[styles.label, {color: textColor}]}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={[styles.section, {backgroundColor:backgroundColorSection}]}>
          {secondOptions.map((option) => (
            <TouchableOpacity key={option.id} style={styles.option}>
              {renderIcon(option)}
              <Text style={[styles.label, {color: textColor}]}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>
          {thirdOptions.map((option) => (
            <TouchableOpacity key={option.id} style={styles.option}>
              {renderIcon(option)}
              <Text style={[styles.label, {color: textColor}]}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Also from Meta</Text>
          {otherOptions.map((option) => (
            <TouchableOpacity key={option.id} style={styles.option}>
              {renderIcon(option)}
              <Text style={[styles.label, {color: textColor}]}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginHorizontal: widthSizes[10],
    fontSize: 25,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: widthSizes[16],
    marginBottom: heightSizes[20],
  },
  profileImage: {
    width: widthSizes[50],
    height: widthSizes[50],
    borderRadius: widthSizes[25],
    marginRight: widthSizes[16],
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 14,
  },
  searchInput: {
    padding: widthSizes[10],
    margin: widthSizes[16],
    borderRadius: widthSizes[10],
    borderWidth: 1,
  },
  section: {
    marginBottom: heightSizes[30],
  },
  sectionTitle: {
    fontSize: 14,
    color: 'grey',
    paddingVertical: heightSizes[10],
    paddingHorizontal: widthSizes[16],
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: widthSizes[16],
  },
  icon: {
    marginRight: widthSizes[16],
  },
  label: {
    fontSize: 16,
  },
});

export default SettingsScreen;
